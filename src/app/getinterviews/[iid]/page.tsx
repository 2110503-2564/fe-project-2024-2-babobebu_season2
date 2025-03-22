// // "use client"; // Mark as Client Component

// // import Image from "next/image";
// // import { useRouter } from "next/navigation";
// // import { useEffect, useState } from "react";
// // import getInterview from "@/libs/getInterview"; // Ensure this works client-side

// // export default function InterviewDetailPage({ params }: { params: { vid: string } }) {
// //     console.log("InterviewDetailPage params:", params);
// //     const router = useRouter();
// //     const [interviewDetail, setInterviewDetail] = useState<any>(null);

// //     // Fetch interview details on client side
// //     useEffect(() => {
// //         async function fetchInterview() {
// //             const data = await getInterview(params.vid);  // Use vid to fetch interview details
// //             setInterviewDetail(data);
// //         }
// //         fetchInterview();
// //     }, [params.vid]);

// //     if (!interviewDetail) {
// //         return <div className="text-center text-black">Loading...</div>;
// //     }

// //     // Destructure interviewDetail to get company information and interview date
// //     const { company, intwDate } = interviewDetail.data;

// //     const handleNavigate = () => {
// //         router.push(`/addInterview?companyId=${params.vid}`);
// //     };

// //     return (
// //         <main className="text-center p-5 text-black">
// //             <h1 className="text-lg font-medium text-black">{company?.name || "Unknown Company"}</h1>
// //             <div className="flex flex-row my-5">
// //                 <Image
// //                     src="https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH"
// //                     alt="Company Image"
// //                     width={0}
// //                     height={0}
// //                     sizes="100vw"
// //                     className="rounded-lg w-[30%]"
// //                 />
// //                 <div className="text-left text-black">
// //                     <div className="text-md mx-5">Company Name: {company?.name || "Unknown"}</div>
// //                     <div className="text-md mx-5">Description: {company?.description || "No description available"}</div>
// //                     <div className="text-md mx-5">Telephone: {company?.telephonenumber || "N/A"}</div>
// //                     <div className="text-md mx-5">Interview Date: {new Date(intwDate).toLocaleString()}</div>
// //                 </div>
// //             </div>
            
// //         </main>
// //     );
// // }


// "use client"; // Mark as Client Component

// import { useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import getInterview from "@/libs/getInterview"; // Ensure this works client-side

// export default function InterviewDetailPage({ params }: { params: { iid: string } }) {
//     console.log("InterviewDetailPage params:", params);
//     const router = useRouter();
//     const [interviewDetail, setInterviewDetail] = useState<any>(null);

//     // Fetch interview details on client side
//     // useEffect(() => {
//     //     async function fetchInterview() {
//     //         const data = await getInterview(params.vid);  // Use vid to fetch interview details
//     //         console.log("Fetched Interview Data:", data);  // Log the fetched data
//     //         setInterviewDetail(data);
//     //     }
//     //     fetchInterview();
//     // }, [params.vid]);
//     useEffect(() => {
//         async function fetchInterview() {
//             const data = await getInterview(params.iid);  // Use iid instead of vid
//             setInterviewDetail(data);
//         }
//         fetchInterview();
//     }, [params.iid]);

//     if (!interviewDetail) {
//         return <div className="text-center text-black">Loading...</div>;
//     }

//     // Log interview detail state
//     console.log("Interview Detail State:", interviewDetail);

//     return (
//         <main className="text-center p-5 text-black">
//             <h1 className="text-lg font-medium text-black">Interview Details</h1>
//             {/* Optionally log more data */}
//             <div className="text-black">
//                 <pre>{JSON.stringify(interviewDetail, null, 2)}</pre> {/* Display raw interview data */}
//             </div>
//         </main>
//     );
// }


"use client"; // Mark as Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getInterview from "@/libs/getInterview"; // Ensure this works client-side

export default function InterviewDetailPage({ params }: { params: { iid: string } }) {
    console.log("InterviewDetailPage params:", params);
    const router = useRouter();
    const [interviewDetail, setInterviewDetail] = useState<any>(null);

    // Fetch interview details on client side
    useEffect(() => {
        async function fetchInterview() {
            const data = await getInterview(params.iid);  // Use iid here
            console.log("Fetched Interview Data:", data);  // Log fetched data for debugging
            setInterviewDetail(data);
        }
        fetchInterview();
    }, [params.iid]);

    if (!interviewDetail) {
        return <div className="text-center text-black">Loading...</div>;
    }

    // Destructure interviewDetail to get company information and interview date
    const { company, intwDate } = interviewDetail.data;

    const handleNavigate = () => {
        router.push(`/addInterview?companyId=${params.iid}`);
    };

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
            
        </main>
    );
}

