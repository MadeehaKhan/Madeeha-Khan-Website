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
    coreCompetencies: string[];
    experienceList: ExperienceListModel[];
}