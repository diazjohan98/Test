export const generateID = (): string => 
    window.URL.createObjectURL(new Blob([])).slice(-36);

export const sleep = (ms: number): Promise<void> =>
    new Promise(resolve => setTimeout(resolve, ms)); 
