import React from 'react';
import img from '../../assets/bee.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='w-full h-96 '>
            <img className='relative opacity-80 w-full object-cover' src={img} alt="" />
            <div className='absolute  flex items-center justify-center inset-0 mt-60'>
            <Link to='/join'> <button type="submit" className=" w-32 h-10 bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded text-sm px-2 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Join Now</button></Link>

    </div>
        </div>
    );
};

export default Banner;