// import { getInterview } from "@/libs/getInterview";

// export default async function InterviewDetailPage({ params }: { params: { iid: string } }) {
//     const interview = await getInterview(params.iid);
//     console.log(interview.data); // why this don't get called
//     console.log("show somthing");
//     return (
//         <main className="text-center p-5 text-black">
//             <h1 className="text-lg font-medium">Interview Details</h1>
//             <div className="text-left my-5">
//                 <p><strong>ID:</strong> {interview.data._id}</p>
//                 {/* <p><strong>Company:</strong> {interview.data.company.name}</p> */}
//                 {/* <p><strong>Interview Date:</strong> {new Date(interview.data.intwDate).toLocaleDateString()}</p> */}
//                 {/* <p><strong>Candidate:</strong> {interview.data.user.name}</p> */}
//                 {/* <p><strong>Created At:</strong> {new Date(interview.data.createdAt).toLocaleDateString()}</p> */}
//             </div>
//         </main>
//     );
// }
"use client"; // Add this at the top

import { useEffect, useState } from "react";
import { getInterview } from "@/libs/getInterview";

export default function InterviewDetailPage({ params }: { params: { iid: string } }) {
    const [interview, setInterview] = useState(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const itw = await getInterview(params.iid);
                console.log("Interview Data:", itw); // ✅ Now logs in browser console
                setInterview(itw);
            } catch (error) {
                console.error("Error fetching interview:", error);
            }
        }
        fetchData();
    }, [params.iid]);

    if (!interview) {
        return <p className="text-center">Loading...</p>;
    }

    return (
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium">Interview Details</h1>
            <div className="text-left my-5">
                <p><strong>User ID:</strong> {interview.data?.user}</p>
                <p><strong>Company:</strong> {interview.data?.company.name}</p>
                <p><strong>Interview Date:</strong> {interview.data?.intwDate}</p>
                <p><strong>Reservation Date:</strong> {interview.data?.createdAt}</p>
            </div>
        </main>
    );
}
