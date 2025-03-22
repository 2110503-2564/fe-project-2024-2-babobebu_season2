"use client";

import { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation"; // Get interviewId from URL
import { updateInterview } from "@/libs/updateInterview"; // Import backend function

function UpdateInterview() {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const interviewId = searchParams.get("interviewId"); // Get interviewId from URL

    // Fetch user profile when component mounts
    useEffect(() => {
        async function fetchUserProfile() {
            const response = await fetch("/api/user");
            const data = await response.json();

            if (data.error) {
                alert("User not authenticated");
                return;
            }

            setUserId(data._id);
        }

        fetchUserProfile();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate || !userId || !interviewId) {
            alert("Please select a date and ensure you are logged in.");
            return;
        }

        const updatedData = {
            intwDate: selectedDate.toISOString(), // Convert to ISO format
            user: userId,
        };

        // Call the backend function
        const result = await updateInterview(interviewId, updatedData);

        if (result.success) {
            alert(result.message);
        } else {
            alert(`Error: ${result.message}`);
        }
    };

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Update Interview</div>
            <div className="text-md text-gray-600 text-center">
                Please select a new interview date.
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-fit p-4 bg-white rounded-lg shadow-lg">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={selectedDate}
                            onChange={(newDate: Dayjs | null) => setSelectedDate(newDate)}
                            slots={{ textField: TextField }}
                        />
                    </LocalizationProvider>
                </div>
                <button
                    className="block rounded bg-[#F5DEB3] hover:bg-[#8B4513] px-6 py-3 text-white shadow-md font-semibold"
                    type="submit"
                >
                    Update Interview
                </button>
            </form>
        </main>
    );
}

export default UpdateInterview;
