"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import registerUser from "@/libs/registerUser";

function RegisterUser() {
    const [formData, setFormData] = useState({
        name: "",
        telephone: "",
        email: "",
        password: ""
    });

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        if (formData.password.length < 6) {
            alert("Password must be at least 6 characters long.");
            return;
        }

        const result = await registerUser(formData);
        if (result.success) {
            alert("Registration successful!");
            setFormData({ name: "", telephone: "", email: "", password: "" });
        } else {
            alert(`Error: ${result.message}`);
        }
    }

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">User Registration</div>
            <div className="text-md text-gray-600 text-center">
                Fill in the details below to create an account
            </div>
            <form onSubmit={handleSubmit} className="w-fit p-4 bg-white rounded-lg shadow-lg space-y-4">
                <input 
                    type="text" 
                    name="name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    placeholder="Name" 
                    required 
                    className="w-full p-2 border rounded" 
                />
                <input 
                    type="text" 
                    name="telephone" 
                    value={formData.telephone} 
                    onChange={handleChange} 
                    placeholder="Telephone" 
                    required 
                    className="w-full p-2 border rounded" 
                />
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    placeholder="Email" 
                    required 
                    className="w-full p-2 border rounded" 
                />
                <input 
                    type="password" 
                    name="password" 
                    value={formData.password} 
                    onChange={handleChange} 
                    placeholder="Password (min. 6 characters)" 
                    required 
                    className="w-full p-2 border rounded" 
                />
                <button 
                    className="block w-full rounded bg-[#F5DEB3] hover:bg-[#8B4513] px-6 py-3 text-white shadow-md font-semibold"
                    type="submit">
                    Register
                </button>
            </form>
        </main>
    );
}

export default RegisterUser;
