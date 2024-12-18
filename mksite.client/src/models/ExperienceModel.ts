export type ExperienceListModel = {
    id: number,
    organization: string,
    role: string, 
    duration: string,
    generalDescription: string,
    itemizedDescription: string[],
    link?: string
}

export type ExperienceModel = {
    title: string;
    introduction: string;
    coreCompetencies?: CompetencyModel[];
    experienceList: ExperienceListModel[];
    certifications?: CertificateModel[];
}

export type CompetencyModel = {
    id: number;
    title: string;
    url: string;
    details?: string;
    category: string;
}

export type CertificateModel = {
    id: number;
    courseName: string;
    institution: string;
    details: string;
    link?: string;
    github?: string;
}