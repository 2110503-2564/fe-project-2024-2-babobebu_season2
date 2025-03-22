'use client'

import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
import getJobPostings from "@/libs/getJobPostings";
import DeleteJobpostingCatalog from "@/components/DeleteJobpostingCatalog";

export default function DeleteJobpostingPage() {
    const jobs= getJobPostings(); // how to ensure that the data we get is latest
    return(
        <main className="text-center p-5 bg-amber-50">
            <h1 className="text-xl font-medium text-black">Select Jobposting to Detete</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <DeleteJobpostingCatalog jobPostingJson={jobs}/>
            </Suspense>
        </main>
    )
}