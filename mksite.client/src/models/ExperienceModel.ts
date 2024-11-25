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
}

export type CompetencyModel = {
    id: number;
    title: string;
    url: string;
    details?: string;
    category: string;
}