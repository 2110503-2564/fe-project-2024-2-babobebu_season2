"use client";
import { useState } from "react";
import { addCompany } from "@/libs/addCompany";
import { getSession } from "next-auth/react"; // Import getSession

function CompanyForm() {
    const [formData, setFormData] = useState({
        name: "",
        address: "",
        district: "",
        province: "",
        postalcode: "",
        website: "",
        description: "",
        telephonenumber: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();

        const session = await getSession();
        console.log("Token from session:", session?.user.token); // Debugging

        const result = await addCompany(formData);

        setMessage(result.message);

        if (result.success) {
            setFormData({
                name: "",
                address: "",
                district: "",
                province: "",
                postalcode: "",
                website: "",
                description: "",
                telephonenumber: ""
            });
        }
    }

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Add Company</div>
            <div className="text-md text-gray-600 text-center">
                Enter the company details below
            </div>
            <form onSubmit={handleSubmit} className="w-fit p-6 bg-white rounded-lg shadow-lg flex flex-col space-y-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label className="text-gray-700 font-medium capitalize">
                            {key.replace(/([a-z])([A-Z])/g, "$1 $2")}:
                        </label>
                        <input 
                            type={key === "description" ? "textarea" : "text"}
                            name={key}
                            value={formData[key as keyof typeof formData]}
                            onChange={handleChange}
                            className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>
                ))}
                <button 
                    className="block rounded bg-[#F5DEB3] hover:bg-[#8B4513] px-6 py-3 text-white shadow-md font-semibold"
                    type="submit">
                    Submit
                </button>
                {message && <div className="text-center text-red-600 font-medium">{message}</div>}
            </form>
        </main>
    );
}

export default CompanyForm;
