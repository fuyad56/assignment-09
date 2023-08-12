import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-[160px] bg-white w-[55%] mx-auto rounded-md shadow-md'>
            <h1 className='text-8xl text-[#FF6E40] font-medium my-5'>404!</h1>
            <h3 className='text-4xl my-5'>The page you are searching for was not found.</h3>
            <p className='text-xl mb-10'>Try again later <Link to={"/home"} className='underline text-[#FF6E40]'>Go to home page</Link></p>
        </div>
    );
};

export default Error;