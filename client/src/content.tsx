import {
	Mail
} from "lucide-react";
import {
	ReactNode
} from "react";
import GitHub from "./components/Icons/GitHub";
import LinkedIn from "./components/Icons/LinkedIn";

export const name = "Rafik Bennacer";


export const email: string | null = "rafik.bennacer.cs@gmail.com";

// Set this to null if you don't want a footer link
export const footerLink: {
	label: string;
	href: string;
} | null = null


export const showAvailability: string | null = "Available for new opportunities!";

export const description = `The personal portfolio website of ${ name }`;

export const keywords = "developer, software, engineer, aws, devops, python, API design, machine learning";

export const intro: [string, string] = [
	"Building Digital",
	"Experiences"
] as const;

export const taglines: string[] = [
	"DevOps Engineer at Crédit Agricole",
	"Cloud & HPC Enthusiast",
	
] as const;

export const nextButton = "See My Work";

export const contactFormSuccess = "Thank you for your message! I'll get back to you soon.";
export const contactFormError = `An error occurred when trying to send your message, please try again later or send an email to ${ email }`;

export const links: {
	label: string;
	icon: ReactNode;
	// If a link is provided, an anchor tag will be used
	link?: string;
	// If a value is provided, a copy button will be used
	value?: string;
}[] = [
	{
		label: "Visit my GitHub",
		link: "https://github.com/rbenna1",
		icon: <GitHub/>
	},
	{
		label: "Connect with me on LinkedIn",
		link: "https://www.linkedin.com/in/rafik-bennacer/",
		icon: <LinkedIn/>
	},
	{
		label: "Send me an email",
		value: email,
		icon: <Mail size={ 24 }/>
	}
];

export const projects: {
	title: string;
	description: string;
	tech: string[];
	link: string;
	img: string;
}[] = [
	{
		title: "Kube",
		description: "Scalable AWS infrastructure managed with Terraform. Multi-environment setup with cost optimization and security best practices.",
		tech: [ "Terraform", "AWS", "Python", "Lambda", "DynamoDB" ],
		link: "https://github.com/rbenna1",
		img: "/project/infrastructure.webp"
	},
	{
		title: "PromCP",
		description: "RESTful API with authentication, rate limiting, and comprehensive error handling. Production-ready with full test coverage.",
		tech: [ "Node.js", "Express", "PostgreSQL", "GraphQL", "Jest" ],
		link: "https://github.com/rbenna1",
		img: "/project/backend.webp"
	},
	{
		title: "Data Pipeline",
		description: "Automated data processing pipeline with ETL workflows, data validation, and real-time analytics integration.",
		tech: [ "Python", "Apache Airflow", "PostgreSQL", "AWS S3", "Pandas" ],
		link: "https://github.com/rbenna1",
		img: "/project/pipeline.webp"
	},
	{
		title: "Monitoring & Observability",
		description: "Comprehensive monitoring stack with logging, metrics, and distributed tracing for microservices architecture.",
		tech: [ "Prometheus", "Grafana", "ELK Stack", "Jaeger", "Docker" ],
		link: "https://github.com/rbenna1",
		img: "/project/monitoring.webp"
	},
	{
		title: "RaspTANK",
		description: "Comprehensive monitoring stack with logging, metrics, and distributed tracing for microservices architecture.",
		tech: [ "Prometheus", "Grafana", "ELK Stack", "Jaeger", "Docker" ],
		link: "https://github.com/rbenna1",
		img: "/project/monitoring.webp"
	}
] as const;

export const skills: {
	name: string;
	level: number;
	subSkills?: string[];
}[] = [
	{
		name: "Backend Development",
		level: 85,
		subSkills: [ "Node.js", "Python", "PostgreSQL", "MongoDB", "GraphQL", "Express", "Django", "REST APIs" ]
	},
	{
		name: "DevOps",
		level: 80,
		subSkills: [ "Docker", "CI/CD", "AWS", "Kubernetes", "GitHub Actions", "Terraform", "Linux" ]
	}
];
