import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import Modal from './model';
import ContactForm from './ContactForm';

const LazyBackgroundSection = ({ id, bgImage, children }) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section
            id={id}
            ref={ref}
            className={`bg-no-repeat bg-cover bg-fixed pt-16 h-screen transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'
                }`}
            style={{ backgroundImage: `url('${bgImage}')` }}
        >
            {children}
        </section>
    );
};

const MainContent = () => {
    const [educt, setEducat] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [selectedCertification, setSelectedCertification] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch('/api/education.json')
            .then((res) => res.json())
            .then((response) => {
                setEducat(response.education);
                setCertifications(response.certificats)
            });
    }, []);

    const handleCertificationClick = (certification) => {
        setSelectedCertification(certification);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedCertification(null);
    };

    return (
        <main className="mx-auto py-4">
            <LazyBackgroundSection id="home" bgImage="../bg.jpg">
                <h2 className="text-3xl font-bold mb-4">Home</h2>
                <p>This is the home section.</p>
            </LazyBackgroundSection>

            <LazyBackgroundSection id="about" bgImage="../about.jpg">
                <h2 className="text-3xl font-bold mb-4">About</h2>
                <p>This is the about section.</p>
            </LazyBackgroundSection>

            <LazyBackgroundSection id="education" bgImage="../education.jpg">
                <div className="w-full pt-5 h-screen bg-black/40 text-white">
                    <div className="md:w-3/5 m-auto py-5 uppercase">
                        <h2 className="md:text-4xl text-xl text-center font-bold mb-4">Educational Attainment</h2>
                        <div className="flex items-center justify-center">
                            <table className="md:table-auto md:text-lg border-collapse border border-cyan-500 bg-cyan-900 bg-opacity-80 shadow shadow-cyan-400">
                                <thead>
                                    <tr>
                                        <th className="p-2 border border-cyan-500">Qualification</th>
                                        <th className="p-2 border border-cyan-500">Institution</th>
                                        <th className="p-2 border border-cyan-500">School/University</th>
                                        <th className="p-2 border border-cyan-500">City</th>
                                        <th className="p-2 border border-cyan-500">Year</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {educt &&
                                        educt.map((x, i) => (
                                            <tr key={i} className={`bg-cyan-${i % 2 === 0 ? '700' : '600'} bg-opacity-0 hover:bg-opacity-30`}>
                                                <td className="p-2 border border-cyan-700 bg-opacity-30">{x.qualification}</td>
                                                <td className="p-2 border border-cyan-700 bg-opacity-30">{x.institution}</td>
                                                <td className="p-2 border border-cyan-700 bg-opacity-30">{x.board}</td>
                                                <td className="p-2 border border-cyan-700 bg-opacity-30">{x.city}</td>
                                                <td className="p-2 border border-cyan-700 bg-opacity-30">{x.year}</td>
                                            </tr>
                                        ))}
                                </tbody>
                            </table>
                        </div>
                        <h2 className="md:text-4xl pt-10 text-xl text-center font-bold mb-4">Certification</h2>
                        <div className="border md:grid grid-cols-3 gap-4 p-1">
                            {certifications.map((cert, index) => (
                                <div
                                    key={index}
                                    className="shadow shadow-cyan-400 rounded bg-cyan-900 cursor-pointer text-center"
                                    onClick={() => handleCertificationClick(cert)}
                                >
                                    {cert.title}
                                    <img src={cert.img} className='w-full' />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </LazyBackgroundSection>

            <LazyBackgroundSection id="resume" bgImage="../resume.jpg">
                <h2 className="text-3xl font-bold mb-4">Resume</h2>
                <p>This is the Resume section.</p>
            </LazyBackgroundSection>

            <LazyBackgroundSection id="contact" bgImage="../contact.jpg">

                <div className='w-1/5 m-auto mt-5 py-5 shadow shadow-white/30 bg-black/30 p-5 rounded-lg text-white'>
                    <h2 className="md:text-3xl text-center font-bold md:mb-4">Contact</h2>

                    <ContactForm />
                </div>

                <div className='w-3/5 mt-10 p-1 m-auto md:grid grid-cols-3 gap-5 uppercase'>

                    <div className="flex justify-center text-center bg-white/80 shadow shadow-black rounded-xl">
                        <a
                            href="https://www.linkedin.com/in/alawa/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700"
                        >
                            <img src='./linkdin.png' className='w-full h-52' />
                            <span className='text-2xl'>LinkdIn</span>
                        </a>

                    </div>


                    <div className="flex justify-center text-center bg-white/80 shadow shadow-black rounded-xl">
                        <a
                            href="https://github.com/Anshualawa"
                            target="_blank"
                            className="text-gray-700 hover:text-gray-900"
                        >
                            <img src='./github.png' className='w-full h-52' />
                            <span className='text-2xl'>github</span>
                        </a>
                    </div>


                    <div className="flex justify-center text-center bg-white/80 shadow shadow-black rounded-xl">

                        <a
                            href="mailto:alawa3282@gmail.com"
                            className="text-red-500 hover:text-red-700"
                        >
                            <img src='./email.png' className='w-full h-52' />
                            <span className='text-2xl'>Email</span>
                        </a>
                    </div>
                </div>

            </LazyBackgroundSection>

            <Modal isOpen={isModalOpen} onClose={closeModal} certification={selectedCertification} />
        </main >
    );
};

export default MainContent;
