import React from 'react'
import logo from "../assets/logo.png"
function Footer() {
  return (
    <div className='w-[100%] md:h-[36vh] h-[21vh] mb-[77px] md:mb-[0px]'>
        <div className='w-[100%] md:h-[30vh] h-[15vh]  md:mb-[0px] bg-[#dbfcfcec] flex items-center justify-center md:px-[50px] px-[5px]'>
            <div className='md:w-[30%] w-[35%] h-[100%] flex items-start justify-center flex-col gap-[5px]  '>
                <div className='flex items-start justify-start gap-[5px] mt-[10px] md:mt-[40px]'>
                    <img src={logo} alt=""  className='md:w-[100px] md:h-[100px] w-[100px] h-[100px]'/>
                    <p className='text-[19px] md:text-[20px] text-[black] '></p>
            
                </div>
                <p className='text-[15px] text-[#1e2223] hidden md:block'>OneCart is your all-in-one online shopping destination, offering top-quality products, unbeatable deals, and fast delivery—all backed by trusted service designed to make your life easier every day.</p>
                    <p className='text-[15px] text-[#1e2223] flex md:hidden'>Fast. Easy. Reliable. OneCart Shopping</p>

                
            </div>
            <div className='md:w-[25%] w-[30%] h-[100%] flex items-center justify-center flex-col text-center'>
                    <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>COMPANY</p>

                    </div>


              
              
                   <ul>
                   <li
                    className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'
                    onClick={() => window.location.href = "https://glamzy-frontend.onrender.com/collection"}
                    >
                    Home
                    </li>
  
                    <li
                    className='text-[15px] text-[#1e2223] cursor-pointer'
                    onClick={() => window.location.href = "https://glamzy-frontend.onrender.com/about"}
                    >
                    About us
                    </li>
  
                   <li
                   className='text-[15px] text-[#1e2223] hidden md:block cursor-pointer'
                  onClick={() => window.location.href = "https://glamzy-frontend.onrender.com/contact"}
                  >
                  Contact
                  </li>
                 </ul>



              
                </div>

                <div className='md:w-[25%] w-[40%]  h-[100%] flex items-center justify-center flex-col text-center '>
                     <div className='flex items-center justify-center gap-[5px] mt-[10px] md:mt-[40px]'>
                        <p className='text-[19px] md:text-[20px] text-[#1e2223] font-sans '>GET IN TOUCH</p>

                    </div>
                     <ul>
                         <li className='text-[15px] text-[#1e2223] '>+91-7903959242</li>
                        <li className='text-[15px] text-[#1e2223] '>contact@glamzy.com</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>+1-123-456-7890</li>
                        <li className='text-[15px] text-[#1e2223] hidden md:block'>admin@glamzy.com</li>
                    </ul>
                </div>

        </div>
        <div className='w-[100%] h-[1px] bg-slate-400'></div>
        <div className='w-[100%] h-[5vh] bg-[#dbfcfcec] flex items-center justify-center'>Copyright 2025@glamzy.com-All Rights Reserved</div>
      
    </div>
  )
}

export default Footer
