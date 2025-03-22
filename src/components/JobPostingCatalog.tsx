import Link from "next/link";
import { Key } from "react";
import { JobPostingJson } from "../../interface";

export default async function JobPostingCatalog({ jobPostingsJson }: { jobPostingsJson: Promise<JobPostingJson> }) {
    const jobPostingJsonReady = await jobPostingsJson;

    return (
        <div className="w-full bg-white rounded-lg shadow-lg p-6 mt-6">
            {/* Title */}
            <span className="text-black text-lg font-semibold">
                Explore {jobPostingJsonReady.count} job opportunities in our catalog
            </span>

            {/* Table view for job postings */}
            <div className="overflow-x-auto mt-6">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="py-3 px-6 text-left font-medium text-gray-600">Job Title</th>
                            <th className="py-3 px-6 text-left font-medium text-gray-600">Company</th>
                            <th className="py-3 px-6 text-left font-medium text-gray-600">Salary Range</th>
                            <th className="py-3 px-6 text-left font-medium text-gray-600">Posted Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            jobPostingJsonReady.data.map((jobItem: { _id: Key | null | undefined; title: string; company: { name: string; _id: Key }; salary_range: string; posted_date: string; }) => (
                                <tr key={jobItem._id} className="border-b hover:bg-gray-50 transition-all duration-300 ease-in-out">
                                    <td className="py-3 px-6 text-sm text-gray-800">
                                        <Link href={`/jobpostings/${jobItem._id}`} className="font-semibold text-blue-600 hover:text-blue-800">
                                            {jobItem.title}
                                        </Link>
                                    </td>
                                    <td className="py-3 px-6 text-sm text-gray-800">
                                        <Link href={`/companies/${jobItem.company._id}`} className="text-green-600 hover:text-green-800 font-semibold">
                                            {jobItem.company.name}
                                        </Link>
                                    </td>
                                    <td className="py-3 px-6 text-sm text-gray-800">{jobItem.salary_range}</td>
                                    <td className="py-3 px-6 text-sm text-gray-800">{jobItem.posted_date}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );



}


// import Link from "next/link";
// import Card from "./Card";
// import { Key } from "react";
// import { JobPostingJson } from "../../interface";

// export default async function JobPostingCatalog({ jobPostingsJson }: { jobPostingsJson: Promise<JobPostingJson> }) {
//     const jobPostingJsonReady = await jobPostingsJson;
    
//     return (
//         <>
//             <span className="text-black">
//                 Explore {jobPostingJsonReady.count} job opportunities in our catalog
//             </span> 
//             <div style={{ margin: "20px", display: "flex", flexDirection: "row", alignContent: "space-around", justifyContent: "space-around", flexWrap: "wrap", padding: "20px" }}>
//                 {
//                     jobPostingJsonReady.data.map((jobItem: { _id: Key | null | undefined; title: string; }) => (
//                         <Link href={`/jobpostings/${jobItem._id}`} className="w-1/5 px-5 py-3" key={jobItem._id}> 
//                             <Card companyName={jobItem.title} imgSrc="https://drive.google.com/uc?export=view&id=1zsUjQWcLSkKX0ZMxlrsPGOoQLFCEZHa1" />
//                         </Link>
//                     ))
//                 }
//             </div>
//         </>
//     );
// }
