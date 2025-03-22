"use client"; 
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import getCompany from "@/libs/getCompany"; // Ensure this works client-side

export default function CompanyDetailPage({ params }: { params: { cid: string } }) {
    console.log("CompanyDetailPage params:", params);
    const router = useRouter();
    const [companyDetail, setCompanyDetail] = useState<any>(null);

    // Fetch company details on client side
    useEffect(() => {
        async function fetchCompany() {
            const data = await getCompany(params.cid);
            setCompanyDetail(data);
        }
        fetchCompany();
    }, [params.cid]);

    if (!companyDetail) {
        return <div className="text-center text-white">Loading...</div>;
    }

    const handleNavigate = () => {
        router.push(`/addInterview?companyId=${params.cid}`);
    };

    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-cyan-600 to-green-500 text-white flex flex-col items-center py-12 px-6">
            {/* Company Name */}
            <h1 className="text-3xl font-extrabold drop-shadow-lg mb-8">
                {companyDetail.data.name}
            </h1>

            {/* Content Container */}
            <div className="w-full max-w-4xl bg-white/90 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
                {/* Company Image */}
                <Image
                    src="https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH"
                    alt="Company Image"
                    width={300}
                    height={300}
                    className="rounded-lg shadow-md w-[80%] md:w-[40%] object-cover"
                />

                {/* Company Details */}
                <div className="text-left w-full md:w-[60%] mt-6 md:mt-0 md:ml-8 space-y-3">
                    <p className="text-lg font-semibold">{companyDetail.data.name}</p>
                    <p className="text-md text-gray-700">📍 Address: {companyDetail.data.address}</p>
                    <p className="text-md text-gray-700">🏙 District: {companyDetail.data.district}</p>
                    <p className="text-md text-gray-700">🌍 Province: {companyDetail.data.province}</p>
                    <p className="text-md text-gray-700">📮 Postal Code: {companyDetail.data.postalcode}</p>
                    <p className="text-md text-gray-700">🌐 Website: <a href={companyDetail.data.website} target="_blank" className="text-cyan-600 hover:underline">{companyDetail.data.website}</a></p>
                    <p className="text-md text-gray-700">📞 Tel: {companyDetail.data.telephonenumber}</p>
                    <p className="text-md text-gray-700">📝 Description: {companyDetail.data.description}</p>
                </div>
            </div>

            {/* Interview Booking Button */}
            <button
                onClick={handleNavigate}
                className="mt-8 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500"
            >
                Book an Interview
            </button>
        </main>
    );
}
