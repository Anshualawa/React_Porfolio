import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-no-repeat bg-cover bg-fixed bg-opacity-10 text-white h-screen flex items-center justify-center" style={{ backgroundImage: "url('../hero.jpg')" }}>
            <div className='h-screen bg-black/30 w-full flex items-center justify-center'>
                <div className="text-center  md:p-10 rounded-xl">
                    <div className="relative mb-5">
                        <h1 className="overflow-hidden whitespace-nowrap border-r-2 border-black md:text-5xl text-2xl font-bold font-mono animate-typing">
                            Welcome to My Website
                        </h1>
                        <span className="absolute top-0 right-0 w-1 h-full bg-black animate-blink"></span>
                    </div>
                    <p className="text-xl mb-8">This is a brief description of what my website is about.</p>
                    <a href="#main" className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold">Get Started</a>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;
