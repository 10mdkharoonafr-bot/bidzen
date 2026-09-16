import React from 'react'

const Footer = () => {
  return (
<>

<div className='bg-[#090909] flex flex-col md:flex-row justify-center items-start gap-y-8 md:gap-x-[40px] lg:gap-x-[70px] px-5 sm:px-8 md:px-6 lg:px-0 py-10 md:py-12'>


{/* ======================Bidzen  and social icon */}
    <div className='w-full md:w-[25%] lg:w-[20%]'>
        <img src="logo_dark.png" alt="logo_Footer"  className='w-[80px] sm:w-[90px] md:w-[100px] '/>
        <p className='text-white text-[14px] sm:text-[16px] md:text-[18px]' >Sed ut perspiciatis unde omnis iste natus error sit voluptate accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quaes</p><br />
        <div className='flex gap-x-[8px] sm:gap-x-[10px]'>
        <img src="communication.png" alt="facebook" className='w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px]' />
        <img src="instagram.png" alt="facebook" className='w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px]' />
        <img src="linkedin.png" alt="facebook" className='w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px]' />
        <img src="tiktok.png" alt="facebook" className='w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px] bg-white' />
        <img src="youtube.png" alt="facebook" className='w-[35px] h-[35px] sm:w-[42px] sm:h-[42px] md:w-[50px] md:h-[50px]' />
        </div>
    </div>

    <div className='text-white w-full md:w-[20%] lg:w-[15%]'>
        <h4 className='font-bold text-[20px] sm:text-[22px] md:text-[24px]'>MarketPlace</h4>
        <ul className='text-[14px] sm:text-[15px] md:text-[16px]'>
          <a href="#"> <li>Gaming </li></a> 
          <a href="#"> <li> Product</li></a> 
          <a href="#"> <li>All NFTs </li></a> 
          <a href="#"> <li> Social Network</li></a> 
          <a href="#"> <li>Domain Names </li></a> 
          <a href="#"> <li> Collectibles</li></a> 
          
        </ul>
    </div>
    

     <div className='text-white w-full md:w-[20%] lg:w-[15%]'>
        <h4 className='font-bold text-[20px] sm:text-[22px] md:text-[24px]'>Supports</h4>
        <ul className='text-[14px] sm:text-[15px] md:text-[16px]'>
          <a href="#"> <li>Setting & Privacy </li></a> 
          <a href="#"> <li> Help & Support</li></a> 
          <a href="#"> <li>Live Auctions </li></a> 
          <a href="#"> <li> Item Details</li></a> 
          <a href="#"> <li>24/7 Supports </li></a> 
          <a href="#"> <li> Blog</li></a> 
          
        </ul>
    </div>

    <div className='w-full md:w-[25%] lg:w-auto'>
        <h4 className='font-bold text-[20px] sm:text-[22px] md:text-[24px]'>Supports</h4>
        <span className='text-white flex gap-x-[8px] sm:gap-x-[10px]'>
            <img src="footerpic1.jpg" alt="" className='w-[40px] sm:w-[45px] md:w-[50px]' />
            <p className='float-start text-[13px] sm:text-[14px] md:text-[16px]'>Roll Out New Features Without <br /> Hurting Loyal Users <br />25 JAN 2022</p>
        </span> <br />
         <span className='text-white flex gap-x-[8px] sm:gap-x-[10px]'>
            <img src="footerpic1.jpg" alt="" className='w-[40px] sm:w-[45px] md:w-[50px]' />
            <p className='float-start text-[13px] sm:text-[14px] md:text-[16px]'>Roll Out New Features Without <br /> Hurting Loyal Users <br />25 JAN 2022</p>
        </span>

    </div>



</div>





</>

)
}

export default Footer