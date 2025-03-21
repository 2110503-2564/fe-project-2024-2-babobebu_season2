async function getInterview(interviewId: string) {
    try {
        const response = await fetch(`http://localhost:5005/interviews/${interviewId}`);
        if (!response.ok) {
            throw new Error("Failed to fetch interview");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching interview:", error);
        return { success: false, message: error instanceof Error ? error.message : "Unknown error" };
    }
}

export default getInterview;
