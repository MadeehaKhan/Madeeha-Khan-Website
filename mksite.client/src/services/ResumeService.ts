
export const getRelevantExperience = async (url: string) => {
    const result = await fetch(`${url}`)
        .then((results) => {
            return results;
        })
    return result.json;
}
