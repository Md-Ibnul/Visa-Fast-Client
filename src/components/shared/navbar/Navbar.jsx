import React from 'react';
import NavItems from './NavItems';
import Container from '../container/container';

const Navbar = () => {
    return (
        <div className='fixed w-full bg-white z-50 shadow-sm'>
            <div className='py-1 border-b-[1px]'>
                <div className='max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4'>
                    <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
                        <NavItems />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;