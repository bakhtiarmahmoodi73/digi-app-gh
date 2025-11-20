"use client";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="w-full bg-navbar">
    <nav className="mx-auto flex items-center justify-between   h-[64px]   md:h-[92px] xl:h-[104px]   max-w-[1440px] ">
      
      <div className="flex">
        <Image
          src="/images/Group 405 (1).png"
          alt="log"
          width={20}
          height={20}
          className=" w-[24px] h-[24px] mt-[20px] mr-[20px] mb-[20px] md:hidden"
        />
        <Image
          src="/images/logo_dark.8e5c7ade 2.svg"
          alt="logo"
          width={100}
          height={200}
          className=" w-[57.74px] mb-[18.02px] mt-[18px] mr-[10.26px]   md:w-[109px] md:mt-[20px] md:mr-[20px]  md:h-[53px]  xl:w-[109px] xl:h-[53px]  xl:mr-[150px]"
        />
      
      
        <ul className=" hidden md:flex md:mr-[27px] md:items-center md:gap-[19px] xl:mr-[47.33px] xl:gap-[47px]">
          <li className=" text-[#000000] font-iran-sans-regular  md:text-[14px]  md:w-[70px]  md:p-0    lg:w-[85px]  xl:text-[16px]   xl:w-[80px]  ">
            صفحه اصلی
          </li>
          <li className=" text-[#000000] font-iran-sans-regular   md:text-[14px]     md:w-[79px]    lg:w-[100px]   xl:w-[90px]  xl:text-[16px]">
            قیمت رمزارزها
          </li>
          <li className=" text-[#000000] font-iran-sans-regular  md:text-[14px]  font-[400]  md:w-[37px]  lg:w-[43px]   xl:w-[42px]  xl:text-[16px]">
            مقالات
          </li>
          <li className=" text-[#000000] font-iran-sans-regular  md:w-[62px]  md:text-[14px] font-[400]    lg:w-[75px]   xl:w-[71px]  xl:text-[16px]">
            تماس با ما
          </li>
          <li className=" font-iran-sans-regular  text-[#000000] md:hidden sm:hidden md:text-[14px] lg:hidden xl:block lg:w-[28px]  font-[400]  xl:w-[28px] xl:text-[16px]">
            سایر
          </li>
        </ul>
      </div>
      <div className="flex md:mr-[111px]  md:gap-0 xl:mr-[196px] xl:ml-[145px]  ">
        <div className="flex items-center  mr-[0px] md:gap-[5.33px]">
        <Image
          src="/images/Frame.png"
          alt="frame"
          width={40}
          height={60}
          className=" hidden md:block md:w-[16px]  md:h-[16px] xl:w-[24px] xl:h-[24px] "
        />
        <p className=" font-number-regular text-[#000000] hidden md:flex  md:w-[95px] md:h-[21px]  md:text-[14px]  xl:w-[120px] xl:text-[16px]  ">
          021-91008590
        </p>
        </div>
        <div className="flex items-center justify-between  md:px-[16px] ">
        <Image
          src="/images/Group 137.png"
          alt="user"
          width={40}
          height={60}
          className=" w-[30px] h-[30px] mt-[18px]   mb-[16px]  md:w-[26px] md:h-[26px]"
        />
        <p className=" text-[#000000]  font-iran-sans-medium   text-[14px] mr-[9px]  md:w-[115px] md:text-[14px]    xl:w-[135px] 2xl:w-[84px] ">
          علی اسماعیلی
        </p>
        <Image
          src="/images/Frame (1).png"
          alt="frame"
          width={40}
          height={60}
          className=" w-[24px] h-[24px] mt-[21px] ml-[18px] mb-[19px] md:ml-[0px]"
        />
        </div>
      </div>
    </nav>
    </div>
  );
}

export default Header;
