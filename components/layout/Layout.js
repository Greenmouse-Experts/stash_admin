import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { ProSidebarProvider } from "react-pro-sidebar";
import Footer from "./Footer";
import Header from "./Header";
import SidebarLayout from "./Sidebar";


const Layout = ({ children }) => {

  return (
    <ProSidebarProvider>
        <div className='lg:dashboard-grid'>
            <div className='lg:w-auto'>
                <SidebarLayout/>
            </div>
            <div className='relative'>
                <div className='fixed index-30 top-0 bg-white w-full lg:pr-60 shadow'>
                    <Header/>
                </div>
                <div className='bg-dash mt-16 py-10 min-h-screen px-3 lg:px-6'>
                {children}
                </div>
                <div className='bg-white'>
                    <Footer/>
                </div>
            </div>
        </div>
    </ProSidebarProvider>
  );
};

export default Layout;