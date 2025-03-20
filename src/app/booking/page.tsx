import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";
import getUserProfile from "@/libs/getUserProfile";
import ClientBooking from "@/components/ClientBooking";

export default async function Booking() {
    const session = await getServerSession(authOptions);
    if (!session || !session.user.token) return <div><ClientBooking /></div>;

    const profile = await getUserProfile(session.user.token);
    const createdAt = new Date(profile.data.createdAt);

    return (
        <div>
            <div className="bg-[#8B4513] m-5 p-5 text-white">
                <div className="text-2xl">{profile.data.name}</div>
                <table className="table-auto border-separate border-spacing-2">
                    <tbody>
                        <tr><td>Email</td><td>{profile.data.email}</td></tr>
                        <tr><td>Tel.</td><td>{profile.data.tel}</td></tr>
                        <tr><td>Member Since</td><td>{createdAt.toString()}</td></tr>
                    </tbody>
                </table>
            </div>
            <ClientBooking /> {/* Render Client Component Here */}
        </div>
    );
}