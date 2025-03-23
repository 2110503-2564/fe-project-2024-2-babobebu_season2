"use client"; 
import React, { useEffect, useState } from "react";
import getInterviews from "@/libs/getInterviews";
import { InterviewJson } from "../../../../interface";
import InterviewCatalog from "@/components/InterviewCatalog";
import { LinearProgress } from "@mui/material";

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

    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-cyan-600 to-green-500 text-center py-16 px-6 text-white">
            {/* Page Title */}
            <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg mb-10">
                Explore Scheduled Interviews!
            </h1>

            {/* Loader */}
            {loading && (
                <div className="mt-10 flex flex-col items-center">
                    <p className="text-lg font-medium">Loading interviews...</p>
                    <div className="w-1/2 md:w-1/3 mt-2">
                        <LinearProgress color="inherit" />
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && <div className="text-xl text-red-500">{error}</div>}

            {/* Content */}
            {!loading && !error && interviews && interviews.data.length > 0 ? (
                <InterviewCatalog interviewsJson={interviews} />
            ) : (
                !loading && !error && <div className="text-xl">No interviews found.</div>
            )}
        </main>
    );
};

export default Page;