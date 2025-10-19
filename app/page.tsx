"use client";

import Image from "next/image";
import CoinTable from "../components/coinTable";

export default function Home() {
  return (
    <div className="mx-auto xl:max-w-[1240px] 2xl:max-w-[1440px]  overflow-x-hidden   py-10 flex flex-col items-center xl:items-center">
      <div className="xl:mr-10 2xl:mr-52">
      <h1 className="leading-[100%] mx-auto text-right font-iranSans w-[301px] h-[31px] top-[114px] text-[20px] font-[900] text-[#000000] md:text-[30px] md:left-[191px] md:top-[153px] md:h-[47px] md:w-[452px] lg:text-[40px] lg:w-[602px] lg:h-[63px] lg:top-[200px] lg:left-[419px] lg:font-[900] xl:text-center">
        لیست قیمت لحظه‌ای ارزهای دیجیتال‌
      </h1>
      
      <div className="flex   gap-3 lg:gap-2 xl:gap-6 xl:ml-4 bg-white">
        <button className="flex mx-auto xl:w-[130px] items-center justify-between px-6 rounded-[8px] w-[335px] h-[47px] mt-6 font-iranSans text-[#EEF2F5] bg-[#1652F0] lg:w-[130px] lg:h-[47px] lg:top-[346px] lg:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px] sm:mt-0">
          <span className="xl:mr-[30px]">دیفای</span>
          <Image
            src="/images/Frame (1).png"
            alt="frame"
            width={40}
            height={60}
            className="w-[24px] invert brightness-0 md:hidden"
          />
        </button>

        <button className="hidden xl:w-[130px] md:block rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] lg:w-[130px] lg:h-[47px] lg:top-[346px] lg:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px]">
          حریم خصوصی
        </button>

        <button className="hidden xl:w-[130px] md:block rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] lg:w-[130px] lg:h-[47px] lg:top-[346px] lg:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px]">
          متاورس
        </button>

        <button className="hidden xl:w-[130px] md:block rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] lg:w-[130px] lg:h-[47px] lg:top-[346px] lg:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px]">
          قابل استخراج
        </button>

        <button className="hidden xl:w-[130px] md:block rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] lg:w-[130px] lg:h-[47px] lg:top-[346px] lg:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px]">
          میم کوین
        </button>

        <button className="hidden xl:w-[130px] md:block rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] lg:w-[130px] lg:h-[47px] lg:top-[346px] lg:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px]">
          استیبل کوین
        </button>

        <button className="hidden xl:w-[130px] md:block rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] lg:w-[130px] lg:h-[47px] lg:top-[346px] lg:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px]">
          توکن
        </button>

        <button className="hidden xl:w-[130px] md:block rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] lg:w-[130px] lg:h-[47px] lg:top-[346px] lg:text-[14px] font-[400] md:w-[85px] md:h-[47px] md:top-[252px] md:text-[12px]">
          ICO
        </button>
      </div>

      <div className="mx-auto w-full mb-12">
        <CoinTable />
      </div>

      <h2 className="w-full mx-auto text-right font-iranSans font-[900] text-black text-xl md:text-2xl lg:text-2xl leading-snug mb-4 xl:text-center">
        توضیحات کلی در مورد رمز ارزها
      </h2>

      <p className=" mx-auto text-right font-iranSans font-[400] text-black text-sm md:text-base lg:text-lg leading-relaxed mb-8 ">
        رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
        رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی را
        فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول پیچیده
        ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ می کند.
        این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را مخفی نگه
        می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی دشوار می
        کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می شوند. این
        به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط همان کد های
        پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت ها کنترلی روی
        آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط ارزهای واقعی را نیز
        دارا می باشند و شما می توانید در بعضی از مارکت های خاص و صرافی های
        شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال خود را
        با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله اتفاق می
        افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را در حین این
        انتقال دارا هستند.
      </p>

      <div className="w-full flex justify-center mb-8">
        <img
          src="/images/g.svg"
          alt="image"
          className="w-full max-w-[750px] h-auto"
        />
      </div>

      <p className="w-full text-right font-iranSans font-[400] text-black text-sm md:text-base lg:text-lg leading-relaxed ">
        رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
        رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی را
        فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول پیچیده
        ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ می کند.
        این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را مخفی نگه
        می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی دشوار می
        کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می شوند. این
        به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط همان کد های
        پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت ها کنترلی روی
        آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط ارزهای واقعی را نیز
        دارا می باشند و شما می توانید در بعضی از مارکت های خاص و صرافی های
        شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال خود را
        با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله اتفاق می
        افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را در حین این
        انتقال دارا هستند.
      </p> 
      </div>
    </div>
  );
}