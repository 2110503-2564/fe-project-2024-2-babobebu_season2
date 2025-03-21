"use client";
import { useState } from "react";
import { updateJobPosting } from "@/libs/updateJobPosting";
import { getSession } from "next-auth/react"; // Import getSession

function UpdateJobPosting() {
    const [formData, setFormData] = useState({
        jobId: "",
        title: "",
        jobdescription: "",
        requirement: "",
        salary_range: "",
        jobtype: "",
        company: ""
    });

    const [message, setMessage] = useState("");

    function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
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

        const { jobId, ...data } = formData;
        if (!jobId) {
            setMessage("Job Posting ID is required.");
            return;
        }

        const result = await updateJobPosting(jobId, data);

        setMessage(result.message);

        if (result.success) {
            setFormData({
                jobId: "",
                title: "",
                jobdescription: "",
                requirement: "",
                salary_range: "",
                jobtype: "",
                company: ""
            });
        }
    }

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Update Job Posting</div>
            <div className="text-md text-gray-600 text-center">
                Enter the updated job posting details below
            </div>
            <form onSubmit={handleSubmit} className="w-fit p-6 bg-white rounded-lg shadow-lg flex flex-col space-y-4">
                {Object.keys(formData).map((key) => (
                    <div key={key} className="flex flex-col">
                        <label className="text-gray-700 font-medium capitalize">
                            {key.replace(/_/g, " ")}:
                        </label>
                        {key === "jobtype" ? (
                            <select
                                name={key}
                                value={formData[key as keyof typeof formData]}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            >
                                <option value="">-- Select Job Type --</option>
                                <option value="Full-time">Full-time</option>
                                <option value="Part-time">Part-time</option>
                                <option value="Contract">Contract</option>
                                <option value="Internship">Internship</option>
                                <option value="Temporary">Temporary</option>
                            </select>
                        ) : (
                            <input
                                type={key === "jobdescription" || key === "requirement" ? "textarea" : "text"}
                                name={key}
                                value={formData[key as keyof typeof formData]}
                                onChange={handleChange}
                                className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        )}
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

export default UpdateJobPosting;
