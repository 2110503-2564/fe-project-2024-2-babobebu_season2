"use client"; 

import React, { useEffect, useState } from "react";
import getInterviews from "@/libs/getInterviews";
import { InterviewJson } from "../../../interface";
import DeleteInterviewCatalog from "@/components/DeleteInterviewCatalog";
const Page = () => {
    const [interviews, setInterviews] = useState<InterviewJson | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchInterviews = async () => {
            try {
                const data = await getInterviews();
                if (data.success) {
                    setInterviews(data);
                } else {
                    setError(data.message || "Failed to load interviews");
                }
            } catch (err) {
                setError("An error occurred while fetching interviews");
            } finally {
                setLoading(false);
            }
        };

        fetchInterviews();
    }, []);

    if (loading) {
        return <div className="text-center text-xl">Loading interviews...</div>;
    }

    if (error) {
        return <div className="text-center text-xl text-red-500">Error: {error}</div>;
    }

    return (
        <div className="p-6 text-black">
            <h1 className="text-2xl font-bold mb-6 text-center">Interviews</h1>
            {interviews && interviews.data.length > 0 ? (
                <DeleteInterviewCatalog interviewsJson={interviews} /> // Use InterviewCatalog component here
            ) : (
                <div className="text-center text-xl">No interviews found</div>
            )}
        </div>
    );
};

export default Page;

