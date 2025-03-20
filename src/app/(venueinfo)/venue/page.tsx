import  VenueCatalog  from "@/components/CompanyCatalog"
import getCompanies from "@/libs/getCompanies"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";
export default function Venue(){
    const companies= getCompanies()

    return(
        <main className="text-center p-5 bg-amber-50">
            <h1 className="text-xl font-medium text-black">Select your Company</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <VenueCatalog companiesJson={companies}/>
            </Suspense>
        </main>
    )
}