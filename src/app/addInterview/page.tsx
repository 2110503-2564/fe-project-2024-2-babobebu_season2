// "use client";

// import { useState, useEffect } from "react";
// import { DatePicker } from "@mui/x-date-pickers";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { TextField } from "@mui/material"; // Directly use TextField from MUI
// import { Dayjs } from "dayjs"; // Import Dayjs to properly type the date

// interface ClientBookingProps {
//     userId: string;
// }

// function ClientBooking() {
//     const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
//     const [userId, setUserId] = useState<string | null>(null);

//     // Fetch user profile when component mounts
//     useEffect(() => {
//         async function fetchUserProfile() {
//             const response = await fetch('/api/user');
//             const data = await response.json();

//             if (data.error) {
//                 alert("User not authenticated");
//                 return;
//             }

//             setUserId(data._id); // Set the userId from the fetched profile
//         }

//         fetchUserProfile();
//     }, []);

//     const handleSubmit = async (e: React.FormEvent) => {
//         e.preventDefault();

//         // Log the values before submitting
//         console.log("Hii")
//         console.log("Selected Date:", selectedDate);
//         console.log("User ID:", userId);
//         console.log("Here")

//         if (!selectedDate || !userId) {
//             alert("Please select a date and ensure you are logged in.");
//             return;
//         }

//         const bookingData = {
//             intwDate: selectedDate.toISOString(), // Convert to ISO string before sending
//             user: userId,
//         };

//         // Here you can make your API request to save the data, for example:
//         // await saveBooking(bookingData);
//         alert("Interview date booked successfully!");
//     };

//     return (
//         <main className="w-full flex flex-col items-center space-y-6 py-6">
//             <div className="text-2xl font-semibold text-black">Interview Booking</div>
//             <div className="text-md text-gray-600 text-center">
//                 Please select an interview date.
//             </div>
//             <form onSubmit={handleSubmit}>
//                 <div className="w-fit p-4 bg-white rounded-lg shadow-lg">
//                     <LocalizationProvider dateAdapter={AdapterDayjs}>
//                         <DatePicker
//                             value={selectedDate} // Use Dayjs object here
//                             onChange={(newDate: Dayjs | null) => setSelectedDate(newDate)}
//                             slots={{ textField: TextField }} // Correct way to add TextField slot
//                         />
//                     </LocalizationProvider>
//                 </div>
//                 <button 
//                     className="block rounded bg-[#F5DEB3] hover:bg-[#8B4513] px-6 py-3 text-white shadow-md font-semibold"
//                     type="submit">
//                     Book Interview
//                 </button>
//             </form>
//         </main>
//     );
// }

// export default ClientBooking;



"use client";

import { useState, useEffect } from "react";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material"; 
import { Dayjs } from "dayjs";
import { useSearchParams } from "next/navigation"; // Get companyId from URL
import { addInterview } from "@/libs/addInterview"; // Import backend function

function ClientBooking() {
    const [selectedDate, setSelectedDate] = useState<Dayjs | null>(null);
    const [userId, setUserId] = useState<string | null>(null);
    const searchParams = useSearchParams();
    const companyId = searchParams.get("companyId"); // Get companyId from URL

    // Fetch user profile when component mounts
    useEffect(() => {
        async function fetchUserProfile() {
            const response = await fetch("/api/user");
            const data = await response.json();

            if (data.error) {
                alert("User not authenticated");
                return;
            }

            setUserId(data._id);
        }

        fetchUserProfile();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!selectedDate || !userId || !companyId) {
            alert("Please select a date and ensure you are logged in.");
            return;
        }

        const bookingData = {
            intwDate: selectedDate.toISOString(), // Convert to ISO format
            user: userId,
        };

        // Call the backend function
        const result = await addInterview(companyId, bookingData);

        if (result.success) {
            alert(result.message);
        } else {
            alert(`Error: ${result.message}`);
        }
    };

    return (
        <main className="w-full flex flex-col items-center space-y-6 py-6">
            <div className="text-2xl font-semibold text-black">Interview Booking</div>
            <div className="text-md text-gray-600 text-center">
                Please select an interview date.
            </div>
            <form onSubmit={handleSubmit}>
                <div className="w-fit p-4 bg-white rounded-lg shadow-lg">
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DatePicker
                            value={selectedDate}
                            onChange={(newDate: Dayjs | null) => setSelectedDate(newDate)}
                            slots={{ textField: TextField }}
                        />
                    </LocalizationProvider>
                </div>
                <button
                    className="block rounded bg-[#F5DEB3] hover:bg-[#8B4513] px-6 py-3 text-white shadow-md font-semibold"
                    type="submit"
                >
                    Book Interview
                </button>
            </form>
        </main>
    );
}

export default ClientBooking;

