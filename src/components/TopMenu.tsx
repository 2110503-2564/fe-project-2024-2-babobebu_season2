'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

export default function TopMenu() {
    const { data: session } = useSession();

    return (
        <div className="w-full h-16 bg-white/80 shadow-md backdrop-blur-md flex items-center justify-between px-6 fixed top-0 z-50">
            {/* Logo */}
            <Link href="/">
                <Image
                    src="/img/logo2.png"
                    alt="logo"
                    width={120}
                    height={40}
                    className="object-contain cursor-pointer"
                />
            </Link>

            {/* Menu Items */}
            <nav className="flex space-x-6">
                <Link href="/booking" className="text-cyan-600 text-lg font-semibold hover:text-cyan-800 transition-all">
                    Book Interview
                </Link>
            </nav>

            {/* Authentication Button */}
            <div>
                {session ? (
                    <Link href="/api/auth/signout">
                        <div className="text-cyan-600 text-sm font-medium cursor-pointer hover:text-cyan-800">
                            Sign-Out of {session.user?.name}
                        </div>
                    </Link>
                ) : (
                    <Link href="/api/auth/signin">
                        <div className="text-cyan-600 text-sm font-medium cursor-pointer hover:text-cyan-800">
                            Sign-In
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}
