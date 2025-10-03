"use client";

import React from "react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="relative  bg-[#1B2A4E]    w-full tablet:w-[834px] tablet:h-[357px] laptop:w-[1440px] laptop:h-[402px] ">
      <Image
        src="/images/logo_light.d1640c2f 1.png"
        alt="logo"
        width={200}
        height={200}
        className="absolute text-[#FFFFFF] w-[110px] h-[53px] left-[246px] top-[56px] tablet:w-[132px] tablet:h-[64px] tablet:left-[652px] tablet:top-[52px] laptop:h-[64px] laptop:left-[1158px] laptop:top-[42px]"
      />
      <p className="absolute font-iranSans text-[#FFFFFF] font-[400] leading-[24px] text-justify text-[12px]  w-[335px] h-[96px] top-[123px] left-[22px] tablet:w-[283px] tablet:h-[120px] tablet:top-[139px] tablet:left-[501px] laptop:w-[352px] laptop:h-[150px] laptop:top-[120px] laptop:left-[938px] laptop:text-[16px] laptop:leading-[30px] justify-center">
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
        className="absolute h-[1px] mobile:w-[335px] mobile:border-[1px] mobile:border-none mobile:left-[22px] mobile:top-[243px] mobile:bg-[#374566]  text-[#374566] tablet:hidden"
      />
      <p className="absolute font-iranSans text-[#FFFFFF] font-[900] leading-[21.91px] text-right text-[14px] w-[93px] h-[22px] top-[265px] left-[261px] tablet:text-[16px] tablet:w-[107px] tablet:h-[25px] tablet:top-[49px] tablet:left-[360px] tablet:leading-[25.04px] laptop:text-[20px] laptop:w-[133px] laptop:h-[31px] laptop:top-[53px] laptop:left-[767px] laptop:leading-[31.3px]">
        لینک های مرتبط
      </p>

      {/* لینک های مرتبط */}
      <ul>
        <li className="absolute font-iranSans text-[#ffffff] w-[59px] h-[19px] top-[311px] left-[296px] font-[400] text-[12px] leading-[18.78px] text-right tablet:top-[105px] tablet:left-[409px] laptop:w-[78px] laptop:h-[25px] laptop:top-[109px] laptop:left-[822px] laptop:text-[16px] laptop:leading-[25.04px]">
          صفحه اصلی
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[68px] h-[19px] top-[345px] left-[287px] font-[400] text-[12px] leading-[18.78px] text-right tablet:top-[149px] tablet:left-[400px] laptop:w-[90px] laptop:h-[25px] laptop:top-[153px] laptop:left-[810px] laptop:text-[16px] laptop:leading-[25.04px]">
          قیمت رمز ارزها
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[73px] h-[19px] top-[379px] left-[281px] font-[400] text-[12px] leading-[18.78px] text-right tablet:top-[193px] tablet:left-[394px] laptop:w-[97px] laptop:h-[25px] laptop:top-[197px] laptop:left-[802px] laptop:text-[16px] laptop:leading-[25.04px]">
          مقالات و وبلاگ
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[39px] h-[19px] top-[413px] left-[316px] font-[400] text-[12px] leading-[18.78px] text-right tablet:top-[237px] tablet:left-[429px] laptop:w-[52px] laptop:h-[25px] laptop:top-[241px] laptop:left-[848px] laptop:text-[16px] laptop:leading-[25.04px]">
          در باره ما
        </li>
      </ul>

      {/* تبادل ارز */}
      <p className="absolute font-iranSans text-[#FFFFFF] font-[900] leading-[21.91px] text-right text-[14px] w-[47px] h-[22px] top-[265px] left-[63px] tablet:top-[49px] tablet:left-[122px] tablet:leading-[25.04px] tablet:w-[54px] laptop:text-[20px] laptop:w-[67px] laptop:h-[31px] laptop:top-[53px] laptop:left-[443px] laptop:leading-[31.3px]">
        تبادل ارز
      </p>

      <ul>
        <li className="absolute font-iranSans text-[#ffffff] w-[76px] h-[19px] top-[311px] left-[34px] font-[400] text-[12px] leading-[18.78px] text-right tablet:top-[105px] tablet:left-[100px] laptop:w-[101px] laptop:h-[25px] laptop:top-[109px] laptop:left-[409px] laptop:text-[16px] laptop:leading-[25.04px]">
          خرید بیت کوین
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[57px] h-[19px] top-[345px] left-[53px] font-[400] text-[12px] leading-[18.78px] text-right tablet:top-[149px] tablet:left-[119px] laptop:w-[75px] laptop:h-[25px] laptop:top-[153px] laptop:left-[435px] laptop:text-[16px] laptop:leading-[25.04px]">
          خرید اتریوم
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[50px] h-[19px] top-[379px] left-[60px] font-[400] text-[12px] leading-[18.78px] text-right tablet:top-[193px] tablet:left-[126px] laptop:w-[66px] laptop:h-[25px] laptop:top-[197px] laptop:left-[444px] laptop:text-[16px] laptop:leading-[25.04px]">
          خرید ریپل
        </li>
        <li className="absolute font-iranSans text-[#ffffff] w-[56px] h-[19px] top-[413px] left-[54px] font-[400] text-[12px] leading-[18.78px] text-right tablet:top-[237px] tablet:left-[120px] laptop:w-[74px] laptop:h-[25px] laptop:top-[241px] laptop:left-[436px] laptop:text-[16px] laptop:leading-[25.04px]">
          خرید سولانا
        </li>
      </ul>

      <Image
        src="/images/Line 35 (2).png"
        alt="line"
        width={1}
        height={1}
        className="absolute justify-center w-[335px] border-[1px] h-[1px] border-none left-[22px] top-[464px] bg-[#374566]  text-[#374566] tablet:border-none tablet:border-[1px] tablet:w-[729.5px] tablet:top-[289.5px] tablet:left-[53.5px] laptop:w-[1138px] laptop:top-[306px] laptop:left-[150px] laptop:p-0 laptop:h-[1px]"
      />

      <ul>
        <li>
          <Image
            src="/images/Group 104.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute w-[31.91px] h-[31.91px] left-[272.09px] top-[476px] text-[#F8F9FA] border-none border-[1px] tablet:top-[308px] tablet:left-[249.09px] laptop:w-[50px] laptop:h-[50px] laptop:top-[328px] laptop:left-[462px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 103.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[222.32px] top-[476px] text-[#F8F9FA] border-none border-[1px] tablet:top-[308px] tablet:left-[199.32px] laptop:w-[50px] laptop:h-[50px] laptop:top-[328px] laptop:left-[384px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 102.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[172.55px] top-[476px] text-[#F8F9FA] border-none border-[1px] tablet:top-[308px] tablet:left-[149.55px] laptop:w-[50px] laptop:h-[50px] laptop:top-[328px] laptop:left-[306px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 101.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[122.77px] top-[476px] text-[#F8F9FA] border-none border-[1px] tablet:top-[308px] tablet:left-[99.77px]  laptop:w-[50px] laptop:h-[50px] laptop:top-[328px] laptop:left-[228px]"
          />
        </li>
        <li>
          <Image
            src="/images/Group 100.svg"
            alt="li"
            width={11}
            height={11}
            className="absolute  w-[31.91px] h-[31.91px]  left-[73px] top-[476px] text-[#F8F9FA] border-none border-[1px] tablet:top-[308px] tablet:left-[50px] laptop:w-[50px] laptop:h-[50px] laptop:top-[328px] laptop:left-[150px]"
          />
        </li>
      </ul>

      <Image
        src="/images/Line 35 (2).png"
        alt="line"
        width={0}
        height={0}
        className="absolute h-[1px] mobile:w-[335px] mobile:border-[1px] mobile:border-none mobile:left-[22px] mobile:top-[523px] mobile:bg-[#374566]  text-[#374566] tablet:hidden"
      />

      <p className="absolute font-iranSans text-[#FFFFFF] font-[400] leading-[18.78px] text-right text-[12px] w-[298px] h-[19px] top-[535px] left-[40px] tablet:top-[314px] tablet:left-[485px] laptop:w-[414px] laptop:h-[31px] laptop:top-[337px] laptop:left-[875px] laptop:text-[16px] laptop:leading-[25.04px]">
        تمامی حقوق این سرویس متعلق به مجموعه{" "}
        <span className="font-iranSans font-[900] text-[12px] leading-[18.78px] whitespace-pre laptop:text-[16px] laptop:leading-[25.04px]">
          ری پیمنت
        </span>{" "}
        است
      </p>
    </footer>
  );
}

export default Footer;
