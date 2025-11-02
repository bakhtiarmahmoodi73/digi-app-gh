"use client";

import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" mx-auto overflow-x-hidden w-full h-[579px]  bg-[#1B2A4E] md:h-[357px] xl:h-[402px] xl:max-w-[1440px] ">
    
      <div className="flex flex-col mx-auto md:flex-row md:gap-[34px] md:mx-0 md:mr-[18px] 2xl:gap-[38px]  xl:mx-[150px]">

        <div className="flex flex-col mt-[56px]  mx-[18px] gap-[16px] md:gap-[23px]  md:mx-0 md:mt-[52px] xl:gap-[14px] xl:mt-[44px]  xl:w-[352px] xl:h-[228px] ">
        <Image
          src="/images/logo_light.d1640c2f 1.png"
          alt="logo"
          width={200}
          height={200}
          className=" text-[#FFFFFF] w-[110px] h-[53px] md:w-[132px] xl:h-[64px] "
        />
        <p className=" font-iranSans text-[#FFFFFF] font-[400] leading-[24px] text-justify text-[12px]    md:w-[283px] md:h-[120px]  xl:w-[352px] xl:h-[150px]  xl:text-[16px] xl:leading-[30px] justify-center">
          راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های
          پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری
          MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و
          فعالیت رسمی آغاز نمود.
        </p>
        </div>
        <div className="mx-[18px] mt-[22px] md:hidden">
        <Image
          src="/images/Line 35 (2).png"
          alt="line"
          width={0}
          height={0}
          className=" h-[1px] w-full border-[1px] border-none   bg-[#374566] text-[#374566] md:hidden"
        />
        </div>



        <div className="flex mx-[18px] w-full mt-[22px]  gap-[48px] md:gap-[93px] md:mx-0 md:mt-[49px] xl:gap-[48px] 2xl:gap-[93px]   ">

        <div className="flex flex-col w-full gap-[24px]  ">
          <div>
        <p className=" font-iranSans text-[#FFFFFF] font-[900]  text-[14px]   md:text-[16px]   xl:text-[20px]  xl:leading-[31.3px]">
          لینک های مرتبط
        </p>
        </div>
        <div className="flex gap-[63px] md:gap-[89px] xl:gap-[63px] 2xl:gap-[89px]">
        <div className="flex ">
        <ul className="flex flex-col gap-[15px] md:gap-[25px] xl:gap-[22px]">
          <li className=" font-iranSans text-[#ffffff]  font-[400]    w-[76px] h-[19px] text-[12px] xl:text-[16px] xl:w-[120px] xl:h-[25px] ">
            صفحه اصلی
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[80px]   font-[400] text-[12px]   xl:w-[120px] xl:h-[25px] xl:top-[153px] xl:left-[620px] xl:text-[16px] xl:leading-[25.04px]">
            قیمت رمز ارزها
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[73px]   font-[400] text-[12px]   xl:w-[97px] xl:h-[25px] xl:top-[197px] xl:left-[642px] xl:text-[16px] xl:leading-[25.04px]">
            مقالات و وبلاگ
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[78px]   font-[400] text-[12px] xl:w-[76px] xl:h-[25px] xl:top-[241px] xl:left-[664px] xl:text-[16px] xl:leading-[25.04px]">
            در باره ما
          </li>
        </ul>
        </div>
        <div className="flex">
        <ul className="flex flex-col gap-[15px] md:gap-[25px] xl:gap-[22px]">
          <li className=" font-iranSans text-[#ffffff] w-[85px]  font-[400] text-[12px]  xl:w-[110px] xl:h-[25px] xl:top-[109px] xl:left-[430px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            سوالات متداول
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[73px]  font-[400] text-[12px]   xl:w-[110px] xl:h-[25px] xl:top-[153px] xl:left-[430px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            شرایط و قوانین{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[86px]  font-[400] text-[12px]  xl:w-[115px] xl:h-[25px] xl:top-[197px] xl:left-[426px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            فرصت های شغلی{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[31px] font-[400] text-[12px]  xl:w-[41px] xl:h-[25px] xl:top-[241px] xl:left-[502px] xl:text-[16px] xl:leading-[25.04px]">
            انجمن
          </li>
        </ul>
        </div>
        </div>
        </div>

         <div className="flex  w-full flex-col gap-[24px]">
       
       <div >
        <p className=" font-iranSans text-[#FFFFFF] font-[900]   text-[14px] w-[47px] md:text-[16px] md:w-[54px]  xl:text-[20px] xl:w-[67px] xl:h-[31px] xl:top-[53px] xl:left-[280px] xl:leading-[31.3px]">
          تبادل ارز{" "}
        </p>
        </div>
        <div className="flex   md:gap-[89px] xl:gap-[63px] 2xl:gap-[89px]">
        <div className="flex ">
        <ul className="flex  flex-col gap-[15px] md:gap-[25px] xl:gap-[22px]">
          <li className=" font-iranSans text-[#ffffff] w-[76px] font-[400] text-[12px]    xl:w-[101px] xl:h-[25px] xl:top-[109px] xl:left-[250px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید بیت کوین{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[57px]  font-[400] text-[12px]  xl:w-[75px] xl:h-[25px] xl:top-[153px] xl:left-[275px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید اتریوم
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[50px]  font-[400] text-[12px]   xl:w-[66px] xl:h-[25px] xl:top-[197px] xl:left-[285px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید ریپل{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[56px]  font-[400] text-[12px]     xl:w-[74px] xl:h-[25px] xl:top-[241px] xl:left-[280px] xl:text-[16px] xl:leading-[25.04px]">
            خرید سولانا
          </li>
        </ul>
        </div>

        <div className=" hidden xl:flex">

        
        <ul className="hidden xl:flex xl:flex-col xl:gap-[22px]" >
          <li className=" font-iranSans text-[#ffffff] font-[400] lg:w-[150px] lg:text-[16px] lg:top-[110px] lg:left-[0px] xl:w-[135px] xl:h-[25px] xl:top-[109px] xl:left-[50px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید یواس دی کوین{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] font-[400] lg:w-[150px] lg:text-[16px] lg:top-[150px] lg:left-[0px] xl:w-[213px] xl:h-[25px] xl:top-[153px] xl:left-[-30px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید چین لینک
          </li>
          <li className=" font-iranSans text-[#ffffff] font-[400] lg:w-[150px] lg:text-[16px] lg:top-[192px] lg:left-[0px] xl:w-[101px] xl:h-[25px] xl:top-[197px] xl:left-[80px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید دوج کوین{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] font-[400] lg:w-[150px] lg:text-[16px] lg:top-[235px] lg:left-[0px] xl:w-[55px] xl:h-[25px] xl:top-[241px] xl:left-[125px] xl:text-[16px] xl:leading-[25.04px]">
            خرید تتر
          </li>
        </ul>
        </div>
        </div>
        </div>
       </div>

        <div className="mx-[18px] md:flex-col mt-[32px] md:hidden ">
        <Image
          src="/images/Line 35 (2).png"
          alt="line"
          width={1}
          height={1}
          className=" justify-center w-full border-[1px] h-[1px] border-none  bg-[#374566] text-[#374566] md:hidden "
        />
       </div>
       




        

       <div className="flex  mx-[18px] mt-[12px] md:absolute md:mt-[308px] md:mr-[500px] md:block lg:mr-[575px] xl:mt-[328px] xl:mr-[660px] 2xl:mr-[745px] ">
        <ul className="flex  w-full  mx-[52px] justify-between md:mx-[25px] lg:mx-[30px] xl:justify-normal">
          <li className="">
            <Image
              src="/images/Group 104.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px]  text-[#F8F9FA] border-none border-[1px] xl:w-[50px] xl:h-[50px] xl:mx-[12.5px] "
            />
          </li>
          <li>
            <Image
              src="/images/Group 103.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px]  text-[#F8F9FA] border-none border-[1px] xl:w-[50px] xl:h-[50px] xl:mx-[12.5px] "
            />
          </li>
          <li>
            <Image
              src="/images/Group 102.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px]  text-[#F8F9FA] border-none border-[1px] xl:w-[50px] xl:h-[50px] xl:mx-[12.5px]"
            />
          </li>
          <li>
            <Image
              src="/images/Group 101.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px]  text-[#F8F9FA] border-none border-[1px] xl:w-[50px] xl:h-[50px] xl:mx-[12.5px]"
            />
          </li>
          <li>
            <Image
              src="/images/Group 100.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px] text-[#F8F9FA] border-none border-[1px] xl:w-[50px] xl:h-[50px] xl:mx-[12.5px]"
            />
          </li>
        </ul>
        </div>


        <div className="mx-[18px] mt-[15px]  md:absolute md:mt-[289.5px] md:mr-[0px] md:w-[735px] lg:w-[820px]  xl:w-[1050px] 2xl:w-[1138px] xl:mt-[306px] xl:mr-[0px]  ">
        <Image
          src="/images/Line 35 (2).png"
          alt="line"
          width={10}
          height={10}
          className=" h-[1px] w-full border-[1px] border-none md:w-full bg-[#374566]  text-[#374566]  "
        />
       </div>

       <div className="mt-[12px] mx-[39px] md:absolute md:mt-[314px] md:mr-[0px] xl:mt-[337px] ">
        <p className=" font-iranSans text-[#FFFFFF] font-[400] leading-[18.78px]  text-[12px] w-full xl:text-[16px]">
          تمامی حقوق این سرویس متعلق به مجموعه{" "}
          <span className="font-iranSans  text-[14px] leading-[18.78px] font-[700]  lg:text-[20px] lg:leading-[25.04px]">
            ری پیمنت
          </span>{" "}
          است
        </p>
        </div>



      </div>




    </footer>
  );
}

export default Footer;
