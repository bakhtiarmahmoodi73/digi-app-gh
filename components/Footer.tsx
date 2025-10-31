"use client";

import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className=" mx-auto overflow-x-hidden w-full  bg-[#1B2A4E]  md:h-[357px]   ">
    
      <div className="flex flex-col mx-auto">

        <div className="flex flex-col mt-[56px] mx-[18px]  gap-[16px]">
        <Image
          src="/images/logo_light.d1640c2f 1.png"
          alt="logo"
          width={200}
          height={200}
          className=" text-[#FFFFFF] w-[110px] h-[53px]  md:w-[132px] md:h-[64px] md:left-[600px] md:top-[30px] lg:left-[885px] xl:h-[64px] xl:left-[1035px] xl:top-[42px]"
        />
        <p className=" font-iranSans text-[#FFFFFF] font-[400] leading-[24px] text-justify text-[12px]    md:w-[200px] md:h-[120px] md:top-[100px] md:text-[12px] md:left-[540px] lg:left-[665px] lg:w-[352px] lg:text-[16px] lg:top-[125px] xl:w-[352px] xl:h-[150px] xl:top-[120px] xl:left-[815px] xl:text-[16px] xl:leading-[30px] justify-center">
          راهکارهای پرداخت ری در سال 2009 فعالیت خود را در زمینه سیستم های
          پرداخت بین المللی با وبسایت wallet.ir آغاز کرد. ری پرداخت با نام تجاری
          MGY INVESTMENT LTD با شماره ثبت ۷۳۶۵۰۶۳ در کشور انگلستان به ثبت رسید و
          فعالیت رسمی آغاز نمود.
        </p>
        </div>
        <div className="mx-[18px] mt-[22px]">
        <Image
          src="/images/Line 35 (2).png"
          alt="line"
          width={0}
          height={0}
          className=" h-[1px] w-full border-[1px] border-none   bg-[#374566] text-[#374566] md:hidden"
        />
        </div>



        <div className="flex mx-[18px] w-full mt-[22px]  gap-[48px]">

        <div className="flex flex-col w-full gap-[24px]">
          <div>
        <p className=" font-iranSans text-[#FFFFFF] font-[900]  text-[14px]   md:text-[16px] md:w-[107px] md:h-[25px] md:top-[49px] md:left-[360px] md:leading-[25.04px] lg:text-[20px] lg:w-[133px] lg:left-[470px] xl:text-[20px] xl:w-[133px] xl:h-[31px] xl:top-[53px] xl:left-[600px] xl:leading-[31.3px]">
          لینک های مرتبط
        </p>
        </div>
        <div className="flex gap-[63px]">
        <div className="flex ">
        <ul className="flex flex-col gap-[15px]">
          <li className=" font-iranSans text-[#ffffff]  font-[400]  md:left-[400px] lg:left-[520px] lg:w-[85px] xl:h-[25px] xl:top-[109px] xl:leading-[25.04px]  w-[76px] h-[19px] text-[12px] leading-[18.78px] xl:w-[101px] xl:left-[637px] lg:text-[16px] lg:leading-[25.04px]">
            صفحه اصلی
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[80px]   font-[400] text-[12px]  md:top-[149px] md:left-[400px] lg:w-[100px] lg:text-[16px] lg:left-[505px] xl:w-[120px] xl:h-[25px] xl:top-[153px] xl:left-[620px] xl:text-[16px] xl:leading-[25.04px]">
            قیمت رمز ارزها
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[73px]   font-[400] text-[12px]  md:top-[193px] md:left-[405px] lg:w-[100px] lg:text-[16px] lg:left-[505px] xl:w-[97px] xl:h-[25px] xl:top-[197px] xl:left-[642px] xl:text-[16px] xl:leading-[25.04px]">
            مقالات و وبلاگ
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[78px]   font-[400] text-[12px] md:top-[237px] md:left-[400px] lg:w-[100px] lg:text-[16px] lg:left-[505px] xl:w-[76px] xl:h-[25px] xl:top-[241px] xl:left-[664px] xl:text-[16px] xl:leading-[25.04px]">
            در باره ما
          </li>
        </ul>
        </div>
        <div className="flex">
        <ul className="flex flex-col gap-[15px]">
          <li className=" font-iranSans text-[#ffffff] w-[85px]  font-[400] text-[12px] md:top-[105px] md:left-[255px] lg:w-[100px] lg:text-[16px] lg:top-[108px] lg:left-[340px] xl:w-[110px] xl:h-[25px] xl:top-[109px] xl:left-[430px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            سوالات متداول
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[73px]  font-[400] text-[12px]  md:top-[149px] md:left-[267px] lg:w-[100px] lg:text-[16px] lg:top-[150px] lg:left-[340px] xl:w-[110px] xl:h-[25px] xl:top-[153px] xl:left-[430px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            شرایط و قوانین{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[86px]  font-[400] text-[12px] md:top-[193px] md:left-[254px] lg:w-[120px] lg:text-[16px] lg:top-[192px] lg:left-[325px] xl:w-[115px] xl:h-[25px] xl:top-[197px] xl:left-[426px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            فرصت های شغلی{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[31px] font-[400] text-[12px] md:top-[237px] md:left-[309px] lg:w-[100px] lg:text-[16px] lg:top-[237px] lg:left-[340px] xl:w-[41px] xl:h-[25px] xl:top-[241px] xl:left-[502px] xl:text-[16px] xl:leading-[25.04px]">
            انجمن
          </li>
        </ul>
        </div>
        </div>
        </div>

         <div className="flex w-full  flex-col gap-[24px]">
       
       <div >
        <p className=" font-iranSans text-[#FFFFFF] font-[900]   text-[14px] w-[47px]  md:top-[49px] md:left-[122px] md:leading-[25.04px] md:w-[54px] lg:text-[20px] lg:w-[133px] lg:left-[155px] xl:text-[20px] xl:w-[67px] xl:h-[31px] xl:top-[53px] xl:left-[280px] xl:leading-[31.3px]">
          تبادل ارز{" "}
        </p>
        </div>
        <div className="flex  gap-[63px]">
        <div className="flex ">
        <ul className="flex  flex-col gap-[15px]">
          <li className=" font-iranSans text-[#ffffff] w-[76px] font-[400] text-[12px]   md:top-[105px] md:left-[100px] lg:w-[100px] lg:text-[16px] lg:top-[110px] lg:left-[188px] xl:w-[101px] xl:h-[25px] xl:top-[109px] xl:left-[250px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید بیت کوین{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[57px]  font-[400] text-[12px] md:top-[149px] md:left-[119px] lg:w-[100px] lg:text-[16px] lg:top-[150px] lg:left-[188px] xl:w-[75px] xl:h-[25px] xl:top-[153px] xl:left-[275px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید اتریوم
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[50px]  font-[400] text-[12px]   md:top-[193px] md:left-[126px] lg:w-[100px] lg:text-[16px] lg:top-[192px] lg:left-[188px] xl:w-[66px] xl:h-[25px] xl:top-[197px] xl:left-[285px] xl:text-[16px] xl:leading-[25.04px]">
            {" "}
            خرید ریپل{" "}
          </li>
          <li className=" font-iranSans text-[#ffffff] w-[56px]  font-[400] text-[12px]    md:top-[237px] md:left-[120px] lg:w-[100px] lg:text-[16px] lg:top-[238px] lg:left-[188px] xl:w-[74px] xl:h-[25px] xl:top-[241px] xl:left-[280px] xl:text-[16px] xl:leading-[25.04px]">
            خرید سولانا
          </li>
        </ul>
        </div>

        <div className="flex">

        
        <ul className="hidden xl:flex xl:flex-col xl:gap-[15px]" >
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

        <div className="mx-[18px] mt-[32px]">
        <Image
          src="/images/Line 35 (2).png"
          alt="line"
          width={1}
          height={1}
          className=" justify-center w-full border-[1px] h-[1px] border-none  bg-[#374566] text-[#374566] md:border-none md:border-[1px] md:w-[695px] md:top-[289.5px] md:left-[5px] lg:left-[20px] lg:w-[1000px] xl:w-[1130px] xl:top-[306px] xl:left-[35px] xl:p-0 lg:h-[1px]"
        />
       </div>
       

       <div className="flex  mx-[18px] mt-[12px]">
        <ul className="flex  w-full  mx-[52px] justify-between">
          <li>
            <Image
              src="/images/Group 104.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px]  text-[#F8F9FA] border-none border-[1px]  "
            />
          </li>
          <li>
            <Image
              src="/images/Group 103.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px]  text-[#F8F9FA] border-none border-[1px]   "
            />
          </li>
          <li>
            <Image
              src="/images/Group 102.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px]  text-[#F8F9FA] border-none border-[1px]  "
            />
          </li>
          <li>
            <Image
              src="/images/Group 101.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px]  text-[#F8F9FA] border-none border-[1px]   "
            />
          </li>
          <li>
            <Image
              src="/images/Group 100.svg"
              alt="li"
              width={11}
              height={11}
              className=" w-[31.91px] text-[#F8F9FA] border-none border-[1px] "
            />
          </li>
        </ul>
        </div>


        <div className="mx-[18px] mt-[15px]">
        <Image
          src="/images/Line 35 (2).png"
          alt="line"
          width={0}
          height={0}
          className=" h-[1px] w-full border-[1px] border-none  bg-[#374566]  text-[#374566] md:hidden"
        />
       </div>

       <div className="mt-[12px] mx-[39px]">
        <p className=" font-iranSans text-[#FFFFFF] font-[400] leading-[18.78px]  text-[12px] w-full ">
          تمامی حقوق این سرویس متعلق به مجموعه{" "}
          <span className="font-iranSans  text-[14px] leading-[18.78px] font-bold lg:text-[16px] lg:leading-[25.04px]">
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
