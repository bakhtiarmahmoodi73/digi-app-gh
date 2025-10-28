"use client";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <nav className="mx-auto flex overflow-x-hidden bg-navbar w-full">
      
          <Image
            src="/images/Group 405 (1).png"
            alt="log"
            width={20}
            height={20}
            className=" w-[24px]  mt-[20px] mr-[20px] mb-[20px] sm:hidden"
          />
          <Image
            src="/images/logo_dark.8e5c7ade 2.svg"
            alt="logo"
            width={100}
            height={200}
            className=" w-[57.74px] mb-[18.02px] mt-[18px] mr-[10.26px]  sm:w-[70px]  md:w-[80px] md:h-[53px] md:top-[20px] md:left-[640px] lg:w-[109px] lg:h-[53px] lg:top-[25px] lg:left-[900px] xl:w-[120px] xl:h-[56px] xl:top-[25px] xl:left-[1130px]"
          />
          <ul className="hidden  sm:flex md:block">
            <li className=" text-[#000000] font-[400] sm:w-[60] sm:text-[14px] sm:mt-[25px] sm:mr-[12px] md:w-[69px] md:h-[22px] md:left-[545px] md:top-[35px] leading-[21.91px] md:text-[13px] md:leading-[21.91px] lg:w-[85px] lg:h-[25px] lg:top-[39px] lg:left-[780px] lg:font-[400] lg:text-[16px] lg:leading-[25.04px] xl:w-[100px] xl:h-[25px] xl:top-[39px] xl:left-[980px] xl:text-[18px]">
              صفحه اصلی
            </li>
            <li className=" text-[#000000] leading-[21.91px] sm:w-[70]  sm:text-[14px] sm:mt-[25px] sm:mr-[12px] md:w-[79px] md:h-[22px] md:left-[450px] md:top-[35px] font-[400] md:text-[13px] md:leading-[21.91px] lg:w-[100px] lg:top:h-[25px] lg:top-[39px] lg:left-[670px] lg:text-[16px] lg:leading-[25.04px] xl:w-[120px] xl:h-[25px] xl:top-[39px] xl:left-[820px] xl:text-[18px]">
              قیمت رمزارزها
            </li>
            <li className=" text-[#000000] sm:w-[36]  sm:text-[14px] sm:mt-[25px] sm:mr-[12px] md:w-[37px] md:h-[22px] md:left-[400px] md:top-[35px] font-[400] md:text-[13px] md:leading-[21.91px] lg:w-[43px] lg:h-[25px] lg:top-[39px] lg:left-[580px] lg:text-[16px] lg:leading-[25.04px] xl:w-[70px] xl:h-[25px] xl:top-[39px] xl:left-[720px] xl:text-[18px]">
              مقالات
            </li>
            <li className=" text-[#000000] sm:w-[60]  sm:text-[14px] sm:mt-[25px] sm:mr-[12px] md:w-[61px] md:h-[22px] md:left-[330px] md:top-[35px] font-[400] md:text-[13px] md:leading-[21.91px] lg:w-[75px] lg:h-[25px] lg:top-[39px] lg:left-[460px] lg:text-[16px] lg:leading-[25.04px] xl:w-[120px] xl:h-[25px] xl:top-[39px] xl:left-[570px] xl:text-[18px]">
              تماس با ما
            </li>
            <li className=" font-iranSans text-[#000000] md:hidden sm:hidden lg:block lg:w-[28px] lg:h-[25px] lg:top-[39px] lg:left-[410px] font-[400] lg:text-[16px] lg:leading-[25.04px] xl:w-[120px] xl:h-[25px] xl:top-[39px] xl:left-[450px] xl:text-[18px]">
              سایر
            </li>
          </ul>

          <Image
            src="/images/Frame.png"
            alt="frame"
            width={40}
            height={60}
            className=" hidden md:block md:w-[16px] md:h-[16px] md:top-[40px] md:left-[248px] lg:w-[24px] lg:h-[24px] lg:top-[40px] lg:left-[300px] xl:left-[270px]"
          />
          <p className=" font-iranSansnumber text-[#000000] hidden md:block md:w-[92px] md:h-[21px] md:top-[37px] md:left-[150px] md:text-[14px] md:font-[400] md:leading-[21px] lg:w-[89px] lg:h-[24px] lg:top-[40px] lg:left-[200px] lg:font-[400] lg:text-[16px] xl:left-[175px]">
            021-91008590
          </p>

          <Image
            src="/images/Group 137.png"
            alt="user"
            width={40}
            height={60}
            className=" w-[30px] h-[30px] mt-[18px] mr-[101.19px] mb-[16px] sm:mt-[22px] md:w-[26px] md:h-[26px] md:top-[34px] md:left-[124px] lg:w-[26px] lg:h-[26px] lg:top-[38px] lg:left-[140px] xl:left-[132px]"
          />
          <p className=" text-[#000000] font-iranSans w-[77px] font-[500] text-[14px] leading-[21.91px] mt-[22px] mr-[7.5px] mb-[20px] sm:mt-[26px] md:w-[77px] md:text-[14px] md:h-[22px] md:top-[36px] md:left-[40px] lg:w-[77px] lg:h-[22px] lg:top-[40px] lg:left-[50px] lg:font-[500] lg:text-[14px] lg:leading-[21.91px] xl:left-[42px]">
            علی اسماعیلی
          </p>
          <Image
            src="/images/Frame (1).png"
            alt="frame"
            width={40}
            height={60}
            className=" w-[24px] mt-[21px] mr-[10px] mb-[19px] sm:mt-[24px] md:w-[24px] md:h-[24px] md:top-[35px] md:left-[10px] lg:w-[24px] lg:h-[24px] lg:top-[39px] lg:left-[20px] xl:left-[20px]"
          />
    
    </nav>
  );
}

export default Header;
