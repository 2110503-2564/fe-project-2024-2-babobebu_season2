// // "use client"; // This marks the component as a Client Component
// // import React, { useEffect, useState } from "react";
// // import getInterviews from "@/libs/getInterviews";
// // import { InterviewJson } from "../../../interface";

// // const Page = () => {
// //     const [interviews, setInterviews] = useState<InterviewJson | null>(null);
// //     const [loading, setLoading] = useState<boolean>(true);
// //     const [error, setError] = useState<string | null>(null);

// //     useEffect(() => {
// //         const fetchInterviews = async () => {
// //             try {
// //                 const data = await getInterviews();
// //                 if (data.success) {
// //                     setInterviews(data);
// //                 } else {
// //                     setError(data.message || "Failed to load interviews");
// //                 }
// //             } catch (err) {
// //                 setError("An error occurred while fetching interviews");
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchInterviews();
// //     }, []);

// //     if (loading) {
// //         return <div className="text-center text-xl">Loading interviews...</div>;
// //     }

// //     if (error) {
// //         return <div className="text-center text-xl text-red-500">Error: {error}</div>;
// //     }

// //     return (
// //         <div className="p-6 text-black">
// //             <h1 className="text-2xl font-bold mb-6 text-center">Interviews</h1>
// //             {interviews && interviews.data.length > 0 ? (
// //                 <ul className="space-y-4">
// //                     {interviews.data.map((interview) => (
// //                         <li key={interview._id} className="p-4 border rounded-lg shadow-md bg-gray-100">
// //                             <div className="mb-2">
// //                                 <strong className="text-lg">Interview with {interview.user.name}</strong>
// //                             </div>
// //                             <div className="mb-2 p-2 bg-blue-50 rounded">
// //                                 <strong>Company:</strong> {interview.company.name}
// //                             </div>
// //                             <div className="mb-2 p-2 bg-yellow-50 rounded">
// //                                 <strong>Date:</strong> {new Date(interview.intwDate).toLocaleDateString()}
// //                             </div>
// //                             <div className="mb-2 p-2 bg-green-50 rounded">
// //                                 <strong>Created At:</strong> {new Date(interview.createdAt).toLocaleDateString()}
// //                             </div>
// //                         </li>
// //                     ))}
// //                 </ul>
// //             ) : (
// //                 <div className="text-center text-xl">No interviews found</div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Page;



// // "use client"; // This marks the component as a Client Component

// // import React, { useEffect, useState } from "react";
// // import getInterviews from "@/libs/getInterviews";
// // import { InterviewJson } from "../../../interface";
// // import InteractiveCard from "@/components/InteractiveCard";
// // import InterviewCard from "@/components/InterviewCard";

// // const Page = () => {
// //     const [interviews, setInterviews] = useState<InterviewJson | null>(null);
// //     const [loading, setLoading] = useState<boolean>(true);
// //     const [error, setError] = useState<string | null>(null);

// //     useEffect(() => {
// //         const fetchInterviews = async () => {
// //             try {
// //                 const data = await getInterviews();
// //                 if (data.success) {
// //                     setInterviews(data);
// //                 } else {
// //                     setError(data.message || "Failed to load interviews");
// //                 }
// //             } catch (err) {
// //                 setError("An error occurred while fetching interviews");
// //             } finally {
// //                 setLoading(false);
// //             }
// //         };

// //         fetchInterviews();
// //     }, []);

// //     if (loading) {
// //         return <div className="text-center text-xl">Loading interviews...</div>;
// //     }

// //     if (error) {
// //         return <div className="text-center text-xl text-red-500">Error: {error}</div>;
// //     }

// //     return (
// //         <div className="p-6 text-black">
// //             <h1 className="text-2xl font-bold mb-6 text-center">Interviews</h1>
// //             {interviews && interviews.data.length > 0 ? (
// //                 <ul className="space-y-4">
// //                     {interviews.data.map((interview) => (
                
// //                             <InterviewCard key={interview._id} interview={interview} /> // Use InterviewCard component
                        
// //                     ))}
// //                 </ul>
// //             ) : (
// //                 <div className="text-center text-xl">No interviews found</div>
// //             )}
// //         </div>
// //     );
// // };

// // export default Page;




// "use client"; // This marks the component as a Client Component

// import React, { useEffect, useState } from "react";
// import getInterviews from "@/libs/getInterviews";
// import { InterviewJson } from "../../../interface";
// import Link from "next/link";

// const Page = () => {
//     const [interviews, setInterviews] = useState<InterviewJson | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);

//     useEffect(() => {
//         const fetchInterviews = async () => {
//             try {
//                 const data = await getInterviews();
//                 if (data.success) {
//                     setInterviews(data);
//                 } else {
//                     setError(data.message || "Failed to load interviews");
//                 }
//             } catch (err) {
//                 setError("An error occurred while fetching interviews");
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchInterviews();
//     }, []);

//     if (loading) {
//         return <div className="text-center text-xl">Loading interviews...</div>;
//     }

//     if (error) {
//         return <div className="text-center text-xl text-red-500">Error: {error}</div>;
//     }

//     const InterviewCatalog = ({ interviewsJson }: { interviewsJson: InterviewJson }) => {
//         if (!interviewsJson || !Array.isArray(interviewsJson.data)) {
//             return <p className="text-red-500">No interviews found.</p>;
//         }

//         return (
//             <>
//                 <span className="text-black">
//                     Explore {interviewsJson.count} scheduled interviews
//                 </span>
//                 <div className="m-5 flex flex-wrap justify-around p-5">
//                     {interviewsJson.data.map((interview) => (
//                         <Link href={`/interviews/${interview._id}`} key={interview._id} className="w-1/4 px-5 py-3">
//                             <div className="p-4 border rounded-lg shadow-md bg-white">
//                                 <h2 className="text-lg font-semibold">
//                                     {interview.company?.name || "Unknown Company"}
//                                 </h2>
//                                 <p>Date: {new Date(interview.intwDate).toLocaleString()}</p>
//                             </div>
//                         </Link>
//                     ))}
//                 </div>
//             </>
//         );
//     };

//     return (
//         <div className="p-6 text-black">
//             <h1 className="text-2xl font-bold mb-6 text-center">Interviews</h1>
//             {interviews && interviews.data.length > 0 ? (
//                 <InterviewCatalog interviewsJson={interviews} /> // Use InterviewCatalog component here
//             ) : (
//                 <div className="text-center text-xl">No interviews found</div>
//             )}
//         </div>
//     );
// };

// export default Page;




"use client"; 

import React, { useEffect, useState } from "react";
import getInterviews from "@/libs/getInterviews";
import { InterviewJson } from "../../../interface";
import InterviewCatalog from "@/components/InterviewCatalog"; // Import the new component

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
                <InterviewCatalog interviewsJson={interviews} /> // Use InterviewCatalog component here
            ) : (
                <div className="text-center text-xl">No interviews found</div>
            )}
        </div>
    );
};

export default Page;

