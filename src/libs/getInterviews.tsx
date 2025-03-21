async function getInterviews() {
    try {
        const response = await fetch("http://localhost:5005/interviews");
        if (!response.ok) {
            throw new Error("Failed to fetch interviews");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching interviews:", error);
        return { success: false, message: error instanceof Error ? error.message : "Unknown error" };
    }
}

export default getInterviews;
