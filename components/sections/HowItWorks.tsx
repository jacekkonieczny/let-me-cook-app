import React from 'react';

const HowItWorks = () => {
    return (
        <section className="py-20 bg-neutral-800 text-neutral-100">
            <div className="container mx-auto flex flex-col items-center gap-7">
                <h2 className="text-4xl font-bold">See how easy it is</h2>
                <div className="flex flex-col lg:flex-row justify-center items-center gap-7">
                    <div className="flex flex-col items-center max-w-sm p-8 text-center">
                        <div className="bg-green-600 text-2xl font-semibold rounded-[50%] w-12 h-12 flex justify-center items-center mb-6">1</div>
                        <h3 className="text-2xl font-semibold">List your ingredients</h3>
                        <p className="text-lg">Simply tell the app what you currently have in your kitchen. (e.g., &quot;Chicken, mushrooms, rice&quot;)</p>
                    </div>
                    <div className="flex flex-col items-center max-w-sm p-8 text-center">
                        <div className="bg-green-600 text-2xl font-semibold rounded-[50%] w-12 h-12 flex justify-center items-center mb-6">1</div>
                        <h3 className="text-2xl font-semibold">Set your filters</h3>
                        <p className="text-lg">Add optional constraints: dietary needs, allergies, desired cuisine, or cooking time. (e.g., &quot;Vegan, 30 minutes&quot;)</p>
                    </div>
                    <div className="flex flex-col items-center max-w-sm p-8 text-center">
                        <div className="bg-green-600 text-2xl font-semibold rounded-[50%] w-12 h-12 flex justify-center items-center mb-6">1</div>
                        <h3 className="text-2xl font-semibold">Get your unique recipe</h3>
                        <p className="text-lg">Receive an instantly generated, perfectly tailored recipe with step-by-step instructions. Time to cook!</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;