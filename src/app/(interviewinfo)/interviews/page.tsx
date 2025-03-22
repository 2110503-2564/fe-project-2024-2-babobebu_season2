"use client";

import { useEffect, useState } from "react";
import InterviewCatalog from "@/components/InterviewCatalog";
import { getInterviews } from "@/libs/getInterviews";

export default function InterviewPage() {
    const [interviewsJson, setInterviewsJson] = useState(null);

    useEffect(() => {
        async function fetchData() {
            const data = await getInterviews();
            setInterviewsJson(data);
        }
        fetchData();
    }, []);

    if (!interviewsJson) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Interviews</div>
            <InterviewCatalog interviewsJson={interviewsJson} />
        </main>
    );
}
