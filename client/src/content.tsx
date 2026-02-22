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
		title: "Personal Portfolio Website",
		description: "A personal portfolio website built with React and TypeScript, deployed on AWS using Terraform and GitHub Actions for CI/CD.",
		tech: ["React", "TypeScript", "AWS", "Terraform", "GitHub Actions"],
		link: "https://github.com/rbenna1/portfolio",
		img: "/project/archi.png"
	}, 

	{
		title: "Meteo France platform",
		description: "A web platform for visualizing and analyzing meteorological data ",
		tech: ["Python", "Project Management", "MongoDB", "Docker", "Redis", "Kafka", "Grafana", "Prometheus"],
		link: "https://github.com/Paris-Saclay-Meteo-OpenIoT/Meteo-France-Platform-IoT",
		img: "/project/weather.webp"

	}, 

	{
		title: "3D Pyramid game",
		description: "An interactive 3D pyramid game built with Processing, featuring realistic physics simulation including gravity, collision detection, and dynamic object interaction.",
		tech: ["Processing", "Java", "3D Graphics", "Physics Engine", "Game Development"],
		link: "https://github.com/rbenna1/Labyrinth",
		img: "/project/labyrinth.png"
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
		subSkills: [ "Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs" ]
	},
	{
		name: "DevOps",
		level: 80,
		subSkills: [ "Docker", "CI/CD", "AWS", "Kubernetes", "GitHub Actions", "Terraform", "Linux" ]
	}, 

	{
		name: "Cloud Computing",
		level: 75,
		subSkills: [ "AWS", "Lambda", "S3", "EC2", "VPC", "Route53" ]
	}

];
