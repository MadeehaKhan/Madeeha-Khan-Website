export async function getRelevantExperience<T>(url: string): Promise<T> {
    const response = await fetch(`${url}`);
    const body = await response.json();
    return body;
}
