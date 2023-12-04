import React from 'react';
import preLoader from '../../../assets/images/preloader.gif'

const Loader = () => {

    return (
        <div className='bg-sky-100 flex justify-center items-center min-h-[100vh] w-full'>
            <div className='w-fit h-full'>
                <img src={preLoader} alt="Image" />
            </div>
        </div>
    );
};

export default Loader;