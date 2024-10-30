import React, { useContext, useState } from "react";
import { DarkModeContext } from "../context/DarkModeContext";
// font awesone
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// border-all
import { faBorderAll } from '@fortawesome/free-solid-svg-icons'
// file-lines
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
// calendar-days
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
// share-nodes
import { faShareNodes } from '@fortawesome/free-solid-svg-icons'
// clock regular
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
// fa-message regular
import { faMessage } from '@fortawesome/free-regular-svg-icons'
// fa-microphone
import { faMicrophone } from '@fortawesome/free-solid-svg-icons'
// gear
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";


export default function NavBar() {
    const { isDarkMode, toggleDarkMode } = useContext(DarkModeContext);
    const [menu, setMenu] = useState(false);



    return (
        <div>
            <div className={`dark:bg-black h-screen bg-white fixed left-0 top-0 bottom-0 border-r dark:border-gray-800 relative flex flex-col items-center ${menu ? 'w-[15%]' : 'w-[5%]'} transition-width duration-300 ease-in-out px-4`}>

                <button
                    onClick={() => setMenu(!menu)}
                    className="top-[40%] absolute -right-[29px] "
                >

                    <svg height="110" viewBox="0 0 6 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0L1.48749 4.16498C2.15625 6.0375 3.17901 7.76388 4.5 9.25V9.25V9.25C5.65529 10.5497 5.70573 12.4928 4.61942 13.8507L4.5 14V14C3.17458 15.6568 2.11235 17.5079 1.35071 19.4882L0 23V0Z" fill={isDarkMode ? 'rgb(39 39 42)' : 'rgb(228 228 231)'} />
                    </svg>

                </button>
                <div className={`w-full flex flex-col h-[8%] space-y-2 ${menu ? 'justify-center' : 'justify-center items-center'}`}>
                    <button className={` transition-colors duration-300 ease-in-out font-semibold  lg:text-lg 2xl:text-xl ${menu ? ' px-2 rounded-md' : 'lg:w-10 lg:h-10 2xl:w-12 2xl:h-12 rounded-[40%]'}`}>
                        <div className={`flex space-x-2 ${menu ? '' : 'justify-center items-center'}`}>
                            <h1 className="text-blue-500 text-2xl">A</h1>
                            <h1 className={`overflow-hidden mt-1  ${menu ? 'w-full transition-width duration-500 ease-in-out text-left' : 'w-0'}`}>Infra</h1>
                        </div>
                    </button>
                </div>
                <div className="w-full flex flex-col justify-between items-center h-full py-4">
                    <div className={`w-full flex flex-col  space-y-2 ${menu ? '' : 'justify-center items-center'}`}>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faBorderAll} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1000ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">Dashboard</h1>
                            </div>
                        </button>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faFileLines} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1100ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">Documentation</h1>
                            </div>
                        </button>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faCalendarDays} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1200ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">Calendar</h1>
                            </div>
                        </button>


                        <div className="w-full dark:bg-gray-800 bg-gray-200 h-[1px]  rounded-full"></div>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faShareNodes} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1300ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">To share</h1>
                            </div>
                        </button>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faChartPie} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1400ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">Analytics</h1>
                            </div>
                        </button>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faMessage} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1500ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">Chat</h1>
                            </div>
                        </button>
                    </div>
                    <div className={` w-full flex flex-col space-y-2 ${menu ? '' : 'justify-center items-center'}`}>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faMicrophone} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1600ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">Voice</h1>
                            </div>
                        </button>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faGear} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1700ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">Settings</h1>
                            </div>
                        </button>
                        <button className={`hover:bg-blue-500/40 text-gray-400 dark:text-white hover:text-blue-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faHeadset} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1800ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms]">Call</h1>
                            </div>
                        </button>

                        <div className="w-full dark:bg-gray-800 bg-gray-200 h-[1px] w-8 rounded-full"></div>
                        <button className={`hover:bg-red-500/40 text-red-500 dark:text-white hover:text-red-500 transition-colors duration-300 ease-in-out flex justify-center items-center ${menu ? ' px-2 rounded-md py-1 space-x-2' : 'px-2 rounded-[39%]  py-1.5 w-10 h-10 '}`}>
                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-2xl" />
                            <div className={`overflow-hidden font-semibold ${menu ? 'w-full transition-[width] duration-[1900ms] ease-in-out text-left' : 'w-0'}`}>
                                <h1 className="transition-[color] duration-[0ms] ">Logout</h1>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div className={`h-[8%] bg-white dark:bg-black/50 border-b dark:border-gray-800 fixed top-0  flex justify-between items-center px-8 ${menu ? 'w-[85%] left-[15%]' : 'w-[95%] left-[5%]'} transition-all duration-300 ease-in-out`}>
                <h1 className="font-semibold text-2xl">Text Nav</h1>
                <div className="flex items-center space-x-2">
                    <div className="dark:bg-zinc-800 flex px-1 py-[3px] relative rounded-full shadow-inner bg-zinc-200">
                        <button className={`rounded-full w-7 h-7 flex justify-center items-center z-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`} onClick={toggleDarkMode}>L</button>
                        <button className={`rounded-full w-7 h-7 flex justify-center items-center z-10 ${isDarkMode ? 'text-gray-300' : 'text-gray-400'}`} onClick={toggleDarkMode}>M</button>
                        <div className={`dark:bg-black bg-white h-7 w-7 absolute rounded-full transition-transform duration-300 ease-in-out ${isDarkMode ? 'transform translate-x-full' : ''}`}></div>
                    </div>
                    <button className="rounded-full dark:bg-zinc-800 bg-zinc-200 h-8 w-8 flex justify-center items-center relative shadow-inner">
                        <div className="absolute h-2 w-2 bg-red-400 rounded-full -right-[1px] top-0"></div>
                        <h1 className="">L</h1>
                    </button>
                    <button className="rounded-full dark:bg-zinc-800 bg-zinc-200 h-8 w-8 flex justify-center items-center border-green-400 border relative">
                        <div className="absolute h-2 w-2 bg-green-400 rounded-full -right-[1px] bottom-0"></div>
                        <h1>M</h1>
                    </button>
                </div>
            </div>
        </div >

    );
}