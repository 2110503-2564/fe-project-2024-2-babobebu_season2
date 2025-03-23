"use client"; 
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getJobPosting from "@/libs/getJobPosting"; // Ensure this works client-side

export default function JobPostingDetailPage({ params }: { params: { jpid: string } }) {
    const [jobPosting, setJobPosting] = useState<any>(null);
    const router = useRouter();

    // Fetch job posting details on client side
    useEffect(() => {
        async function fetchJobPosting() {
            const data = await getJobPosting(params.jpid);
            setJobPosting(data);
        }
        fetchJobPosting();
    }, [params.jpid]);

    if (!jobPosting) {
        return <div className="text-center text-white">Loading...</div>;
    }

    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-cyan-600 to-green-500 text-white flex flex-col items-center py-12 px-6">
            {/* Job Posting Title */}
            <h1 className="text-3xl font-extrabold drop-shadow-lg mb-8">
                {jobPosting.data.title}
            </h1>

            {/* Emoji Section with Emojis */}
            <div className="w-full max-w-4xl bg-white/90 text-black rounded-xl shadow-lg p-6 space-y-5 mt-8">
                <p className="text-md text-gray-700">📜 <strong>Description:</strong> {jobPosting.data.jobdescription}</p>
                <p className="text-md text-gray-700">📋 <strong>Requirements:</strong> {jobPosting.data.requirement}</p>
                <p className="text-md text-gray-700">💰 <strong>Salary Range:</strong> {jobPosting.data.salary_range}</p>
                <p className="text-md text-gray-700">🔖 <strong>Job Type:</strong> {jobPosting.data.jobtype}</p>
                <p className="text-md text-gray-700">🏢 <strong>Company:</strong> {jobPosting.data.company.name}</p>
                <p className="text-md text-gray-700">📅 <strong>Posted Date:</strong> {new Date(jobPosting.data.posted_date).toLocaleDateString()}</p>
            </div>

            {/* Apply for Job Button */}
            <button
                onClick={() => router.push(`/applyJob?jpid=${params.jpid}`)}
                className="mt-8 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500"
            >
                Apply for Job
            </button>
        </main>
    );
}
