import React from 'react';
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="fixed top-4 inset-x-0 mx-auto z-10 rounded-full w-[95%] bg-neutral-800/15 backdrop-blur-md border border-neutral-700">
            <div className="pl-6 pr-3 py-3 flex items-center justify-between text-neutral-100">
                <Link className="text-3xl font-bold" href="/">let me cook</Link>
                <div className="flex items-center gap-7 font-semibold">
                    <Link href="/about-us">About us</Link>
                    <Link href="/recipes">Recipes</Link>
                    <Link href="/pricing">Pricing</Link>
                </div>
                <div className="flex items-center gap-7 font-semibold">
                    <Link href="/login">Log in</Link>
                    <Link className="bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-full" href="/register">Get started for free</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;