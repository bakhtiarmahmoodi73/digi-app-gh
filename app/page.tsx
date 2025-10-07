"use client";

import Image from "next/image";
import CoinTable from "../components/coinTable";

export default function Home() {
  return (
    <div className="px-4 tablet:px-10 laptop:px-20 py-10 flex flex-col items-center">
      
      <h1 className="leading-[100%] text-right font-iranSans w-[301px] h-[31px] top-[114px] left-[37px] text-[20px] font-[900] text-[#000000]  tablet:text-[30px] tablet:left-[191px] tablet:top-[153px] tablet:h-[47px] tablet:w-[452px] laptop:text-[40px] laptop:w-[602px] laptop:h-[63px] laptop:top-[200px] laptop:left-[419px] laptop:font-[900]   ">
        لیست قیمت لحظه‌ای ارزهای دیجیتال‌
      </h1>
      <div className="flex justify-end gap-3 bg-white p-3">
  <button className="mobile:flex mobile:items-center mobile:justify-between mobile:px-6 rounded-[8px] w-[335px] h-[47px] top-[177px] left-[20px] font-iranSans text-[#EEF2F5] bg-[#1652F0] laptop:w-[130px] laptop:h-[47px] laptop:top-[346px] laptop:text-[14px] font-[400] tablet:w-[85px] tablet:h-[47px] tablet:top-[252px] tablet:text-[12px] ">
    <span>دیفای</span>

    <Image
            src="/images/Frame (1).png"
            alt="frame"
            width={40}
            height={60}
            className=" mobile:w-[24px]      tablet:hidden laptop:hidden"
          />
  </button>

  <button className="mobile:hidden rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] laptop:w-[130px] laptop:h-[47px] laptop:top-[346px] laptop:text-[14px] font-[400] tablet:w-[85px] tablet:h-[47px] tablet:top-[252px] tablet:text-[12px]">
    حریم خصوصی
  </button>

  <button className=" mobile:hidden rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] laptop:w-[130px] laptop:h-[47px] laptop:top-[346px] laptop:text-[14px] font-[400] tablet:w-[85px] tablet:h-[47px] tablet:top-[252px] tablet:text-[12px]">
    متاورس
  </button>

  <button className="mobile:hidden rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] laptop:w-[130px] laptop:h-[47px] laptop:top-[346px] laptop:text-[14px] font-[400] tablet:w-[85px] tablet:h-[47px] tablet:top-[252px] tablet:text-[12px]">
    قابل استخراج
  </button>

  <button className="mobile:hidden rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] laptop:w-[130px] laptop:h-[47px] laptop:top-[346px] laptop:text-[14px] font-[400] tablet:w-[85px] tablet:h-[47px] tablet:top-[252px] tablet:text-[12px]">
    میم کوین
  </button>

  <button className="mobile:hidden rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] laptop:w-[130px] laptop:h-[47px] laptop:top-[346px] laptop:text-[14px] font-[400] tablet:w-[85px] tablet:h-[47px] tablet:top-[252px] tablet:text-[12px]">
    استیبل کوین
  </button>

  <button className="mobile:hidden rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] laptop:w-[130px] laptop:h-[47px] laptop:top-[346px] laptop:text-[14px] font-[400] tablet:w-[85px] tablet:h-[47px] tablet:top-[252px] tablet:text-[12px]">
    توکن
  </button>

  <button className="mobile:hidden rounded-[8px] font-iranSans text-[#000000] bg-[#EEF2F5] laptop:w-[130px] laptop:h-[47px] laptop:top-[346px] laptop:text-[14px] font-[400] tablet:w-[85px] tablet:h-[47px] tablet:top-[252px] tablet:text-[12px] ">
    ICO
  </button>
  </div>

      <div className="w-full mb-12">
        <CoinTable />
      </div>

      <h2 className="w-full text-right font-iranSans font-[900] text-black text-xl tablet:text-2xl laptop:text-2xl leading-snug mb-4">
        توضیحات کلی در مورد رمز ارزها
      </h2>

      <p className="w-full text-right font-iranSans font-[400] text-black text-sm tablet:text-base laptop:text-lg leading-relaxed mb-8">
        رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
        رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی را
        فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول پیچیده
        ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ می کند.
        این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را مخفی نگه
        می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی دشوار می
        کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می شوند. این
        به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط همان کد های
        پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت ها کنترلی روی
        آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط ارزهای واقعی را نیز
        دارا می باشند و شما می توانید در بعضی از مارکت های خاص و صرافی های
        شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال خود را
        با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله اتفاق می
        افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را در حین این
        انتقال دارا هستند.
      </p>

      <div className="w-full flex justify-center mb-8">
        <img
          src="/images/g.svg"
          alt="image"
          // width={750}
          // height={422}
          className="w-full max-w-[750px] h-auto"
        />
      </div>

      <p className="w-full text-right font-iranSans font-[400] text-black text-sm tablet:text-base laptop:text-lg leading-relaxed">
        رمز ارز ها از پروتکل های رمزگرافیکی و یا کد های فوق العاده پیچیده برای
        رمز گذاری دیتاهای حساس و انتقال آن ها استفاده می کنند تا معاملات امنی را
        فراهم کنند. توسعه دهندگان رمز ارزها این پروتکل ها را بر پایه اصول پیچیده
        ریاضیات و مهندسی کامپیوتر بنا کرده اند که آن ها را غیرقابل نفوذ می کند.
        این پروتکل ها همچنین هویت افراد استفاده کننده از رمز ارز ها را مخفی نگه
        می دارد و ردیابی و پیدا کردن آن ها را برای هر کسی و هر دولتی دشوار می
        کند. رمز ارزها همچنین برای کنترل شدن غیر متمرکز خود شناخته می شوند. این
        به آن معناست که تمام فعالیت ها و ارزش های این بازار توسط همان کد های
        پیچیده کنترل و ارزیابی می شوند و بانک ها و یا مقامات دولت ها کنترلی روی
        آن ها ندارند. ارزهای دیجیتال امکان معامله شدن توسط ارزهای واقعی را نیز
        دارا می باشند و شما می توانید در بعضی از مارکت های خاص و صرافی های
        شناخته شده، مانند بایننس (Binance)، ارز های دیجیتال خود را
        با دلار، پوند، یورو و غیره جایگزین کنید. خطر اصلی در همین مرحله اتفاق می
        افتد جایی که هکر ها و بدافزار ها امکان بلوکه کردن پول شما را در حین این
        انتقال دارا هستند.
      </p>
    </div>
  );
}
