export const sections = {
	ABOUT: "about",
	PROJECTS: "projects",
	SKILLS: "skills"
} as const;

export type SectionId = ( typeof sections )[keyof typeof sections];

export const sectionArray = Object.values( sections );
