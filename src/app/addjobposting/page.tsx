"use client";

import { useState, useEffect } from "react";
import { addJobPosting } from "@/libs/addJobPosting";
import getCompanies from "@/libs/getCompanies";

const jobTypes = ["Full-time", "Part-time", "Contract", "Internship", "Temporary"];

function JobForm() {
    const [formData, setFormData] = useState({
        title: "",
        jobdescription: "",
        requirement: "",
        salary_range: "",
        jobtype: "",
    });

    const [message, setMessage] = useState("");
    const [companies, setCompanies] = useState<{ _id: string; name: string }[]>([]);
    const [selectedCompany, setSelectedCompany] = useState("");

    useEffect(() => {
        async function fetchCompanies() {
            try {
                const data = await getCompanies();
                setCompanies(data.data); // Assuming the response contains `{ success: true, data: [...] }`
            } catch (error) {
                console.error("Failed to fetch companies:", error);
            }
        }
        fetchCompanies();
    }, []);

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleCompanyChange(event: React.ChangeEvent<HTMLSelectElement>) {
        setSelectedCompany(event.target.value);
    }

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault();
        
        if (!selectedCompany) {
            setMessage("Please select a company.");
            return;
        }

        const result = await addJobPosting(selectedCompany, formData);
        setMessage(result.message);

        if (result.success) {
            setFormData({
                title: "",
                jobdescription: "",
                requirement: "",
                salary_range: "",
                jobtype: "",
            });
        }
    }

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Add Job Posting</div>
            <div className="text-md text-gray-600 text-center">
                Select a company and enter job details
            </div>
            <form onSubmit={handleSubmit} className="w-fit p-6 bg-white rounded-lg shadow-lg flex flex-col space-y-4">
                {/* Select Company */}
                <div className="flex flex-col">
                    <label className="text-gray-700 font-medium">Select Company:</label>
                    <select 
                        value={selectedCompany} 
                        onChange={handleCompanyChange} 
                        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    >
                        <option value="">-- Select a company --</option>
                        {companies.map(company => (
                            <option key={company._id} value={company._id}>
                                {company.name}
                            </option>
                        ))}
                    </select>
                </div>

                {/* Other Form Fields */}
                {Object.keys(formData).map((key) => (
                    key !== "jobtype" ? (
                        <div key={key} className="flex flex-col">
                            <label className="text-gray-700 font-medium capitalize">
                                {key.replace(/_/g, " ")}:
                            </label>
                            <input 
                                type={key === "jobdescription" || key === "requirement" ? "textarea" : "text"}
                                name={key}
                                value={formData[key as keyof typeof formData]}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                    ) : (
                        // Job Type Dropdown
                        <div key="jobtype" className="flex flex-col">
                            <label className="text-gray-700 font-medium">Job Type:</label>
                            <select
                                name="jobtype"
                                value={formData.jobtype}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">-- Select Job Type --</option>
                                {jobTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )
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

export default JobForm;


