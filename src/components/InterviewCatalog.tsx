// 'use client'

// import Link from "next/link";
// import { InterviewJson } from "../../interface";
// import Card from "./Card";

// export default async function InterviewCatalog({ interviewsJson }: { interviewsJson: InterviewJson }) {
//     const interviewsJsonReady = await interviewsJson;

//     if (!interviewsJsonReady || !Array.isArray(interviewsJsonReady.data)) {
//         return <p className="text-red-500">No interviews found.</p>;
//     }
//     const num = interviewsJsonReady.count;
//     const data = interviewsJsonReady.data;
//     console.log("count = ");
//     console.log(num);
//     console.log(data); 
//     return (
//         <>
//             <span className="text-black">
//                 There are {interviewsJsonReady.count} upcomming interview
//             </span> 
//             <div style={{margin:"20px", display:"flex",flexDirection:"row", alignContent:"space-around",justifyContent:"space-around", flexWrap:"wrap",padding:"20px"}}>
//             {
//                 interviewsJsonReady.data.map((itw)=>(
//                     <Link href={`/venue/${itw._id}`} className="w-1/5 px-5 py-3" key={itw._id}> 
//                         <div>show somthing</div> {/* first can you make this work */}
//                         {/* <Card companyName={itw._id} imgSrc='https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH'/> */}
//                     </Link>
//                 ))
//             }    
//             </div>
//             <div>end here</div>
//         </>
//     );
// }
"use client";

import Link from "next/link";
import { InterviewJson } from "../../interface";
import Card from "./Card";

export default function InterviewCatalog({ interviewsJson }: { interviewsJson: InterviewJson }) {
    if (!interviewsJson || !Array.isArray(interviewsJson.data)) {
        return <p className="text-red-500">No interviews found.</p>;
    }

    console.log("count =", interviewsJson.count);
    console.log("data =", interviewsJson.data);

    return (
        <>
            <span className="text-black">
                There are {interviewsJson.count} upcoming interview(s)
            </span>
            <div
                style={{
                    margin: "20px",
                    display: "flex",
                    flexDirection: "row",
                    alignContent: "space-around",
                    justifyContent: "space-around",
                    flexWrap: "wrap",
                    padding: "20px",
                }}
            >
                {interviewsJson.data.map((itw) => (
                    <Link href={`/interviews/${itw._id}`} className="w-1/5 px-5 py-3" key={itw._id}>
                        <Card companyName={itw.intwDate} imgSrc='https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH'/>
                    </Link>
                ))}
            </div>
            <div>end here</div>
        </>
    );
}
