// 'use client'

// import { Suspense } from "react";
// import { LinearProgress } from "@mui/material";
// import getJobPostings from "@/libs/getJobPostings";
// import DeleteJobpostingCatalog from "@/components/DeleteJobpostingCatalog";

// export default function DeleteJobpostingPage() {
//     const jobs= getJobPostings(); // how to ensure that the data we get is latest
//     return(
//         <main className="text-center p-5 bg-amber-50">
//             <h1 className="text-xl font-medium text-black">Select Jobposting to Detete</h1>
//             <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
//             <DeleteJobpostingCatalog jobPostingJson={jobs}/>
//             </Suspense>
//         </main>
//     )
// }


import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getJobPostings from "@/libs/getJobPostings";
import DeleteJobpostingCatalog from "@/components/DeleteJobpostingCatalog";

export default function DeleteJobpostingPage() {
    const jobs= getJobPostings();

    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-cyan-600 to-green-500 text-center py-16 px-6 text-white">
            {/* Page Title with More Spacing */}
            <h1 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg mb-10">
                Select Jobposting to Detete
            </h1>

            {/* Loader & Content */}
            <Suspense fallback={
                <div className="mt-10 flex flex-col items-center">
                    <p className="text-lg font-medium">Loading jobpostinges...</p>
                    <div className="w-1/2 md:w-1/3 mt-2">
                        <LinearProgress color="inherit" />
                    </div>
                </div>
            }>
            <DeleteJobpostingCatalog jobPostingJson={jobs}/>
            </Suspense>
        </main>
    );
}