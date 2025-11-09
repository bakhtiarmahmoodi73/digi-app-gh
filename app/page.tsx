"use client";

import Image from "next/image";
import CoinTable from "../components/coinTable";

export default function Home() {
  return (
    <div className=" mx-auto  overflow-x-hidden  flex flex-col max-w-[1440px] ">
      <div className="mx-auto xl:mx-auto xl:mt-[96px] md:mt-[61px] md:mx-auto">
        <p className="xl:text-[40px] md:text-[30px] leading-[100%] font-iranSans text-[20px] font-[900] text-[#000000] mt-[50px] mx-auto ">
          لیست قیمت لحظه‌ای ارزهای دیجیتال‌
        </p>
        </div>


        <div className="flex mt-[32px] mx-[20px] md:mx-[50px] lg:mx-auto md:gap-[8px] md:mt-[61px] xl:gap-[14px] xl:mx-[150px] 2xl:mx-auto xl:mt-[83px] bg-[#ffffff]">
          <button className="rounded-[8px] w-[335px] h-[47px]  font-iranSans text-[#F7F7F7] bg-[#1652F0] xl:w-[130px] xl:h-[47px]  xl:text-[14px] font-[400] md:w-[85px] md:h-[47px]  md:text-[12px] ">
            <span>دیفای</span>
            <Image
              src="/images/Frame (1).png"
              alt="frame"
              width={40}
              height={60}
              className="w-[24px] invert brightness-0 md:hidden"
            />
          </button>

          <button className="hidden  md:block rounded-[8px] font-iranSans text-[#000000] bg-[#F7F7F7] xl:w-[130px] xl:h-[47px]  xl:text-[14px] font-[400] md:w-[85px] md:h-[47px]  md:text-[12px]">
            حریم خصوصی
          </button>

          <button className="hidden  md:block rounded-[8px] font-iranSans text-[#000000] bg-[#F7F7F7] xl:w-[130px] xl:h-[47px]  xl:text-[14px] font-[400] md:w-[85px] md:h-[47px]  md:text-[12px]">
            متاورس
          </button>

          <button className="hidden  md:block rounded-[8px] font-iranSans text-[#000000] bg-[#F7F7F7] xl:w-[130px] xl:h-[47px]  xl:text-[14px] font-[400] md:w-[85px] md:h-[47px]  md:text-[12px]">
            قابل استخراج
          </button>

          <button className="hidden  md:block rounded-[8px] font-iranSans text-[#000000] bg-[#F7F7F7] xl:w-[130px] xl:h-[47px]  xl:text-[14px] font-[400] md:w-[85px] md:h-[47px]  md:text-[12px]">
            میم کوین
          </button>

          <button className="hidden  md:block rounded-[8px] font-iranSans text-[#000000] bg-[#F7F7F7] xl:w-[130px] xl:h-[47px]  xl:text-[14px] font-[400] md:w-[85px] md:h-[47px]  md:text-[12px]">
            استیبل کوین
          </button>

          <button className="hidden  md:block rounded-[8px] font-iranSans text-[#000000] bg-[#F7F7F7] xl:w-[130px] xl:h-[47px]  xl:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px]">
            توکن
          </button>

          <button className="hidden  md:block rounded-[8px] font-iranSans text-[#000000] bg-[#F7F7F7] xl:w-[130px] xl:h-[47px]  xl:text-[14px] font-[400] md:w-[85px] md:h-[47px]  md:text-[12px]">
            ICO
          </button>
        </div>

        <div className="mt-[12px] mx-[20px] xl:mt-[41px] xl:mx-[150px] xl:h-[982px] md:mt-[15px] md:mx-[50px] ">
          <CoinTable />
        </div>
         
         <div>
        <p className=" font-iranSans font-[900] text-[20px] mt-[71px] mx-[20px] text-[#000000] xl:mt-[219px] xl:text-[24px] xl:text-right xl:mr-[150px] md:mt-[161px] md:text-[24px] md:text-right md:mx-[50px]  ">
          توضیحات کلی در مورد رمز ارزها
        </p>
        </div>
        <div>
        <p className=" text-[12px] mx-[20px] mt-[19px] xl:text-[16px]  xl:mt-[16px] xl:mx-[150px] md:mt-[25px] md:mx-[50px] md:text-[14px] font-iranSans font-[400] text-[#000000]  ">
          رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
          رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی
          را فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول
          پیچیده ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ
          می کند. این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را
          مخفی نگه می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی
          دشوار می کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می
          شوند. این به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط
          همان کد های پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت
          ها کنترلی روی آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط
          ارزهای واقعی را نیز دارا می باشند و شما می توانید در بعضی از مارکت های
          خاص و صرافی های شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال
          خود را با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله
          اتفاق می افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را
          در حین این انتقال دارا هستند.
        </p>
        </div>
       <div className="mx-[20px] mt-[26px] xl:mt-[66px]  xl:mx-auto md:mt-[53px] md:mx-[50px] ">
          <Image
            src="/images/g.svg"
            alt="image"
            width={335}
          height={325}
          className="w-full  xl:w-[750px] xl:h-[422px] md:w-full  "
          />
        </div>
        <div>
        <p className="mt-[40px] mx-[20px] text-[12px] xl:text-[16px] xl:mx-[150px] xl:mt-[77px] xl:mb-[94px] md:mt-[75px] md:mb-[66px] md:text-[14px] md:mx-[50px] font-iranSans font-[400] text-[#000000]    ">
          رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
          رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی
          را فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول
          پیچیده ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ
          می کند. این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را
          مخفی نگه می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی
          دشوار می کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می
          شوند. این به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط
          همان کد های پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت
          ها کنترلی روی آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط
          ارزهای واقعی را نیز دارا می باشند و شما می توانید در بعضی از مارکت های
          خاص و صرافی های شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال
          خود را با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله
          اتفاق می افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را
          در حین این انتقال دارا هستند.
        </p>
        </div>
    </div>
  );
}
