// import Image from "next/image"
// import getCompany from "@/libs/getCompany"
// export default async function CompanyDetailPage({params}:{params:{vid:string}}){
//     console.log("CompanyDetailPage params:", params);
//     const companyDetail = await getCompany(params.vid)
    


//     return(
//         <main className="text-center p-5 text-black">
//             <h1 className="text-lg font-medium text-black">{companyDetail.data.name}</h1>
//             <div className="flex flex-row my-5">
//                 <Image src='https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH'
//                 alt="Company Image"
//                 width={0}
//                 height={0}
//                 sizes="100vw"
//                 className="rounded-lg w-[30%]"/>
//                 <div className="text-left text-black">
//                     <div className="text-md mx-5">{companyDetail.data.name}</div>
//                     <div className="text-md mx-5">Address: {companyDetail.data.address}</div>
//                     <div className="text-md mx-5">District: {companyDetail.data.district}</div>
//                     <div className="text-md mx-5">Province: {companyDetail.data.province}</div>
//                     <div className="text-md mx-5">Postal Code: {companyDetail.data.postalcode}</div>
//                     <div className="text-md mx-5">Website: {companyDetail.data.website}</div>
//                     <div className="text-md mx-5">Tel: {companyDetail.data.telephonenumber}</div>
//                     <div className="text-md mx-5">Description: {companyDetail.data.description}</div>
//                 </div>

//             </div>
//         </main>
//     )
// }


"use client"; // Mark as Client Component

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getCompany from "@/libs/getCompany"; // Ensure this works client-side

export default function CompanyDetailPage({ params }: { params: { vid: string } }) {
    console.log("CompanyDetailPage params:", params);
    const router = useRouter();
    const [companyDetail, setCompanyDetail] = useState<any>(null);

    // Fetch company details on client side
    useEffect(() => {
        async function fetchCompany() {
            const data = await getCompany(params.vid);
            setCompanyDetail(data);
        }
        fetchCompany();
    }, [params.vid]);

    if (!companyDetail) {
        return <div className="text-center text-black">Loading...</div>;
    }

    const handleNavigate = () => {
        router.push(`/addInterview?companyId=${params.vid}`);
    };

    return (
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium text-black">{companyDetail.data.name}</h1>
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
                    <div className="text-md mx-5">{companyDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {companyDetail.data.address}</div>
                    <div className="text-md mx-5">District: {companyDetail.data.district}</div>
                    <div className="text-md mx-5">Province: {companyDetail.data.province}</div>
                    <div className="text-md mx-5">Postal Code: {companyDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Website: {companyDetail.data.website}</div>
                    <div className="text-md mx-5">Tel: {companyDetail.data.telephonenumber}</div>
                    <div className="text-md mx-5">Description: {companyDetail.data.description}</div>
                </div>
            </div>
            {/* Add Interview Booking Button */}
            <button
                onClick={handleNavigate}
                className="mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Book an Interview
            </button>
        </main>
    );
}



