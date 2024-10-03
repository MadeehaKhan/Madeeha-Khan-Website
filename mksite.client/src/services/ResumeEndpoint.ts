export const getRelevantExperience = async ()=> {

    const result = await fetch(`experience`)
        .then((results) => {
            return results;
        })
    return result.json;
}

