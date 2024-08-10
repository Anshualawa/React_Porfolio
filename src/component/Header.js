import React, { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeBtn, setActiveBtn] = useState('');

    return (
        <nav className="bg-gray-800 p-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-2xl font-bold cursor-none">
                    <span title='alawa3282@gmail.com'>Pappu Alawa</span>
                </div>
                <div className="md:hidden pr-5">
                    <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'block' : 'hidden'} text-white focus:outline-none text-lg`}>&#x274c;</button>
                    <button onClick={() => setIsOpen(!isOpen)} className={`${isOpen ? 'hidden' : 'block'} text-white focus:outline-none text-xl`}>&equiv;</button>
                </div>
                <div className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:relative top-14 md:top-0 right-0 md:right-0 bg-gray-800 md:bg-transparent rounded-md uppercase md:rounded-none md:p-0 p-4`}>
                    <a onClick={() => setActiveBtn('home')} href="#home" className={`block md:inline-block  px-4 py-2 ${activeBtn === 'home' ? 'underline text-cyan-400' : 'text-white'}`}>Home</a>
                    <a onClick={() => setActiveBtn('about')} href="#about" className={`block md:inline-block px-4 py-2 ${activeBtn === 'about' ? 'underline text-cyan-400' : 'text-white'}`}>About</a>
                    <a onClick={() => setActiveBtn('education')} href="#education" className={`block md:inline-block px-4 py-2 ${activeBtn === 'education' ? 'underline text-cyan-400' : 'text-white'}`}>education</a>
                    <a onClick={() => setActiveBtn('resume')} href="#resume" className={`block md:inline-block px-4 py-2 ${activeBtn === 'resume' ? 'underline text-cyan-400' : 'text-white'}`}>resume</a>
                    <a onClick={() => setActiveBtn('porjects')} href="#porjects" className={`block md:inline-block px-4 py-2 ${activeBtn === 'porjects' ? 'underline text-cyan-400' : 'text-white'}`}>porjects</a>
                    <a onClick={() => setActiveBtn('contact')} href="#contact" className={`block md:inline-block px-4 py-2 ${activeBtn === 'contact' ? 'underline text-cyan-400' : 'text-white'}`}>contact</a>
                </div>
            </div>
        </nav>
    );
}

export default Header;
