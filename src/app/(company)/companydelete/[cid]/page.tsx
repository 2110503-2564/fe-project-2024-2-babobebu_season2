'use client'
import Image from "next/image";
import getCompany from "@/libs/getCompany";
import { deleteCompany } from "@/libs/deleteCompany";
import { useRouter } from "next/navigation"; // Import useRouter
import { useState } from "react"; // Import useState

export default async function DeleteCompanyDetailPage({ params }: { params: { cid: string } }) {
    
    const router = useRouter(); 
    const companyDetail = await getCompany(params.cid);

    const handleDelete = async () => {
        try {
            await deleteCompany(params.cid);
            router.push("/companydelete");
        } catch (error: any) {
            // setDeleteError(error.message || "Failed to delete company.");
        } finally {
            // setIsDeleting(false); // Reset deleting state
        }
    };

    if (!companyDetail) {
        return (
            <main>
                <div>
                    <h1>company id {params.cid} is deleted</h1>
                </div>
            </main>
        );
    }

    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-cyan-600 to-green-500 text-white flex flex-col items-center py-12 px-6">
            <h1 className="text-3xl font-extrabold drop-shadow-lg mb-8">{companyDetail.data.name}</h1>
            <div className="w-full max-w-4xl bg-white/90 text-black rounded-xl shadow-lg p-6 flex flex-col md:flex-row items-center">
                <Image
                    src='https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH'
                    alt="Company Image"
                    width={300}
                    height={300}
                    sizes="100vw"
                    className="rounded-lg shadow-md w-[80%] md:w-[40%] object-cover"
                />
                <div className="text-left w-full md:w-[60%] mt-6 md:mt-0 md:ml-8 space-y-3">
                    <p className="text-lg font-semibold">{companyDetail.data.name}</p>
                    <p className="text-md text-gray-700">📍 Address: {companyDetail.data.address}</p>
                    <p className="text-md text-gray-700">🏙 District: {companyDetail.data.district}</p>
                    <p className="text-md text-gray-700">🌍 Province: {companyDetail.data.province}</p>
                    <p className="text-md text-gray-700">📮 Postal Code: {companyDetail.data.postalcode}</p>
                    <p className="text-md text-gray-700">🌐 Website: 
                        <a href={companyDetail.data.website} target="_blank" className="text-cyan-600 hover:underline">
                            {companyDetail.data.website}
                        </a>
                    </p>
                    <p className="text-md text-gray-700">📞 Tel: {companyDetail.data.telephonenumber}</p>
                    <p className="text-md text-gray-700">📝 Description: {companyDetail.data.description}</p>
                </div>
            </div>

            <button 
                className="mt-8 bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-red-500"
                onClick={handleDelete}
            >
                Delete Company
            </button>

        </main>
    );
}