import React from 'react';
import Link from "next/link";

const Hero = () => {
    return (
        <section className="pt-27 pb-19 lg:pt-32 lg:pb-24 bg-neutral-900 text-neutral-100">
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center gap-12 lg:gap-0">
                <div className="flex flex-col gap-6 justify-center items-center lg:items-start text-center lg:text-start mx-3 max-w-[590px] xl:max-w-1/2">
                    <h1 className="text-5xl font-bold">
                        You have the ingredients.<br /> We have the recipes.
                    </h1>
                    <p className="text-xl">
                        Unlock thousands of delicious possibilities hidden in your pantry and discover new culinary horizons based precisely on the items you already own.
                    </p>
                    <Link className="text-lg bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-full shadow-md shadow-green-500 hover:shadow-green-600" href="/">Get started for free</Link>
                </div>
                <div  className="flex self-center flex-col gap-7 items-center mx-3 p-3 sm:p-7 bg-neutral-800 rounded-3xl border border-neutral-700">
                    <p className="text-lg">
                        Enter your ingredients...
                    </p>
                    <div className="flex justify-center gap-2">
                        <span className="py-2 px-4 bg-neutral-900 rounded-3xl border border-neutral-700">Apple 🍎</span>
                        <span className="py-2 px-4 bg-neutral-900 rounded-3xl border border-neutral-700">Flour 🌾</span>
                        <span className="py-2 px-4 bg-neutral-900 rounded-3xl border border-neutral-700">Butter 🧈</span>
                    </div>
                    <p className="text-lg">
                        ...and we'll find this for you:
                    </p>
                    <div className="p-5 bg-neutral-900 rounded-xl border border-neutral-700">
                        <h3 className="text-2xl font-bold">
                            Apple Crumble
                        </h3>
                        <p className="italic mt-2">
                            The ultimate cozy British dessert, perfect for a cold day.<br />
                            <strong>Difficulty:</strong> Easy
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;