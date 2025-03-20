import { getSession } from "next-auth/react"; // Import getSession

export async function addCompany(formData: Record<string, string>) {
    try {
        const session = await getSession(); // Get session data
        const token = session?.user.token; // Extract token

        if (!token) {
            return { success: false, message: "No token found. Please log in." };
        }

        const response = await fetch("http://localhost:5005/api/v1/companies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`, // Send token from session
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.message || "Failed to submit data.");
        }

        return { success: true, message: "Data submitted successfully!" };
    } catch (error) {
        console.error("Error:", error);
        return { success: false, message: `Error submitting data` };
    }
}


