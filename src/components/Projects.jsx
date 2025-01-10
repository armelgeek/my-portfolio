import React from 'react'
import Modal from './Modal';
import bg1 from '../assets/img/project1.png'
import { FaArrowRight, FaChevronRight, FaEye, FaSquareGithub } from 'react-icons/fa6';
import { FaGithub } from 'react-icons/fa6';
const Projects = () => {
    return (
        <Modal title="Projets." className={"rotate-[-90deg]"}>
            <h3 className="text-3xl font-semibold text-purple-500 heading--underlined" style={{
                fontFamily: "Pacifico,sans-serif"
            }}>
                Mes projets
            </h3>
            <div className="overflow-auto ">
                <div className="flex flex-row gap-3 mt-10 h-96">
                <div className="flex flex-row gap-3">
                        <div className="w-[350px] p-3 shadow-sm border">
                            <div className="flex flex-col items-start justify-center h-full gap-4">
                                <h3 className='text-2xl font-bold text-white' style={{
                                    fontFamily: 'Karla,sans-serif'
                                }}>gitpod.io</h3>
                                <p className='text-lg text-white' style={{
                                    fontFamily: 'Karla,sans-serif'
                                }}>Website for Gitpod a online cloud IDE based on Eclipse Theia.</p>
                                <ul style={{
                                    fontFamily: 'Karla,sans-serif',
                                    color: 'white'
                                }}>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> SvelteKit</li>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> React</li>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> TailWind CSS</li>
                                </ul>
                                <div className="flex flex-row items-center gap-5 mt-2">
                                    <button style={{
                                        fontFamily: "Karla",
                                        fontWeight: "bold",
                                    }} className='flex flex-row items-center gap-2 px-5 py-2 text-white bg-purple-500 border-2 rounded-full text-md bg-white-500 border-slate-300'><FaEye/>Voir le démos </button>
                                    <FaGithub color="white" size={22} />
                                </div>
                            </div>
                        </div>
                        <div className="w-[650px] bg-gray-400" style={{
                            backgroundImage: `url(${bg1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                    </div>
                </div>
                
                    <div className="flex flex-row gap-3">
                        <div className="w-[350px] p-3 shadow-sm border">
                            <div className="flex flex-col items-start justify-center h-full gap-4">
                                <h3 className='text-2xl font-bold text-white' style={{
                                    fontFamily: 'Karla,sans-serif'
                                }}>gitpod.io</h3>
                                <p className='text-lg text-white' style={{
                                    fontFamily: 'Karla,sans-serif'
                                }}>Website for Gitpod a online cloud IDE based on Eclipse Theia.</p>
                                <ul style={{
                                    fontFamily: 'Karla,sans-serif',
                                    color: 'white'
                                }}>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> SvelteKit</li>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> React</li>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> TailWind CSS</li>
                                </ul>
                                <div className="flex flex-row items-center gap-5 mt-2">
                                    <button style={{
                                        fontFamily: "Karla",
                                        fontWeight: "bold",
                                    }} className='flex flex-row items-center gap-2 px-5 py-2 text-white bg-purple-500 border-2 rounded-full text-md bg-white-500 border-slate-300'><FaEye/>Voir le démos </button>
                                    <FaGithub color="white" size={22} />
                                </div>
                            </div>
                        </div>
                        <div className="w-[650px] bg-gray-400" style={{
                            backgroundImage: `url(${bg1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                    </div>
                </div>

                <div className="flex flex-row gap-3 mt-10 h-96">
                    <div className="flex flex-row gap-3">
                        <div className="w-[350px] p-3 shadow-sm border">
                            <div className="flex flex-col items-start justify-center h-full gap-4">
                                <h3 className='text-2xl font-bold text-white' style={{
                                    fontFamily: 'Karla,sans-serif'
                                }}>gitpod.io</h3>
                                <p className='text-lg text-white' style={{
                                    fontFamily: 'Karla,sans-serif'
                                }}>Website for Gitpod a online cloud IDE based on Eclipse Theia.</p>
                                <ul style={{
                                    fontFamily: 'Karla,sans-serif',
                                    color: 'white'
                                }}>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> SvelteKit</li>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> React</li>
                                    <li style={{
                                        fontFamily: 'Karla,sans-serif',
                                        color: 'white'
                                    }} className='flex flex-row items-center gap-2'><FaChevronRight /> TailWind CSS</li>
                                </ul>
                                <div className="flex flex-row items-center gap-5 mt-2">
                                    <button style={{
                                        fontFamily: "Karla",
                                        fontWeight: "bold",
                                    }} className='px-5 py-2 text-white bg-purple-500 border-2 rounded-full text-md bg-white-500 border-slate-300'>Voir le démos </button>
                                    <FaGithub color="white" size={22} />
                                </div>
                            </div>
                        </div>
                        <div className="w-[650px] bg-gray-400" style={{
                            backgroundImage: `url(${bg1})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                        }}></div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default Projects;
