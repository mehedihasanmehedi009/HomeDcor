import React from 'react';
import Navber from '../Navber';
import Footer from '../Footer';
import { Outlet } from 'react-router';

const MainLayout = () => {
    return (
        <>
        <div className=' flex flex-col min-h-screen'>
            <Navber></Navber>
          <div className='flex-1 max-w-screen-2xl w-full px-4 md:px-8  lg:px-12 py-4 md:py-8  lg:py-12  mx-auto p-9'>
              <Outlet></Outlet>
          </div>
            <Footer></Footer>
            
        </div>
        </>
    );
};

export default MainLayout;