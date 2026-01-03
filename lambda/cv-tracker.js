const { DynamoDBClient, PutItemCommand } = require("@aws-sdk/client-dynamodb");
const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");
const { v4: uuidv4 } = require("uuid");

const dynamoClient = new DynamoDBClient({ region: "us-east-1" });
const sesClient = new SESClient({ region: "us-east-1" });

exports.handler = async (event) => {
	try {
		console.log('CV click tracked:', JSON.stringify(event));

		const timestamp = Date.now();
		const clickId = uuidv4();
		const userAgent = event.headers?.["user-agent"] || "unknown";
		const sourceIp = event.requestContext?.http?.sourceIp || event.sourceIp || "unknown";

		// Get referrer to know where the click came from
		const referrer = event.headers?.["referer"] || "direct";

		// Record the click in DynamoDB
		const params = {
			TableName: `cv-clicks-${process.env.BUCKET_NAME}`,
			Item: {
				id: { S: clickId },
				timestamp: { N: timestamp.toString() },
				userAgent: { S: userAgent },
				sourceIp: { S: sourceIp },
				referrer: { S: referrer },
				// TTL: 90 days (7776000 seconds)
				expiration: { N: Math.floor(timestamp / 1000 + 7776000).toString() }
			}
		};

		await dynamoClient.send(new PutItemCommand(params));
		console.log("Click recorded successfully");

		// Optional: Send notification email for each CV click
		if (process.env.ADMIN_EMAIL && process.env.SEND_CV_CLICK_EMAILS === "true") {
			const emailParams = {
				Destination: {
					ToAddresses: [process.env.ADMIN_EMAIL]
				},
				Message: {
					Body: {
						Text: {
							Data: `CV Download Tracked\n\nTimestamp: ${new Date(timestamp).toISOString()}\nIP: ${sourceIp}\nUser Agent: ${userAgent}\nReferrer: ${referrer}`
						}
					},
					Subject: {
						Data: `📄 CV clicked from your portfolio`
					}
				},
				Source: process.env.ADMIN_EMAIL
			};

			try {
				await sesClient.send(new SendEmailCommand(emailParams));
				console.log("Notification email sent");
			} catch (emailError) {
				console.error("Failed to send notification email:", emailError);
				// Don't fail the request if email fails
			}
		}

		// Redirect to portfolio
		return {
			statusCode: 302,
			headers: {
				"Location": "https://rafikben.cloud"
			},
			body: ""
		};
	} catch (error) {
		console.error("Error in CV tracker:", error);

		// Still redirect even if tracking fails
		return {
			statusCode: 302,
			headers: {
				"Location": "https://rafikben.cloud"
			},
			body: ""
		};
	}
};
