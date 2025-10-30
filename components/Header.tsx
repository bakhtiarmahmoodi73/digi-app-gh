"use client";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <nav className="mx-auto  flex items-center justify-between  bg-navbar h-[64px]   md:h-[92px] ">
      <div className="flex ">
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
          className=" w-[57.74px] mb-[18.02px] mt-[18px] mr-[10.26px]   md:w-[109px] md:mt-[20px] md:mr-[20px]  md:h-[53px] lg:w-[109px] lg:h-[53px] lg:top-[25px] lg:left-[900px] xl:w-[120px] xl:h-[56px] xl:top-[25px] xl:left-[1130px]"
        />
      
      
        <ul className=" hidden md:flex md:mr-[27px] md:items-center md:gap-[19px]">
          <li className=" text-[#000000] font-iranSans font-[400] md:text-[14px]  md:w-[70px]  md:p-0    lg:w-[85px] lg:h-[25px] lg:top-[39px] lg:left-[780px]  lg:text-[16px]  xl:w-[100px] xl:h-[25px] xl:top-[39px] xl:left-[980px] xl:text-[18px]">
            صفحه اصلی
          </li>
          <li className=" text-[#000000] font-iranSans    md:text-[14px]   font-[400]  md:w-[79px]    lg:w-[100px] lg:top:h-[25px] lg:top-[39px] lg:left-[670px] lg:text-[16px] lg:leading-[25.04px] xl:w-[120px] xl:h-[25px] xl:top-[39px] xl:left-[820px] xl:text-[18px]">
            قیمت رمزارزها
          </li>
          <li className=" text-[#000000] font-iranSans   md:text-[14px]  font-[400]  md:w-[37px]  lg:w-[43px] lg:h-[25px] lg:top-[39px] lg:left-[580px] lg:text-[16px] lg:leading-[25.04px] xl:w-[70px] xl:h-[25px] xl:top-[39px] xl:left-[720px] xl:text-[18px]">
            مقالات
          </li>
          <li className=" text-[#000000] font-iranSans  md:w-[62px]  md:text-[14px] font-[400]    lg:w-[75px] lg:h-[25px] lg:top-[39px] lg:left-[460px] lg:text-[16px] lg:leading-[25.04px] xl:w-[120px] xl:h-[25px] xl:top-[39px] xl:left-[570px] xl:text-[18px]">
            تماس با ما
          </li>
          <li className=" font-iranSans  text-[#000000] md:hidden sm:hidden md:text-[14px] lg:block lg:w-[28px] lg:h-[25px] lg:top-[39px] lg:left-[410px] font-[400] lg:text-[16px] lg:leading-[25.04px] xl:w-[120px] xl:h-[25px] xl:top-[39px] xl:left-[450px] xl:text-[18px]">
            سایر
          </li>
        </ul>
      </div>
      <div className="flex md:mr-[111px] md:gap-0 ">
        <div className="flex items-center  mr-[0px] md:gap-[5.33px]">
        <Image
          src="/images/Frame.png"
          alt="frame"
          width={40}
          height={60}
          className=" hidden md:block md:w-[16px]  md:h-[16px] lg:w-[24px] lg:h-[24px] lg:top-[40px] lg:left-[300px] xl:left-[270px]"
        />
        <p className=" font-iranSansnumber text-[#000000] hidden md:flex  md:w-[93px] md:h-[21px]  md:text-[14px] md:font-[400]  ">
          021-91008590
        </p>
        </div>
        <div className="flex items-center justify-between  md:mr-[16px] md:ml-[16px] ">
        <Image
          src="/images/Group 137.png"
          alt="user"
          width={40}
          height={60}
          className=" w-[30px] h-[30px] mt-[18px]   mb-[16px]  md:w-[26px] md:h-[26px]  lg:w-[26px] lg:h-[26px] lg:top-[38px] lg:left-[140px] xl:left-[132px]"
        />
        <p className=" text-[#000000] font-iranSans w-[77px]  font-[500] text-[14px] mr-[9px] md:w-[115px] md:text-[14px]   lg:w-[77px] lg:h-[22px] lg:top-[40px] lg:left-[50px] lg:font-[500] lg:text-[14px] lg:leading-[21.91px] xl:left-[42px]">
          علی اسماعیلی
        </p>
        <Image
          src="/images/Frame (1).png"
          alt="frame"
          width={40}
          height={60}
          className=" w-[24px] h-[24px] mt-[21px]  mb-[19px]     lg:w-[24px] lg:h-[24px] lg:top-[39px] lg:left-[20px] xl:left-[20px]"
        />
        </div>
      </div>
    </nav>
  );
}

export default Header;
