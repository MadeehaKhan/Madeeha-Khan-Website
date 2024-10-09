export async function getAboutData<T>(): Promise<T> {
    const response = await fetch(`/about/`);
    const body = await response.json();
    return body;
}