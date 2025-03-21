'use client'
import Image from "next/image";
import getCompany from "@/libs/getCompany";
import { deleteCompany } from "@/libs/deleteCompany";
import { useRouter } from "next/navigation"; // Import useRouter
import { useState } from "react"; // Import useState

export default async function DeleteCompanyDetailPage({ params }: { params: { cid: string } }) {
    const router = useRouter(); // Initialize router
    const [isDeleting, setIsDeleting] = useState(false); // Add isDeleting state
    const [deleteError, setDeleteError] = useState<string | null>(null); // Add deleteError state

    const companyDetail = await getCompany(params.cid);

    const handleDelete = async () => {
        setIsDeleting(true); // Set deleting state to true
        setDeleteError(null); // Reset error state

        try {
            await deleteCompany(params.cid);
            router.push("/"); // Redirect after successful deletion
        } catch (error: any) {
            setDeleteError(error.message || "Failed to delete company.");
        } finally {
            setIsDeleting(false); // Reset deleting state
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
        <main className="text-center p-5 text-black">
            <h1 className="text-lg font-medium text-black">{companyDetail.data.name}</h1>
            <div className="flex flex-row my-5">
                <Image
                    src='https://drive.google.com/uc?export=view&id=1VThaI32ox5b6Knz9AHAf9IN3ek6RIWrH'
                    alt="Company Image"
                    width={0}
                    height={0}
                    sizes="100vw"
                    className="rounded-lg w-[30%]"
                />
                <div className="text-left text-black">
                    <div className="text-md mx-5">must delete {companyDetail.data.name}</div>
                    <div className="text-md mx-5">Address: {companyDetail.data.address}</div>
                    <div className="text-md mx-5">District: {companyDetail.data.district}</div>
                    <div className="text-md mx-5">Province: {companyDetail.data.province}</div>
                    <div className="text-md mx-5">Postal Code: {companyDetail.data.postalcode}</div>
                    <div className="text-md mx-5">Website: {companyDetail.data.website}</div>
                    <div className="text-md mx-5">Tel: {companyDetail.data.telephonenumber}</div>
                    <div className="text-md mx-5">Description: {companyDetail.data.description}</div>
                </div>
            </div>

            <button className="bg-red-500 p-2" onClick={handleDelete} disabled={isDeleting}>
                {isDeleting ? "Deleting..." : "Delete Company"}
            </button>

            {deleteError && <p style={{ color: "red" }}>{deleteError}</p>}
        </main>
    );
}