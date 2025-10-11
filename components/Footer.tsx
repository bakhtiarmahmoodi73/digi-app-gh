"use client";

import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="relative mx-auto overflow-x-hidden  bg-[#1B2A4E] sm:w-full     md:h-[357px]  lg:h-[402px] h-[579px] w-full ">
      <Image
        src="/images/logo_light.d1640c2f 1.png"
        alt="logo"
        width={200}
        height={200}
        className="absolute text-[#FFFFFF] w-[110px] h-[53px] left-[246px] top-[56px]  sm:w-[110px]  sm:h-[53px] sm:left-[40px] sm:top-[56px]  md:w-[132px] md:h-[64px] md:left-[652px] md:top-[52px] lg:h-[64px] lg:left-[1158px] lg:top-[42px]"
      />
      <p className="absolute font-iranSans text-[#FFFFFF] font-[400] leading-[24px] text-justify text-[12px]  w-[335px] h-[96px] top-[123px] left-[22px] md:w-[283px] md:h-[120px] md:top-[139px] md:left-[501px] lg:w-[352px] lg:h-[150px] lg:top-[120px] lg:left-[938px] lg:text-[16px] lg:leading-[30px] justify-center">
        راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های پرداخت
        بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری MGY
        INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و
        فعالیت رسمی آغاز نمود.
      </p>
      <Image
        src="/images/Line 35 (2).png"
        alt="line"
        width={0}
        height={0}
        className="absolute h-[1px] w-[335px] border-[1px] border-none left-[22px] top-[243px] bg-[#374566]  text-[#374566] md:hidden"
      />
    
       <p className="absolute font-iranSans text-[#FFFFFF] font-[900] leading-[21.91px] text-right text-[14px] w-[93px] h-[22px] top-[265px] left-[261px] md:text-[16px] md:w-[107px] md:h-[25px] md:top-[49px] md:left-[360px] md:leading-[25.04px] lg:text-[20px] lg:w-[133px] lg:h-[31px] lg:top-[53px] lg:left-[780px] lg:leading-[31.3px] ">
         لینک های مرتبط
       </p>
       <ul>
         <li className="absolute font-iranSans text-[#ffffff] left-[280px] top-[311px]  font-[400]  text-right md:top-[105px] md:left-[400px]   lg:h-[25px] lg:top-[109px]   lg:leading-[25.04px]absolute   w-[76px] h-[19px]    text-[12px] leading-[18.78px]  lg:w-[101px] laptop:left-[810px]  lg:text-[16px] lg:leading-[25.04px]">
           صفحه اصلی
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[80px] h-[19px] top-[345px] left-[275px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[149px] md:left-[400px] lg:w-[120px] lg:h-[25px] lg:top-[153px] lg:left-[790px] lg:text-[16px] lg:leading-[25.04px]   ">
           {" "}
           قیمت رمز ارزها
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[73px] h-[19px] top-[379px] left-[281px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[193px] md:left-[405px] lg:w-[97px] lg:h-[25px] lg:top-[197px] lg:left-[810px] lg:text-[16px] lg:leading-[25.04px] ">
           مقالات و وبلاگ
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[78px] h-[19px] top-[413px] left-[277px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[237px] md:left-[400px] lg:w-[76px] lg:h-[25px] lg:top-[241px] lg:left-[830px] lg:text-[16px] lg:leading-[25.04px]">
           در باره ما
         </li>
       </ul>
       <ul>
         <li className="absolute font-iranSans text-[#ffffff] w-[85px] h-[19px] top-[311px] left-[147px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[105px] md:left-[255px] lg:w-[110px] lg:h-[25px] lg:top-[109px] lg:left-[610px] lg:text-[16px] lg:leading-[25.04px]">
           {" "}
           سوالات متداول
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[73px] h-[19px] top-[345px] left-[160px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[149px] md:left-[267px] lg:w-[110px] lg:h-[25px] lg:top-[153px] lg:left-[607px] lg:text-[16px] lg:leading-[25.04px]">
           {" "}
           شرایط و قوانین{" "}
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[86px] h-[19px] top-[379px] left-[147px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[193px] md:left-[254px] lg:w-[115px] lg:h-[25px] lg:top-[197px] lg:left-[605px] lg:text-[16px] lg:leading-[25.04px]">
           {" "}
           فرصت های شغلی{" "}
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[31px] h-[19px] top-[413px] left-[202px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[237px] md:left-[309px] lg:w-[41px] lg:h-[25px] lg:top-[241px] lg:left-[680px] lg:text-[16px] lg:leading-[25.04px]">
          انجمن
         </li>
       </ul>

      <p className="absolute font-iranSans text-[#FFFFFF] font-[900] leading-[21.91px] text-right text-[14px] w-[47px] h-[22px] top-[265px] left-[63px] md:top-[49px] md:left-[122px] md:leading-[25.04px] md:w-[54px] lg:text-[20px] lg:w-[67px] lg:h-[31px] lg:top-[53px] lg:left-[443px] lg:leading-[31.3px] ">
        تبادل ارز{" "}
      </p>
      <ul>
        <li className="absolute font-iranSans text-[#ffffff] w-[76px] h-[19px] top-[311px] left-[34px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[105px] md:left-[100px] lg:w-[101px] lg:h-[25px] lg:top-[109px] lg:left-[409px] lg:text-[16px] lg:leading-[25.04px]">
          {" "}
          خرید بیت کوین{" "}
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[57px] h-[19px] top-[345px] left-[53px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[149px] md:left-[119px] lg:w-[75px] lg:h-[25px] lg:top-[153px] lg:left-[435px] lg:text-[16px] lg:leading-[25.04px]">
          {" "}
          خرید اتریوم
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[50px] h-[19px] top-[379px] left-[60px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[193px] md:left-[126px] lg:w-[66px] lg:h-[25px] lg:top-[197px] lg:left-[444px] lg:text-[16px] lg:leading-[25.04px]">
          {" "}
          خرید ریپل{" "}
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[56px] h-[19px] top-[413px] left-[54px] font-[400] text-[12px] leading-[18.78px] text-right md:top-[237px] md:left-[120px] lg:w-[74px] lg:h-[25px] lg:top-[241px] lg:left-[436px] lg:text-[16px] lg:leading-[25.04px]">
          خرید سولانا
        </li>
      </ul>
      <ul className="hidden md:hidden lg:block">
        <li className="absolute font-iranSans text-[#ffffff]  font-[400] lg:w-[135px] lg:h-[25px] lg:top-[109px] lg:left-[180px] lg:text-[16px] lg:leading-[25.04px]">
          {" "}
          خرید یواس دی کوین{" "}
        </li>
        <li className="absolute font-iranSans text-[#ffffff]  font-[400] lg:w-[213px] lg:h-[25px] lg:top-[153px] lg:left-[102px] lg:text-[16px] lg:leading-[25.04px]">
          {" "}
          خرید چین لینک
        </li>
        <li className="absolute font-iranSans text-[#ffffff]  font-[400]  lg:w-[101px] lg:h-[25px] lg:top-[197px] lg:left-[214px] lg:text-[16px] lg:leading-[25.04px]">
          {" "}
          خرید دوج کوین{" "}
        </li>
        <li className="absolute font-iranSans text-[#ffffff]  font-[400]  lg:w-[55px] lg:h-[25px] lg:top-[241px] lg:left-[260px] lg:text-[16px] lg:leading-[25.04px]">
          خرید تتر
        </li>
      </ul>

      <Image
        src="/images/Line 35 (2).png"
        alt="line"
        width={1}
        height={1}
        className="absolute justify-center w-[335px] border-[1px] h-[1px] border-none left-[22px] top-[464px] bg-[#374566]  text-[#374566] md:border-none md:border-[1px] md:w-[729.5px] md:top-[289.5px] md:left-[53.5px] laptop:w-[1138px] laptop:top-[306px] laptop:left-[150px] laptop:p-0 laptop:h-[1px]"
      />

      <ul>
        <li>
          <Image
            src="/images/Group 104.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute w-[31.91px] h-[31.91px] left-[272.09px] top-[476px] text-[#F8F9FA] border-none border-[1px] md:top-[308px] md:left-[249.09px] lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[462px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 103.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[222.32px] top-[476px] text-[#F8F9FA] border-none border-[1px] md:top-[308px] md:left-[199.32px] lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[384px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 102.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[172.55px] top-[476px] text-[#F8F9FA] border-none border-[1px] md:top-[308px] md:left-[149.55px] lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[306px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 101.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[122.77px] top-[476px] text-[#F8F9FA] border-none border-[1px] md:top-[308px] md:left-[99.77px]  lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[228px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 100.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[73px] top-[476px] text-[#F8F9FA] border-none border-[1px] md:top-[308px] md:left-[50px] lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[150px]"
          />
        </li>
      </ul>

      <Image
        src="/images/Line 35 (2).png"
        alt="line"
        width={0}
        height={0}
        className="absolute h-[1px] w-[335px] border-[1px] border-none left-[22px] top-[523px] bg-[#374566]  text-[#374566] md:hidden"
      />

      <p className="absolute font-iranSans text-[#FFFFFF] font-[400] leading-[18.78px] text-right text-[12px] w-[298px] h-[19px] top-[535px] left-[40px] md:top-[314px] md:left-[485px] lg:w-[414px] lg:h-[31px] lg:top-[337px] lg:left-[875px] lg:text-[16px] lg:leading-[25.04px]">
        تمامی حقوق این سرویس متعلق به مجموعه{" "}
        <span className="font-iranSans font-[900] text-[12px] leading-[18.78px] whitespace-pre lg:text-[16px] lg:leading-[25.04px]">
          ری پیمنت
        </span>{" "}
        است
      </p>
    </footer>
  );
}

export default Footer;
