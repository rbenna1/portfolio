const { SESClient, SendEmailCommand } = require("@aws-sdk/client-ses");

const sesClient = new SESClient({ region: "us-east-1" });

exports.handler = async (event) => {
	try {
		console.log('Event received:', JSON.stringify(event));
		console.log('ADMIN_EMAIL env var:', process.env.ADMIN_EMAIL);
		
		// Handle missing body
		if (!event.body) {
			console.log('No body found in event');
			return {
				statusCode: 400,
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*"
				},
				body: JSON.stringify({
					message: "Request body is required"
				})
			};
		}
		
		let body;
		if (typeof event.body === 'string') {
			body = JSON.parse(event.body);
		} else {
			body = event.body;
		}
		
		console.log('Parsed body:', JSON.stringify(body));
		
		const { message, name, email } = body;

		// Validate inputs
		if (
			!message || message.length < 5 || message.length > 1000 ||
			!name || name.length < 2 || name.length > 50 ||
			!email || email.length < 5 || !email.includes ('@')
		) {
			console.log('Validation failed');
			return {
				statusCode: 400,
				headers: {
					"Content-Type": "application/json",
					//"Access-Control-Allow-Origin": "*"
					"Access-Control-Allow-Origin": "https://rafikben.cloud"
				},
				body: JSON.stringify({
					message: "Missing required fields: message, name, and email are required"
				})
			};
		}

		// Verify ADMIN_EMAIL is set
		if (!process.env.ADMIN_EMAIL) {
			console.error('ADMIN_EMAIL environment variable is not set');
			return {
				statusCode: 500,
				headers: {
					"Content-Type": "application/json",
					////"Access-Control-Allow-Origin": "*"
					"Access-Control-Allow-Origin": "https://rafikben.cloud"
				},
				body: JSON.stringify({
					message: "Server configuration error"
				})
			};
		}

		// Create email parameters
		const params = {
			Destination: {
				ToAddresses: [process.env.ADMIN_EMAIL]
			},
			Message: {
				Body: {
					Text: {
						Data: `New Portfolio Contact Form Submission\n\n\nFrom:\n${name} (${email})\n\n\nMessage:\n${message}`
					}
				},
				Subject: {
					Data: "New Portfolio Contact Form Submission"
				}
			},
			Source: process.env.ADMIN_EMAIL
		};

		console.log('Sending email via SES...');
		// Send email using SES
		await sesClient.send(new SendEmailCommand(params));
		console.log('Email sent successfully');

		return {
			statusCode: 200,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "https://rafikben.cloud"
			},
			body: JSON.stringify({
				message: "Email sent successfully"
			})
		};
	} catch (error) {
		console.error('Error caught in handler:', error);
		console.error('Error message:', error.message);
		console.error('Error stack:', error.stack);

		return {
			statusCode: 500,
			headers: {
				"Content-Type": "application/json",
				"Access-Control-Allow-Origin": "https://rafikben.cloud"
			},
			body: JSON.stringify({
				message: "Error processing request"
			})
		};
	}
};