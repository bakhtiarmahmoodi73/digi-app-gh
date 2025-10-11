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
        className="absolute text-[#FFFFFF] w-[110px] h-[53px] left-[246px] top-[56px]  sm:w-[140px]  sm:h-[53px] sm:left-[480px] sm:top-[56px]  md:w-[132px] md:h-[64px] md:left-[600px] md:top-[30px] lg:left-[885px] xl:h-[64px] xl:left-[1135px] xl:top-[42px]"
      />
      <p className="absolute font-iranSans text-[#FFFFFF] font-[400] leading-[24px] text-justify text-[12px]  w-[335px] h-[96px] top-[123px] left-[22px] sm:w-[470px] sm:left-[150px] sm:text-[13px]  md:w-[200px] md:h-[120px] md:top-[100px] md:text-[12px] md:left-[540px] lg:left-[665px] lg:w-[352px] lg:text-[16px] lg:top-[125px] xl:w-[352px] xl:h-[150px] xl:top-[120px] xl:left-[915px] xl:text-[16px] xl:leading-[30px] justify-center">
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
        className="absolute h-[1px] w-[335px] border-[1px] border-none left-[22px] top-[243px] sm:w-[480px] sm:left-[140px] bg-[#374566]  text-[#374566] md:hidden"
      />
    
       <p className="absolute font-iranSans text-[#FFFFFF] font-[900] leading-[21.91px] text-right text-[14px] w-[93px] h-[22px] top-[265px] left-[261px] sm:left-[525px] md:text-[16px] md:w-[107px] md:h-[25px] md:top-[49px] md:left-[360px] md:leading-[25.04px] lg:text-[20px] lg:w-[133px] lg:left-[470px]  xl:text-[20px] xl:w-[133px] xl:h-[31px] xl:top-[53px] xl:left-[700px] xl:leading-[31.3px] ">
         لینک های مرتبط
       </p>
       <ul>
         <li className="absolute font-iranSans text-[#ffffff] left-[280px] top-[311px]  font-[400]  text-right sm:left-[542px] md:top-[105px] md:left-[400px] lg:left-[520px] lg:w-[85px]  xl:h-[25px] xl:top-[109px]   xl:leading-[25.04px]absolute   w-[76px] h-[19px]    text-[12px] leading-[18.78px]  xl:w-[101px] xl:left-[737px]  lg:text-[16px] lg:leading-[25.04px]">
           صفحه اصلی
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[80px] h-[19px] top-[345px] left-[275px] font-[400] text-[12px] sm:left-[540px] leading-[18.78px] text-right md:top-[149px] md:left-[400px] lg:w-[100px] lg:text-[16px] lg:left-[505px] xl:w-[120px] xl:h-[25px] xl:top-[153px] xl:left-[720px] xl:text-[16px] xl:leading-[25.04px]   ">
           
           قیمت رمز ارزها
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[73px] h-[19px] top-[379px] left-[281px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[548px] md:top-[193px] md:left-[405px] lg:w-[100px] lg:text-[16px] lg:left-[505px] xl:w-[97px] xl:h-[25px] xl:top-[197px] xl:left-[742px] xl:text-[16px] xl:leading-[25.04px] ">
           مقالات و وبلاگ
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[78px] h-[19px] top-[413px] left-[277px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[540px] md:top-[237px] md:left-[400px] lg:w-[100px] lg:text-[16px] lg:left-[505px] xl:w-[76px] xl:h-[25px] xl:top-[241px] xl:left-[764px] xl:text-[16px] xl:leading-[25.04px]">
           در باره ما
         </li>
       </ul>
       <ul>
         <li className="absolute font-iranSans text-[#ffffff] w-[85px] h-[19px] top-[311px] left-[147px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[400px] md:top-[105px] md:left-[255px] lg:w-[100px] lg:text-[16px] lg:top-[108px] lg:left-[340px] xl:w-[110px] xl:h-[25px] xl:top-[109px] xl:left-[530px] xl:text-[16px] xl:leading-[25.04px]">
           {" "}
           سوالات متداول
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[73px] h-[19px] top-[345px] left-[160px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[410px] md:top-[149px] md:left-[267px] lg:w-[100px] lg:text-[16px] lg:top-[150px] lg:left-[340px] xl:w-[110px] xl:h-[25px] xl:top-[153px] xl:left-[530px] xl:text-[16px] xl:leading-[25.04px]">
           {" "}
           شرایط و قوانین{" "}
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[86px] h-[19px] top-[379px] left-[147px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[400px] md:top-[193px] md:left-[254px] lg:w-[120px] lg:text-[16px] lg:top-[192px] lg:left-[325px] xl:w-[115px] xl:h-[25px] xl:top-[197px] xl:left-[526px] xl:text-[16px] xl:leading-[25.04px]">
           {" "}
           فرصت های شغلی{" "}
         </li>
         <li className="absolute font-iranSans text-[#ffffff] w-[31px] h-[19px] top-[413px] left-[202px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[455px] md:top-[237px] md:left-[309px] lg:w-[100px] lg:text-[16px] lg:top-[237px] lg:left-[340px] xl:w-[41px] xl:h-[25px] xl:top-[241px] xl:left-[602px] xl:text-[16px] xl:leading-[25.04px]">
          انجمن
         </li>
       </ul>

      <p className="absolute font-iranSans text-[#FFFFFF] font-[900] leading-[21.91px] text-right text-[14px] w-[47px] h-[22px] top-[265px] left-[63px] sm:left-[220px] md:top-[49px] md:left-[122px] md:leading-[25.04px] md:w-[54px] lg:text-[20px] lg:w-[133px] lg:left-[155px] xl:text-[20px] xl:w-[67px] xl:h-[31px] xl:top-[53px] xl:left-[380px] xl:leading-[31.3px] ">
        تبادل ارز{" "}
      </p>
      <ul>
        <li className="absolute font-iranSans text-[#ffffff] w-[76px] h-[19px] top-[311px] left-[34px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[194px] md:top-[105px] md:left-[100px] lg:w-[100px] lg:text-[16px] lg:top-[110px] lg:left-[188px] xl:w-[101px] xl:h-[25px] xl:top-[109px] xl:left-[350px]  xl:text-[16px] xl:leading-[25.04px]">
          {" "}
          خرید بیت کوین{" "}
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[57px] h-[19px] top-[345px] left-[53px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[212px] md:top-[149px] md:left-[119px] lg:w-[100px] lg:text-[16px] lg:top-[150px] lg:left-[188px] xl:w-[75px] xl:h-[25px] xl:top-[153px] xl:left-[375px] xl:text-[16px] xl:leading-[25.04px]">
          {" "}
          خرید اتریوم
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[50px] h-[19px] top-[379px] left-[60px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[220px] md:top-[193px] md:left-[126px] lg:w-[100px] lg:text-[16px] lg:top-[192px] lg:left-[188px] xl:w-[66px] xl:h-[25px] xl:top-[197px] xl:left-[385px] xl:text-[16px] xl:leading-[25.04px]">
          {" "}
          خرید ریپل{" "}
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[56px] h-[19px] top-[413px] left-[54px] font-[400] text-[12px] leading-[18.78px] text-right sm:left-[215px] md:top-[237px] md:left-[120px] lg:w-[100px] lg:text-[16px] lg:top-[238px] lg:left-[188px] xl:w-[74px] xl:h-[25px] xl:top-[241px] xl:left-[380px] xl:text-[16px] xl:leading-[25.04px]">
          خرید سولانا
        </li>
      </ul>
      <ul className="hidden md:hidden lg:block">
        <li className="absolute font-iranSans text-[#ffffff]  font-[400] lg:w-[150px] lg:text-[16px] lg:top-[110px] lg:left-[0px] xl:w-[135px] xl:h-[25px] xl:top-[109px] xl:left-[150px] xl:text-[16px] xl:leading-[25.04px]">
          {" "}
          خرید یواس دی کوین{" "}
        </li>
        <li className="absolute font-iranSans text-[#ffffff]  font-[400] lg:w-[150px] lg:text-[16px] lg:top-[150px] lg:left-[0px] xl:w-[213px] xl:h-[25px] xl:top-[153px] xl:left-[70px] xl:text-[16px] xl:leading-[25.04px]">
          {" "}
          خرید چین لینک
        </li>
        <li className="absolute font-iranSans text-[#ffffff]  font-[400] lg:w-[150px] lg:text-[16px] lg:top-[192px] lg:left-[0px] xl:w-[101px] xl:h-[25px] xl:top-[197px] xl:left-[180px] xl:text-[16px] xl:leading-[25.04px]">
          {" "}
          خرید دوج کوین{" "}
        </li>
        <li className="absolute font-iranSans text-[#ffffff]  font-[400] lg:w-[150px] lg:text-[16px] lg:top-[235px] lg:left-[0px]  xl:w-[55px] xl:h-[25px] xl:top-[241px] xl:left-[225px] xl:text-[16px] xl:leading-[25.04px]">
          خرید تتر
        </li>
      </ul>

      <Image
        src="/images/Line 35 (2).png"
        alt="line"
        width={1}
        height={1}
        className="absolute justify-center w-[335px] border-[1px] h-[1px] border-none left-[22px] top-[464px] sm:w-[480px] sm:left-[150px] bg-[#374566]  text-[#374566] md:border-none md:border-[1px] md:w-[695px] md:top-[289.5px] md:left-[5px] lg:left-[20px] lg:w-[1000px] xl:w-[1130px] xl:top-[306px] xl:left-[135px] xl:p-0 lg:h-[1px]"
      />

      <ul>
        <li>
          <Image
            src="/images/Group 104.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute w-[31.91px] h-[31.91px] left-[272.09px] top-[476px] text-[#F8F9FA] border-none border-[1px] sm:left-[310px]   md:top-[308px] md:left-[249.09px] xl:w-[50px] xl:h-[50px] xl:top-[328px] xl:left-[462px] lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[340px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 103.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[222.32px] top-[476px] text-[#F8F9FA] border-none border-[1px] sm:left-[270px] md:top-[308px] md:left-[199.32px] xl:w-[50px] xl:h-[50px] xl:top-[328px] xl:left-[384px]   lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[260px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 102.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[172.55px] top-[476px] text-[#F8F9FA] border-none border-[1px] sm:left-[230px] md:top-[308px] md:left-[149.55px] xl:w-[50px] xl:h-[50px] xl:top-[328px] xl:left-[306px]   lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[180px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 101.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[122.77px] top-[476px] text-[#F8F9FA] border-none border-[1px] sm:left-[190px] md:top-[308px] md:left-[99.77px]  xl:w-[50px] xl:h-[50px] xl:top-[328px] xl:left-[228px]  lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[100px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 100.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[73px] top-[476px] text-[#F8F9FA] border-none border-[1px] sm:left-[150px] md:top-[308px] md:left-[50px] xl:w-[50px] xl:h-[50px] xl:top-[328px] xl:left-[150px]      lg:w-[50px] lg:h-[50px] lg:top-[328px] lg:left-[20px]"
          />
        </li>
      </ul>

      <Image
        src="/images/Line 35 (2).png"
        alt="line"
        width={0}
        height={0}
        className="absolute h-[1px] w-[335px] border-[1px] border-none left-[22px] top-[523px] bg-[#374566] sm:hidden  text-[#374566] md:hidden"
      />

      <p className="absolute font-iranSans text-[#FFFFFF] font-[400] leading-[18.78px] text-right text-[12px] w-[298px] h-[19px] top-[535px] left-[40px] sm:top-[485px] sm:text-[10px] sm:left-[330px] md:top-[314px] md:left-[445px] lg:w-[414px] lg:text-[16px] lg:left-[600px] lg:top-[340px]   xl:w-[414px] xl:h-[31px] xl:top-[337px] xl:left-[850px] xl:text-[16px] xl:leading-[25.04px]">
        تمامی حقوق این سرویس متعلق به مجموعه{" "}
        <span className="font-iranSans font-[900] text-[14px] leading-[18.78px] whitespace-pre lg:text-[16px] lg:leading-[25.04px]">
          ری پیمنت
        </span>{" "}
        است
      </p>
    </footer>
  );
}

export default Footer;
