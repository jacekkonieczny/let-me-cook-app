"use client";

import React, {useState} from 'react';
import Link from 'next/link';

interface NavLink {
    name: string;
    href: string;
}

const navLinks: NavLink[] = [
    {name: "About us", href: "#"},
    {name: "Recipes", href: "#"},
    {name: "Pricing", href: "#"}
];

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }

    return (
        <nav className="fixed top-0 left-0 z-10 w-full bg-neutral-800/15 backdrop-blur-md border-b border-neutral-700">
            <div className="container mx-auto px-3 py-3 flex items-center justify-between text-neutral-100">
                <Link className="text-3xl font-bold" href="/">let me cook</Link>
                <div className="hidden lg:flex items-center gap-7 font-semibold">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover-underline-animation"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex items-center gap-7 font-semibold">
                    <Link className="hover-underline-animation" href="/login">Log in</Link>
                    <Link className="bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-full" href="/register">Get started for free</Link>
                </div>
                <button
                    className="lg:hidden cursor-pointer"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    )}
                </button>
            </div>
            <div className={`lg:hidden transition-all duration-300 ease-in-out border-t border-neutral-700 ${isMenuOpen ? 'max-h-96 opacity-100 py-7' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                <div className="container mx-auto flex flex-col items-center gap-7 font-semibold text-neutral-100">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="hover-underline-animation"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link className="hover-underline-animation" href="/login">Log in</Link>
                    <Link className="bg-green-600 hover:bg-green-700 px-5 py-2.5 rounded-full" href="/register">Get started for free</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;