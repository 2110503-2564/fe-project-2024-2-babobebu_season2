import { getSession } from "next-auth/react";

export async function getInterviews() {
    try {
        const session = await getSession();
        // console.log("return Session Data:", session);
        const token = session?.user?.token;
        if (!token) {
            console.log("No token found, please log in.");
            return { success: false, message: "Unauthorized: No token found. Please log in.", data: [] };
        } else {
            // console.log("found token ", token);
        }

        const response = await fetch("http://localhost:5005/api/v1/interviews", {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        });

        if (!response.ok) {
            console.log("Failed to fetch interviews.");            
        }

        return await response.json();
    } catch (error) {
        console.error("Error fetching interviews:", error);
        return { success: false, message: `Error: ${(error as Error).message}`, data: [] };
    }
}
