"use client";
import React from "react";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import CoinChart from "../../../components/CoinChart";

type Coin = {
  id: number;
  currency_code: string;
  en_name: string;
  fa_name: string;
  price: string;
  buy_irt_price: string;
  sell_irt_price: string;
  irt_price: string;
  daily_change_percent: string;
  icon: string;
  about: string;
};

export default function CoinDetailsPage() {
  const { currency_code } = useParams<{ currency_code: string }>();
  const [coin, setCoin] = useState<Coin | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!currency_code) return;

    const fetchData = async () => {
      try {
        let foundCoin = null;
        let page = 1;
        const maxPages = 10;  

        while (page <= maxPages && !foundCoin) {
          const res = await fetch(`https://b.wallet.ir/coinlist/list/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              page: page,
              limit: "9"
            })
          });
          
          if (!res.ok) break;
          
          const data = await res.json();
          foundCoin = (data.items || []).find(
            (item: Coin) => item.currency_code === currency_code
          );
          
          if (foundCoin) break;
          page++;
        }

        setCoin(foundCoin || null);
      } catch (err) {
        console.error(err);
        setCoin(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [currency_code]);

  



  if (loading) return <p className="p-4">در حال بارگذاری...</p>;
  if (!coin)
    return <p className="p-4 text-red-500">اطلاعات رمز ارز یافت نشد</p>;

  return (
    <div className=" mx-auto overflow-x-hidden  h-[3820px]   md:h-[3440px]  bg-[#ffffff] flex flex-col max-w-[1440px] ">
      <div className="bg-[#ffffff] w-[calc(100%-36px)] mx-[18px] h-[799px] mt-[40px]  rounded-[30px] shadow-[0_4px_103px_0_rgba(13,26,142,0.08)] flex flex-col md:flex  md:flex-row md:mt-[22px] md:mx-[50px] md:w-[calc(100%-100px)] md:h-[448px] xl:h-[481px] xl:mx-[150px] xl:w-[calc(100%-300px)] xl:mt-[60px]   ">
        <div className="flex flex-col  md:w-1/2 xl:w-1/2">
          <p className=" font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] mt-[32px] mr-[22px] md:mt-[45px] md:mr-[25px] xl:text-[16px] xl:mt-[29px] xl:mr-[33px]  ">
            قیمت لحظه ای :
          </p>

          <div className="flex w-[calc(100%-30px) px-[15px]    items-center justify-between md:px-0  ">
            <div className="flex  gap-[6px] mt-[0px]  md:gap-[12px] md:mt-[20px]  xl:mt-[26px] ">
              <div className=" w-[43px] h-[43px]  md:w-[61px] md:mr-[0px] xl:mr-[33px] md:h-[61px] xl:w-[71px]  ">
                <Image
                  src={coin.icon}
                  alt={coin.fa_name}
                  width={60}
                  height={60}
                />
              </div>
              <div className="flex flex-col gap-[8px] xl:gap-[12px] ">
                <p className=" font-iranSans text-[#000000] font-[700]  text-[14px] leading-[21.91px] w-[150px] xl:text-[18px] ">
                  {coin.fa_name}
                </p>
                <p className=" font-iranSans text-[#696464] font-[400] text-[14px] leading-[21.91px] xl:text-[18px] ">
                  {coin.currency_code}
                </p>
              </div>
            </div>
            <div className="flex    flex-col mt-[21px]  gap-[8px] items-end ">
              <p className="  font-iranSansnumber text-[14px]  text-[#000000] font-[700] xl:text-[18px] ">
                {Number(coin.irt_price)
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                <span className="mr-[4px]">تومان</span>
              </p>
              <p className=" font-iranSansnumber text-[#696464] font-[400] text-[14px]  xl:text-[18px]  ">
                $
                {Number(coin.price)
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
            </div>
          </div>

          <div className="   border-[#EBEBEB] mr-[22px] ml-[25px] rotate-[-180deg] mt-[18px] md:mt-[21px] xl:mr-[33px] xl:mt-[25px] ">
            <Image
              src="/images/Line 102 (1).svg"
              alt="line"
              width={900}
              height={507}
            />
          </div>

          <div className="flex flex-col mt-[24px] mr-[22px] ml-[25px] gap-[26px] md:gap-[32px] md:mt-[17px] xl:mr-[33px] xl:gap-[34px] xl:mt-[36px] ">
            <div className="flex justify-between">
              <p className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px] ">
                تغییر قیمت امروز :
              </p>
              <p
                className={` font-iranSansnumber font-[400] text-[12px] leading-[18px] xl:text-[16px]
                      ${
                        Number(coin.daily_change_percent) >= 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
              >
                {Number(coin.daily_change_percent) > 0
                  ? `${coin.daily_change_percent}%+`
                  : `${coin.daily_change_percent}%`}
              </p>
            </div>

            <div className="flex justify-between">
              <p className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                خرید بیت کوین:
              </p>
              <div className="flex justify-between gap-[4px]">
                <p
                  className={` font-iranSansnumber font-[400] text-[12px] leading-[18px] xl:text-[16px] ${
                    Number(coin.daily_change_percent) >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {Number(coin.buy_irt_price)
                    .toFixed(0)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
                <span className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                  تومان
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <p className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                فروش بیت کوین:
              </p>
              <div className="flex justify-between gap-[4px]">
                <p
                  className={` font-iranSansnumber font-[400] text-[12px] leading-[18px] xl:text-[16px] ${
                    Number(coin.daily_change_percent) >= 0
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {Number(coin.sell_irt_price)
                    .toFixed(0)
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                </p>
                <span className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                  تومان
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <p className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                بالاترین قیمت 24 ساعته :
              </p>
              <div className="flex justify-between gap-[4px]">
                <p className=" font-iranSansnumber text-[#147D03] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                  1.000.000.000
                </p>
                <span className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                  تومان
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <p className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                پایین ترین قیمت 24 ساعته :
              </p>
              <div className="flex justify-between gap-[4px]">
                <p className=" font-iranSansnumber text-[#FF6868] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                  1.000.000.000
                </p>
                <span className=" font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] xl:text-[16px]">
                  تومان
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-[30px]  border-[#EBEBEB] bg-[#EBEBEB] mr-[22px] ml-[25px] rotate-[-180deg]  md:mr-[28px]  md:ml-[26px] md md:w-[1px] md:mt-[16px] md:h-[415px] xl:mt-[14px] xl:h-[448px] xl:mr-0 xl:ml-2 2xl:mr-[45px] 2xl:ml-[40px] md:rotate-[180deg] ">
          <Image
            src="/images/Line 102 (1).svg"
            alt="lineee"
            width={900}
            height={500}
            className=""
          />
        </div>

        <div className="mt-[26px]  mr-[22px] ml-[25px] md:mt-[41px] md:mr-0  md:w-1/2 xl:w-1/2 xl:mt-[29px] xl:mr-[12px] ">
          <p className=" font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] xl:text-[16px] ">
            ارسال می کنید:
          </p>

          <div className="mt-[12px]  h-[47px] rounded-[8px] bg-[#F8F9FA] flex items-center justify-between  xl:bg-[#F6F4F4] xl:rounded-[50px] xl:mt-[18px] ">
            <p className=" font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px]  h-[19px] mr-[12px] ">
              مقدار را وارد کنید
            </p>
            <div className="flex items-center ml-[12px] gap-[38px]">
              <div className="flex items-center gap-[9.25px] ">
                <div>
                  <Image
                    src="/images/Line 33.svg"
                    alt="linee"
                    width={900}
                    height={500}
                    className=" w-[1px] h-[37px] bg-[#9B9B9B]  border-none "
                  />
                </div>
                <div className="w-[24.89px] h-[26px] ">
                  <Image
                    src="/images/Group 33.svg"
                    alt="iran"
                    width={24.89}
                    height={26}
                  />
                </div>
                <p className=" font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] ">
                  تومان
                </p>
              </div>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className=" w-[22.98px] h-[24px] text-[#696464] border-none "
              />
            </div>
          </div>

          <div className="mt-[21px] xl:mt-[34px] flex justify-end">
            <div className="flex items-center justify-center bg-[#E8E8E8] w-[34.34px] h-[34.34px] xl:bg-[#F6F4F4] xl:w-[40px] xl:h-[40px]   rounded-[50%]">
              <Image
                src="/images/noun-back-and-forth-1522889 1.svg"
                alt="frame"
                width={1}
                height={1}
                className=" w-[16.6px] h-[16.74px] top-[524px] left-[27.7px] border-none rotate-[-180deg] text-[#000000] "
              />
            </div>
          </div>

          <p className=" font-iranSans  text-[#000000] font-[700] text-[14px] leading-[21.91px]  xl:text-[16px] ">
            دریافت می کنید:
          </p>

          <div className="mt-[12px]  h-[47px] rounded-[8px] bg-[#F8F9FA] flex items-center justify-between xl:bg-[#F6F4F4] xl:rounded-[50px] xl:mt-[19px] ">
            <p className=" font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px]  h-[19px] mr-[12px] ">
              مقدار نهایی
            </p>
            <div className="flex items-center ml-[12px] gap-[19px]">
              <div className="flex items-center gap-[9px] ">
                <div>
                  <Image
                    src="/images/Line 33.svg"
                    alt="linee"
                    width={900}
                    height={500}
                    className=" w-[1px] h-[37px] bg-[#9B9B9B]  border-none "
                  />
                </div>
                <div className="w-[24.89px] h-[26px] ">
                  <Image
                    src="/images/bitcoin (1) 3.svg"
                    alt="bit"
                    width={10}
                    height={10}
                    className=" w-[24.89px] h-[26px] "
                  />
                </div>
                <p className=" font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] ">
                  بیت کوین
                </p>
              </div>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className=" w-[22.98px] h-[24px] text-[#696464] border-none "
              />
            </div>
          </div>

          <div className="flex justify-between mt-[15px] xl:mt-[25px]">
            <p className=" font-iranSans text-[#000000] font-[700] text-[12px] leading-[18.78px] xl:text-[16px]">
              نرخ ارز یک
            </p>
            <p className=" font-iranSans text-[#000000] font-[700] text-[12px] leading-[18px] xl:text-[16px]">
              5.600 دلار
            </p>
          </div>

          <div className="flex justify-between mt-[19px] xl:mt-[15px] ">
            <p className=" font-iranSans text-[#000000] font-[700] text-[12px] leading-[18.78px] xl:text-[16px]">
              نرخ ارز دو
            </p>
            <p className=" font-iranSans text-[#000000] font-[700] text-[12px] leading-[18px] xl:text-[16px]">
              49.750 تومان
            </p>
          </div>

          <button className=" mt-[31px] w-full font-iranSans bg-[#1652F0] h-[47px]  rounded-[8px] text-[14px] font-[700] leading-[21.91px] text-[#FFFFFF]   xl:hidden">
            ثبت سفارش خرید
          </button>
          <button className=" hidden xl:mt-[25px] xl:block border border-[#0D1A8E] text-[#0D1A8E] w-full h-[47px] rounded-[50px] font-iranSans font-[700] text-[16px] leading-[25.04px]">
            ادامه خرید
          </button>
        </div>
      </div>

      <div className="flex xl:mx-[150px] xl:w-[calc(100%-300px)] xl:gap-[30px] xl:mt-[161px] ">
        <div className="flex flex-col mx-[19px] w-[calc(100%-38px)] xl:mx-0 xl:w-1/2">
          <div className="flex mx-auto  mt-[53px] md:mt-[59px] xl:mx-0 xl:mt-0 ">
            <p className=" font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px]  md:text-[30px]">
              درباره
            </p>
            <span className=" font-iranSansnumber text-[#0D1A8E] text-[20px] font-[900] leading-[31.3px]  md:text-[30px]">
              بیت کوین
            </span>
          </div>
          <div className=" rounded-[20px] mt-[35px] md:mt-[47px] md:mx-[120px] xl:hidden">
            <Image
              src="/images/Group 559.svg"
              alt="bitcoin"
              width={400}
              height={400}
              className="w-full"
            />
          </div>
          <p className=" text-[#000000] font-[400] text-[12px] leading-[28px] w-full h-[252px] mt-[21px] md:text-[14px] md:mx-[30px] md:w-[calc(100%-50px)] xl:mx-0 xl:w-full xl:mt-[29px] xl:text-[16px] 2xl:leading-[32px]">
            بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی
            دیجیتال است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1 بازار
            قرار داشته و سهم 52.484 درصدی از کل بازار را در اختیار دارد . هر
            واحد از بیت کوین در این لحظه با قیمت 67977.99 دلار، با احتساب نرخ
            تتر 64575 تومان معادل 4389678704.25 تومان معامله می شود و حجم
            مبادلات روزانه آن 20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر
            1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ 1402 اسفند 24
            معادل 73628.4 دلار بوده که همینک -7.67 اختلاف دارد از آن زمان .
          </p>
        </div>
        <div className="hidden rounded-[20px] xl:block xl:w-1/2  ">
          <Image
            src="/images/Group 559.svg"
            alt="bitcoin"
            width={400}
            height={400}
            className="w-full"
          />
        </div>
      </div>

      <div className="flex flex-col  ">
        <p className=" font-iranSans  text-[#000000] text-center font-[900] text-[20px] leading-[40px] mt-[58px] mx-[53px] md:mt-[137px] md:mx-auto md:text-[30px] xl:mt-[116px] xl:mx-[150px] xl:text-right ">
          نمودار قیمت بیت کوین ونرخ برابری تومان
        </p>
        <div className=" ">
          <CoinChart />
        </div>
      </div>

      <div className="flex flex-col mt-[39px] mx-[24px] gap-[39px] md:mt-[111px] md:gap-[36px] md:mx-[54px] xl:gap-[49px] xl:mx-[150px] xl:mt-[108px] ">
        <p className="  text-[#000000] font-[900] text-[20px] leading-[31.3px] mx-auto md:text-[30px] xl:mx-0  ">
          توضیحات بیشتر درباره بیت کوین
        </p>
        <p className=" font-iranSans text-[#000000] font-[400] text-[12px] leading-[28px] md:text-[14px] xl:text-[16px] ">
          بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی دیجیتال
          است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1 بازار قرار داشته
          و سهم 52.484 درصدی از کل بازار را در اختیار دارد . هر واحد از بیت کوین
          در این لحظه با قیمت 67977.99 دلار، با احتساب نرخ تتر 64575 تومان معادل
          4389678704.25 تومان معامله می شود و حجم مبادلات روزانه آن
          20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر 1.53 تغییر یافته است.
          بالاترین قیمت بیت کوین در تاریخ 1402 اسفند 24 معادل 73628.4 دلار بوده
          که همینک -7.67 اختلاف دارد از آن زمان . بیت کوین با نماد اختصاری BTC
          یک ارز دیجیتال یا شکلی از دارایی دیجیتال است که با ارزش بازار حدود 541
          میلیارد دلار، در رتبه 1 بازار قرار داشته و سهم 52.484 درصدی از کل
          بازار را در اختیار دارد . هر واحد از بیت کوین در این لحظه با قیمت
          67977.99 دلار، با احتساب نرخ تتر 64575 تومان معادل 4389678704.25 تومان
          معامله می شود و حجم مبادلات روزانه آن 20367661885.022 دلار است. قیمت
          در ۲۴ ساعت اخیر 1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ
          1402 اسفند 24 معادل 73628.4 دلار بوده که همینک -7.67 اختلاف دارد از آن
          زمان .
        </p>
      </div>

      <div className="mt-[120px] xl:mt-[108px] xl:mx-[150px] ">
        <p className="font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] text-center md:text-[30px]  xl:text-right">
          سوالات متداول
        </p>
      </div>

      <div className="  h-[225px]  rounded-[15px] border-[1px] border-[#F1F1F1] mx-[20px] mt-[31px] md:mt-[49px] md:mx-[50px] xl:mx-[150px]  ">
        <div className="flex items-center justify-between mx-[20px] mt-[19px] md:mt-[40px] md:mr-[27px] md:ml-[17px] xl:mr-[49px] xl:ml-[29px] ">
          <p className="  font-iranSans text-[#000000] font-[500] text-[16px] leading-[25.04px] md:text-[18px] ">
            رمز ارز چیست؟
          </p>
          <Image
            src="/images/Frame.svg"
            alt="frame"
            width={1}
            height={1}
            className=" w-[16px] h-[16px] md:w-[24px] md:h-[24px] text-[#000000]  rotate-[180deg] "
          />
        </div>
        <p className="  font-iranSans text-[#000000] font-[400] text-[12px] leading-[24px] mt-[19px] mx-[20px] md:text-[14px] xl:text-[16px] md:mt-[28px]  md:mr-[27px] md:ml-[17px] xl:mr-[49px] xl:ml-[29px]">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
          بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
          گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
          ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          از نظر گرافی ...
        </p>
      </div>

      <div className=" flex justify-between items-center mx-[20px] mt-[18px] px-[21px] h-[50px] md:h-[70px] md:mt-[24px] md:mx-[50px] md:px-[26px] xl:h-[88px] xl:mt-[15px] xl:px-[49px] xl:mx-[150px]  rounded-[15px] border-[1px] border-[#F1F1F1]   ">
        <p className="  xl:text-[18px] md:text-[14px] font-iranSans text-[#000000] font-[400] text-[12px] leading-[18.78px] ">
          آیا می توانم با کارت بانکی بیت کوین بخرم؟
        </p>
        <Image
          src="/images/Frame.svg"
          alt="frame"
          width={1}
          height={1}
          className=" w-[16px] h-[16px] text-[#000000] rotate-[-0deg] md:w-[24px] md:h-[24px] "
        />
      </div>
      <div className="flex justify-between items-center mx-[20px] mt-[18px] px-[21px]  h-[50px] md:h-[70px] md:mt-[24px] md:mx-[50px] md:px-[26px] xl:h-[88px] xl:mt-[15px] xl:px-[49px] xl:mx-[150px] rounded-[15px] border-[1px] border-[#F1F1F1]  ">
        <p className="  xl:text-[18px]  md:text-[14px] font-iranSans text-[#000000] font-[400] text-[12px] leading-[18.78px]  ">
          چرا باید از والت استفاده کنم؟
        </p>
        <Image
          src="/images/Frame.svg"
          alt="frame"
          width={1}
          height={1}
          className=" w-[16px] h-[16px] text-[#000000]  rotate-[-0deg] md:w-[24px] md:h-[24px] "
        />
      </div>

      <div className="flex flex-col xl:mt-[58px] xl:mx-[150px] xl:gap-[38px] md:mt-[53px] md:mx-[50px] md:flex-row-reverse md:gap-[29px] gap-[24px] mt-[38px] mx-[20px] h-[454px]  rounded-[15px] bg-[#F8F9FA]  md:h-[294px] xl:h-[366px]  ">
        <div className="flex flex-col gap-[17px] md:gap-[26px] xl:gap-[43px] xl ">
          <p className="mt-[49px] mx-[47px] xl:text-[28px]  font-iranSans text-[#000000] font-[900] text-[16px] leading-[25.04px] text-center  h-[25px]  md:leading-[31.3px] md:text-[20px] md:text-right ">
            علاقه مند به خرید بیت کوین هستید؟
          </p>
          <p className=" xl:text-[22px] mx-[44px] font-iranSans text-[#000000] font-[300] text-[12px] leading-[24px] text-center   md:leading-[32px] md:text-right md:text-[16px]">
            ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین داشته
            باشید.
          </p>
          <button className=" mx-[76px] h-[47px] font-iranSans font-[700] rounded-[50px] text-[16px] bg-[#1652F0] leading-[25.04px] text-center  text-[#ffffff] md:mx-0 md:mr-10 md:w-[182px] md:h-[47px]  ">
            اکنون شروع کنید
          </button>
        </div>

        <div className=" ">
          <Image
            src="/images/sammy-line-man-with-money 1.svg"
            alt="boy"
            width={196}
            height={196}
            className=" mx-auto xl:w-[337px] xl:h-[337px] xl:mr-[108px] md:w-[265px] md:h-[265px] md:mr-[63px] md:mt-[14px]"
          />
        </div>
      </div>
    </div>
  );
}
