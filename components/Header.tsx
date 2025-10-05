
"use client";
import React from "react";
import Image from "next/image";

function Header() {
  return (
    <nav className=" bg-navbar mobile:w-[375px] mobile:h-[64px] tablet:w-[834px] tablet:h-[92px] laptop:w-[1440px] laptop:h-[104px]  ">
      <Image
        src="/images/Group 405 (1).png"
        alt="log"
        width={20}
        height={20}
        className="absolute mobile:w-[24px] mobile:h-[24px] mobile:top-[20px] mobile:left-[331px] mobile:border-[1.5px] tablet:hidden laptop:hidden"
      />
      <Image
        src="/images/logo_dark.8e5c7ade 2.svg"
        alt="logo"
        width={100}
        height={200}
        className="absolute mobile:w-[57.74px] mobile:h-[27.98px] mobile:top-[18px] mobile:left-[263px] tablet:w-[109px] tablet:h-[53px] tablet:top-[20px] tablet:left-[705px] laptop:w-[109px] laptop:h-[53px] laptop:top-[25px] laptop:left-[1181px] "
      />
      <ul className="mobile:hidden tablet:block laptop:block">
        <li className=" absolute text-[#000000] tablet:w-[69px] tablet:h-[22px]  tablet:left-[609px] tablet:top-[35px] font-[400] tablet:text-[14px] tablet:leading-[21.91px] laptop:w-[78px]   laptop:h-[25px] laptop:top-[39px] laptop:left-[1056px] laptop:font-[400] laptop:text-[16px] laptop:leading-[25.04px]    ">
          صفحه اصلی
        </li>
        <li className=" absolute text-[#000000] tablet:w-[79px] tablet:h-[22px]  tablet:left-[511px] tablet:top-[35px] font-[400] tablet:text-[14px] tablet:leading-[21.91px] laptop:w-[90px]   laptop:h-[25px] laptop:top-[39px] laptop:left-[919px] laptop:font-[400] laptop:text-[16px] laptop:leading-[25.04px]    ">
          قیمت رمزارزها
        </li>
        <li className=" absolute text-[#000000] tablet:w-[37px] tablet:h-[22px]  tablet:left-[455px] tablet:top-[35px] font-[400] tablet:text-[14px] tablet:leading-[21.91px] laptop:w-[43px]   laptop:h-[25px] laptop:top-[39px] laptop:left-[829px] laptop:font-[400] laptop:text-[16px] laptop:leading-[25.04px]  ">
          مقالات
        </li>
        <li className=" absolute text-[#000000] tablet:w-[61px] tablet:h-[22px]  tablet:left-[375px] tablet:top-[35px] font-[400] tablet:text-[14px] tablet:leading-[21.91px] laptop:w-[69px] laptop:h-[25px] laptop:top-[39px] laptop:left-[713px] laptop:font-[400] laptop:text-[16px] laptop:leading-[25.04px]   ">
          تماس با ما
        </li>
        <li className="absolute font-iranSans text-[#000000] tablet:hidden laptop:block laptop:w-[28px] laptop:h-[25px] laptop:top-[39px] laptop:left-[638px] laptop:font-[400] laptop:text-[16px] laptop:leading-[25.04px] ">
          سایر
        </li>
      </ul>

      <Image
        src="/images/Frame.png"
        alt="frame"
        width={40}
        height={60}
        className="absolute mobile:hidden tablet:block tablet:w-[16px] tablet:h-[16px] tablet:top-[40px] tablet:left-[248px]  "
      />
      <p className="absolute font-iranSansnumber texxt-[#000000] mobile:hidden tablet:block tablet:w-[92px] tablet:h-[21px] tablet:top-[37px] tablet:left-[150px] tablet:text-[14px] tablet:font-[400] tablet:leading-[21px]  ">
        021-91008590
      </p>

      <Image
        src="/images/Group 137.png"
        alt="user"
        width={40}
        height={60}
        className="absolute mobile:w-[30px] mobile:h-[30px] mobile:top-[18px] mobile:left-[132px] tablet:w-[26px] tablet:h-[26px] tablet:top-[34px] tablet:left-[124px] "
      />
      <p className="absolute text-[#000000] font-iranSans mobile:w-[77px] mobile:h-[22px] mobile:top-[22px] mobile:left-[46px] mobile:font-[500] mobile:text-[14px] mobile:leading-[21.91px] tablet:w-[77px] tablet:h-[22px] tablet:top-[36px] tablet:left-[40px] tablet:font-[500] tablet:text-[14px] tablet:leading-[21.91px]   ">
        علی اسماعیلی
      </p>
      <Image
        src="/images/Frame (1).png"
        alt="frame"
        width={40}
        height={60}
        className="absolute mobile:w-[24px] mobile:h-[24px] mobile:top-[21px] mobile:left-[20px]  tablet:w-[24px] tablet:h-[24px] tablet:top-[35px] tablet:left-[16px]"
      />
    </nav>
  );
}

export default  Header;






