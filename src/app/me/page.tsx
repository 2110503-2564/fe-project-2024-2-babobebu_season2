import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import ClientBooking from "@/components/ClientBooking";
import { useRouter } from "next/navigation"; // use navigation for server-side navigation

export default async function Booking() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return <div><ClientBooking /></div>;

    const profile = await getUserProfile(session.user.token);
    const createdAt = new Date(profile.data.createdAt);

    const router = useRouter();  // Hook to navigate

    const handleNavigate = () => {
        router.push('/interviews'); // Navigate to the '/interviews' page
    };

    return (
        <main className="w-full min-h-screen bg-gradient-to-b from-cyan-600 to-green-500 text-white flex flex-col items-center py-12 px-6">
            {/* Profile Section */}
            <div className="w-full max-w-4xl bg-white/90 text-black rounded-xl shadow-lg p-6 space-y-5 mb-8">
                <div className="text-3xl font-extrabold drop-shadow-lg mb-4">
                    👤 <strong>My Profile</strong>
                </div>

                <table className="table-auto border-separate border-spacing-2 w-full">
                    <tbody>
                        <tr>
                            <td className="text-md text-gray-700">📧 <strong>Email</strong></td>
                            <td className="text-md">{profile.data.email}</td>
                        </tr>
                        <tr>
                            <td className="text-md text-gray-700">📞 <strong>Tel.</strong></td>
                            <td className="text-md">{profile.data.tel}</td>
                        </tr>
                        <tr>
                            <td className="text-md text-gray-700">📅 <strong>Member Since</strong></td>
                            <td className="text-md">{createdAt.toString()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Navigation Button */}
            <button
                onClick={handleNavigate}
                className="mt-8 bg-gray-800 hover:bg-gray-900 text-white font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-gray-500"
            >
                📝 Go to Interviews
            </button>
        </main>
    );
}
