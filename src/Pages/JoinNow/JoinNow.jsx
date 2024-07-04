import React from 'react';
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { IoIosCheckboxOutline } from "react-icons/io";

const JoinNow = () => {
    return (
        <div><div className='min-h-screen py-32 bg-gray-100'>
    
        <div className=''>
            <div className='w-96 h-auto px-4 mx-auto rounded-md py-10 bg-white ' >
                
                <form className=" p-6">
                    <div className="flex gap-2 flex-col justify-center items-center h-auto my-2">
                    <div className="h-20 w-20 rounded-full bg-slate-100">

                    </div>
                    <p className="text-xl font-bold">Sign Up</p>
                    </div>
                <div className=" mb-5">
                        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Join as</label>
                        <div className='-mb-7 ml-1'><IoIosCheckboxOutline></IoIosCheckboxOutline> </div>
                        <input type="email" className="bg-gray-100 pl-6 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yoga Practitioner" required />
                    </div>
                <div className=" mb-3">
                        <div className='-mb-7 ml-1'> <MdCheckBoxOutlineBlank></MdCheckBoxOutlineBlank> </div>
                        <input className="bg-gray-100 pl-6  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Yoga Instructor" required />
                    </div>
                    
                    <div className='flex justify-center'>
                        <button type="submit" className=" w-1/2 bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-lg text-sm px-10 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Now</button>
                    </div>
                </form>

            </div>
            <div className='w-1/2'>
            </div>
        </div>
    </div>
        </div>
    );
};

export default JoinNow;