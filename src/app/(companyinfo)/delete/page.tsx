import  DeleteCatalog  from "@/components/DeleteCompanyCatalog"
import getCompanies from "@/libs/getCompanies"
import { Suspense } from "react";
import { LinearProgress } from "@mui/material";

export default function DeletePage() {
    const companies= getCompanies()
    return(
        <main className="text-center p-5 bg-amber-50">
            <h1 className="text-xl font-medium text-black">Select Company to Detete</h1>
            <Suspense fallback={<p>Loading...<LinearProgress/></p>}>
            <DeleteCatalog companiesJson={companies}/>
            </Suspense>
        </main>
    )
}