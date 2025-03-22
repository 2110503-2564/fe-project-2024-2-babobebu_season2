"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getInterview from "@/libs/getInterview"; 
import { deleteinterview } from "@/libs/deleteInterview";

export default function InterviewDetailPage({ params }: { params: { iid: string } }) {
    console.log("InterviewDetailPage params:", params);
    const router = useRouter();
    const [interviewDetail, setInterviewDetail] = useState<any>(null);

    // Fetch interview details on client side
    useEffect(() => {
        async function fetchInterview() {
            const data = await getInterview(params.iid);  
            console.log("Fetched Interview Data:", data); 
            setInterviewDetail(data);
        }
        fetchInterview();
    }, [params.iid]);

    if (!interviewDetail) {
        return <div className="text-center text-black">Loading...</div>;
    }

    
    const { company, intwDate } = interviewDetail.data;

    async function handleDelete() {
        try {
            await deleteinterview(params.iid);
            console.log("Interview deleted successfully!");
            router.push('/deleteinterview');
        } catch (error) {
            console.error("Error deleting interview:", error);
            // Display an error message to the user
        }
    }

    return (
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium text-black">{company?.name || "Unknown Company"}</h1>
            <div className="flex flex-row my-5">
                <Image
                    src="https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH"
                    alt="Company Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-left text-black">
                    <div className="text-md mx-5">Company Name: {company?.name || "Unknown"}</div>
                    <div className="text-md mx-5">Description: {company?.description || "No description available"}</div>
                    <div className="text-md mx-5">Telephone: {company?.telephonenumber || "N/A"}</div>
                    <div className="text-md mx-5">Interview Date: {new Date(intwDate).toLocaleString()}</div>
                </div>
            </div>
            <button className="bg-red-400 hover:bg-red-600 p-2" onClick={handleDelete} >
               Delete Job posting 
            </button>
            
        </main>
    );
}

