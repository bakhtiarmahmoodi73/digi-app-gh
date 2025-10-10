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
        const res = await fetch(
          `https://b.wallet.ir/coinlist/list/?page=1&limit=100`
        );
        const data = await res.json();

        const found = (data.items || []).find(
          (item: Coin) => item.currency_code === currency_code
        );
        setCoin(found || null);
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
    <div className="relative overflow-x-hidden w-full h-[3580px] bg-white flex flex-col">
      <div className="relative  flex-1">
        <div className="relative flex-1">
          <div className="  w-[375px] h-[3837px] tablet:w-[834px] tablet:h-[2860px] laptop:w-[1440px] laptop:h-[3065px] top-[0px]">
            <div className=" absolute shadow border-[#ffffff] bg-[#ffffff] w-[337px] h-[799px] top-[104px] left-[20px] rounded-[30px] blur-[#0D1A8E14] tablet:w-[734px] tablet:h-[448px] tablet:top-[114px] tablet:left-[50px] laptop:w-[1139px] laptop:h-[481px] laptop:top-[164px] laptop:left-[150px] ">
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[93px] h-[22px] top-[32px] left-[222px] tablet:top-[45px] tablet:left-[616px] laptop:w-[107px] laptop:h-[25px] laptop:top-[29px] laptop:right-[30px] laptop:text-[16px] laptop:leading-[25.04px] ">
                قیمت لحظه ای :
              </p>
              <Image
                src={coin.icon}
                alt={coin.fa_name}
                width={60}
                height={60}
                className="absolute w-[43px] h-[43px] top-[75px] left-[272px] tablet:w-[61px] tablet:h-[61px] tablet:top-[87px] tablet:left-[648px]  laptop:w-[73px] laptop:h-[73px] laptop:top-[80px] laptop:right-[30px]  "
              />
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[56px] h-[22px] top-[70px] left-[210px] tablet:top-[87px] laptop:w-[72px] laptop:h-[28px] laptop:top-[85px] laptop:right-[110px] laptop:text-[18px] laptop:leading-[28.17px]  ">
                {coin.fa_name}
              </p>
              <p className="absolute font-iranSansnumber text-[#000000] font-[700] text-[14px] leading-[21px] w-[142px] h-[21px] top-[75px] left-[5px] tablet:top-[88px] tablet:left-[385px] laptop:w-[182px] laptop:h-[27px] laptop:top-[87px] laptop:right-[392px] laptop:text-[18px] laptop:leading-[27px]">
                {Number(coin.irt_price)
                  .toFixed(0) 
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                تومان
              </p>

              <p className="absolute font-iranSans text-[#696464] font-[700] text-[14px] leading-[21.91px] w-[27px] h-[22px] top-[100px] left-[239px] tablet:top-[117px] tablet:left-[609px]  laptop:w-[34px] laptop:h-[28px] laptop:top-[125px] laptop:right-[110px] laptop:text-[18px] laptop:leading-[28.17px]">
                {" "}
                {coin.currency_code}
              </p>
              <p className="absolute font-iranSansnumber text-[#696464] font-[400] text-[14px] leading-[21px] w-[71px] h-[21px] top-[104px] left-[25px] tablet:top-[117px] tablet:left-[410px] laptop:w-[92px] laptop:h-[27px] laptop:top-[126px] laptop:left-[592px] laptop:text-[18px] laptop:leading-[27px]">
                ${" "}
                {Number(coin.price)
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>

              <Image
                src="/images/Line 102 (1).svg"
                alt="line"
                width={507}
                height={507}
                className="absolute  w-[290px] h-[1px] top-[140px] p-[0px] left-[25px]  border-[#EBEBEB] border-none rotate-[-180deg] tablet:top-[169px] tablet:left-[400px] tablet:w-[324px] laptop:w-[507px] laptop:top-[178px] laptop:right-[30px] "
              />

              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[91px] h-[18px] top-[164px] left-[222px] tablet:top-[186px] tablet:left-[618px] laptop:w-[121px] laptop:h-[24px] laptop:top-[214px] laptop:right-[30px] laptop:text-[16px] laptop:leading-[24px] ">
                {" "}
                تغییر قیمت امروز :{" "}
              </p>

              <p
                className={`absolute font-iranSansnumber text-[#147D03] font-[400] text-[12px] leading-[18px] w-[39px] h-[18px] top-[164px] left-[25px] tablet:top-[186px] tablet:left-[415px] laptop:w-[52px] laptop:h-[24px] laptop:top-[214px] laptop:left-[598px] laptop:text-[16px] laptop:leading-[24px]
  ${
    Number(coin.daily_change_percent) >= 0 ? "text-green-600" : "text-red-600"
  }`}
              >
                {Number(coin.daily_change_percent) > 0
                  ? `${coin.daily_change_percent}%+`
                  : `${coin.daily_change_percent}%`}
              </p>
              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[79px] h-[18px] top-[208px] left-[234px] tablet:top-[236px] tablet:left-[630px] laptop:w-[105px] laptop:h-[24px] laptop:top-[265px] laptop:right-[30px] laptop:text-[16px] laptop:leading-[24px]">
                {" "}
                خرید بیت کوین:{" "}
              </p>
              <p className={`absolute font-iranSansnumber  font-[400] text-[12px] leading-[18px] w-[111px] h-[18px] top-[208px] left-[8px] tablet:top-[236px] tablet:left-[405px] laptop:w-[130px] laptop:h-[24px] laptop:top-[265px] laptop:left-[595px] laptop:text-[16px] laptop:leading-[24px] ${Number(coin.daily_change_percent) >= 0 ? "text-green-600" : "text-red-600"}`}>
              {Number(coin.buy_irt_price)
                  .toFixed(0) 
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                
              </p>
              <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[208px] left-[25px] tablet:top-[236px] tablet:left-[420px] laptop:w-[30px] laptop:h-[24px] laptop:top-[265px] laptop:left-[590px] laptop:text-[16px] laptop:leading-[24px]">
                تومان
              </span>
              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[84px] h-[18px] top-[251px] left-[231px] tablet:top-[286px] tablet:left-[625px] laptop:w-[112px] laptop:h-[24px] laptop:top-[316px] laptop:right-[30px] laptop:text-[16px] laptop:leading-[24px]">
                {" "}
                فروش بیت کوین:{" "}
              </p>
              <p className={`absolute font-iranSansnumber  font-[400] text-[12px] leading-[18px] w-[112px] h-[18px] top-[251px] left-[8px] tablet:top-[286px] tablet:left-[405px] laptop:w-[130px] laptop:h-[24px] laptop:top-[316px] laptop:left-[595px] laptop:text-[16px] laptop:leading-[24px] ${Number(coin.daily_change_percent) >= 0 ? "text-green-600" : "text-red-600"}`}>
                {" "}
                {Number(coin.sell_irt_price)
                  .toFixed(0) 
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
              <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[251px] left-[27px] tablet:top-[286px] tablet:left-[420px] laptop:w-[30px] laptop:h-[24px] laptop:top-[316px] laptop:left-[598px] laptop:text-[16px] laptop:leading-[24px]">
                تومان
              </span>
              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[128px] h-[18px] top-[295px] left-[187px] tablet:top-[336px] tablet:left-[581px] laptop:w-[170px] laptop:h-[24px] laptop:top-[367px] laptop:right-[30px] laptop:text-[16px] laptop:leading-[24px]">
                {" "}
                بالاترین قیمت 24 ساعته :{" "}
              </p>
              <p className="absolute font-iranSansnumber text-[#147D03] font-[400] text-[12px] leading-[18px] w-[96px] h-[18px] top-[295px] left-[22px] tablet:top-[336px] tablet:left-[420px] laptop:w-[130px] laptop:h-[24px] laptop:top-[367px] laptop:left-[595px] laptop:text-[16px] laptop:leading-[24px]">
                {" "}
                1.000.000.000{" "}
              </p>
              <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[295px] left-[27px] tablet:top-[336px] tablet:left-[420px] laptop:w-[30px] laptop:h-[24px] laptop:top-[367px] laptop:left-[598px] laptop:text-[16px] laptop:leading-[24px]">
                تومان
              </span>
              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[143px] h-[18px] top-[338px] left-[172px] tablet:top-[388px] tablet:left-[566px] laptop:w-[192px] laptop:h-[24px] laptop:top-[418px] laptop:right-[30px] laptop:text-[16px] laptop:leading-[24px]">
                {" "}
                پایین ترین قیمت 24 ساعته :{" "}
              </p>
              <p className="absolute font-iranSansnumber text-[#FF6868] font-[400] text-[12px] leading-[18px] w-[96px] h-[18px] top-[338px] left-[22px] tablet:top-[388px] tablet:left-[420px] laptop:w-[130px] laptop:h-[24px] laptop:top-[418px] laptop:left-[595px] laptop:text-[16px] laptop:leading-[24px]">
                {" "}
                1.000.000.000{" "}
              </p>
              <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[338px] left-[27px] tablet:top-[388px] tablet:left-[420px] laptop:w-[30px] laptop:h-[24px] laptop:top-[418px] laptop:left-[598px] laptop:text-[16px] laptop:leading-[24px]">
                تومان
              </span>
              <Image
                src="/images/Line 102 (1).svg"
                alt="lineee"
                width={1}
                height={1}
                className="absolute w-[290px]    h-[1px] top-[386px] border-none  left-[25px]  border-[#EBEBEB] border-[1px]  tablet:w-[415px] tablet:top-[225px] tablet:left-[180px] tablet:rotate-[-90deg] laptop:rotate-[-90deg] laptop:w-[448px] laptop:left-[320px] laptop:top-[240px]"
              />
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[85px] h-[22px] top-[412px] left-[229.62px] tablet:top-[41px] tablet:left-[246px] laptop:w-[97px] laptop:h-[25px] laptop:top-[29px] laptop:left-[400px] laptop:text-[16px] laptop:leading-[25.04px]">
                ارسال می کنید:
              </p>
              <div className="absolute w-[291.04px] h-[47px] top-[446px] left-[25px] rounded-[8px] bg-[#F8F9FA] tablet:w-[304px] tablet:h-[47px] tablet:top-[75px] tablet:left-[26px] laptop:rounded-[50px] laptop:bg-[#F6F4F4] laptop:w-[474px] laptop:h-[47px] laptop:top-[72px] laptop:left-[27px]   "></div>
              <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[81px] h-[19px] top-[460px] left-[221.01px] tablet:top-[89px] tablet:left-[237px] laptop:w-[94px] laptop:h-[22px] laptop:top-[86px] laptop:left-[380px] laptop:text-[14px] laptop:leading-[21.91px]">
                {" "}
                مقدار را وارد کنید
              </p>
              <Image
                src="/images/Line 33.svg"
                alt="linee"
                width={1}
                height={1}
                className="absolute w-[37px] h-[1px] bg-[#9B9B9B] rotate-[-90deg] top-[469px]  left-[152.67px]  border-none tablet:top-[98px] tablet:left-[151px] laptop:w-[37px]  laptop:top-[95px] laptop:left-[232px]  "
              />
              <Image
                src="/images/Group 33.svg"
                alt="iran"
                width={10}
                height={10}
                className="absolute w-[24.89px] h-[26px] top-[458px] left-[119.16px] tablet:w-[26px] tablet:top-[87px] tablet:left-[116px] laptop:w-[26px] laptop:h-[26px] laptop:top-[84px] laptop:left-[210px] "
              />
              <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[28px] h-[19px] top-[460px] left-[83px] tablet:top-[89px] tablet:left-[83px] laptop:w-[33px] laptop:h-[22px] laptop:top-[86px] laptop:left-[165px] laptop:text-[14px] laptop:leading-[21.91px]">
                {" "}
                تومان
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[22.98px] h-[24px] text-[#696464]  top-[459px]  left-[29.7px]  border-none tablet:w-[24px] tablet:top-[88px] tablet:left-[33px] laptop:w-[97px] laptop:h-[25px] laptop:top-[86px] laptop:left-[10px]"
              />
              <div className="absolute bg-[#E8E8E8] w-[34.34px] h-[34.34px] top-[514px] left-[18px] rounded-[50%] tablet:top-[142px] tablet:left-[29px] laptop:w-[40px] laptop:h-[40px] laptop:top-[153px] laptop:left-[30px] "></div>
              <Image
                src="/images/noun-back-and-forth-1522889 1.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16.6px] h-[16.74px]   top-[524px]  left-[27.7px]  border-none rotate-[-180deg] text-[#000000] tablet:top-[151.44px] tablet:left-[38.04px] laptop:w-[17px] laptop:h-[16px] laptop:top-[165px] laptop:left-[42px] "
              />
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[85px] h-[22px] top-[548px] left-[229.62px] tablet:top-[176px] tablet:left-[233px] laptop:w-[108px] laptop:h-[25px] laptop:top-[191px] laptop:left-[390px] laptop:text-[16px] laptop:leading-[25.04px]">
                دریافت می کنید:
              </p>
              <div className="absolute w-[291.04px] h-[47px] top-[581px] left-[25px] rounded-[8px] bg-[#F8F9FA] tablet:w-[304px] tablet:h-[47px] tablet:top-[209px] tablet:left-[24px] laptop:rounded-[50px] laptop:bg-[#F6F4F4] laptop:w-[474px] laptop:h-[47px] laptop:top-[235px] laptop:left-[27px]"></div>
              <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[81px] h-[19px] top-[595px] left-[221.01px] tablet:top-[223px] tablet:left-[230px] laptop:w-[94px] laptop:h-[22px] laptop:top-[248px] laptop:left-[380px] laptop:text-[14px] laptop:leading-[21.91px]">
                {" "}
                مقدار نهایی
              </p>
              <Image
                src="/images/Line 33.svg"
                alt="linee"
                width={1}
                height={1}
                className="absolute w-[37px] h-[1px] bg-[#9B9B9B] rotate-[-90deg] top-[605px]  left-[152.67px]  border-none tablet:top-[232px] tablet:left-[151px] laptop:top-[260px] laptop:left-[232px]"
              />
              <Image
                src="/images/bitcoin (1) 3.svg"
                alt="bit"
                width={10}
                height={10}
                className="absolute w-[24.89px] h-[26px] top-[595px] left-[119.16px] tablet:w-[26px] tablet:top-[219px] tablet:left-[116px] laptop:w-[26px] laptop:h-[26px] laptop:top-[246px] laptop:left-[210px]"
              />
              <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[48px] h-[19px] top-[595px] left-[65px] tablet:top-[222px] tablet:left-[62px] laptop:w-[56px] laptop:h-[22px] laptop:top-[248px] laptop:left-[145px] laptop:text-[14px] laptop:leading-[21.91px]">
                {" "}
                بیت کوین
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[22.98px] h-[24px] text-[#696464]  top-[595px]  left-[29.7px]  border-none tablet:w-[24px] tablet:top-[220px] tablet:left-[33px] laptop:w-[97px] laptop:h-[25px] laptop:top-[249px] laptop:left-[10px]"
              />
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18.78px] w-[52px] h-[19px] top-[643px] left-[258px] tablet:top-[271px] tablet:left-[268px] laptop:w-[70px] laptop:h-[25px] laptop:top-[307px] laptop:left-[425px] laptop:text-[16px] laptop:leading-[25.04px]">
                نرخ ارز یک
              </p>
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18px] w-[51px] h-[18px] top-[642px] left-[19px]  tablet:top-[272px] tablet:left-[24px] laptop:w-[68px] laptop:h-[24px] laptop:top-[307px] laptop:left-[30px] laptop:text-[16px] laptop:leading-[24px]">
                5.600 دلار
              </p>
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18.78px] w-[47px] h-[19px] top-[681px] left-[262px] tablet:top-[309px] tablet:left-[274px] laptop:w-[70px] laptop:h-[25px] laptop:top-[347px] laptop:left-[425px] laptop:text-[16px] laptop:leading-[25.04px]">
                نرخ ارز دو
              </p>
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18px] w-[72px] h-[18px] top-[682px] left-[13px] tablet:top-[310px] tablet:left-[16px] laptop:w-[96px] laptop:h-[24px] laptop:top-[347px] laptop:left-[20px] laptop:text-[16px] laptop:leading-[24px]">
                49.750 تومان
              </p>
              <button className="absolute font-iranSans bg-[#1652F0] w-[291px] h-[47px] top-[731px] left-[18px] rounded-[8px] text-[14px] font-[700] leading-[21.91px] text-[#FFFFFF] tablet:w-[305px] tablet:top-[359px] tablet:left-[25px] laptop:hidden">
                ثبت سفارش خرید
              </button>
              <button className="absolute mobile:hidden tablet:hidden laptop:block border border-[#0D1A8E] text-[#0D1A8E] w-[474px] h-[47px] top-[397px] left-[30px] rounded-[50px] font-iranSans font-[700] text-[16px] leading-[25.04px] ">
                ادامه خرید
              </button>
            </div>
            <p className="absolute font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[291px] h-[31px] top-[956px] right-[123px] tablet:h-[47px] tablet:leading-[46.96px] tablet:text-[30px] tablet:w-[196px] tablet:top-[621px] tablet:right-[300px] laptop:w-[196px] laptop:h-[47px] laptop:top-[806px] laptop:right-[160px] laptop:text-[30px] laptop:leading-[46.96px] ">
              درباره
            </p>
            <span className="absolute font-iranSansnumber text-[#0D1A8E] text-[20px] font-[900]  leading-[31.3px] w-[291px] h-[18px] top-[956px] right-[170px] tablet:w-[100px] tablet:h-[47px] tablet:leading-[46.96px] tablet:text-[30px]  tablet:top-[621px] tablet:right-[370px] laptop:w-[196px] laptop:h-[47px] laptop:top-[806px] laptop:right-[230px] laptop:text-[30px] laptop:leading-[46.96px]">
              بیت کوین
            </span>
            <Image
              src="/images/Group 559.svg"
              alt="bitcoin"
              width={1}
              height={1}
              className="absolute w-[337px] h-[194.91px]  rounded-[20px] top-[1022px]  left-[19px] tablet:w-[555px]  tablet:h-[321px] tablet:top-[715px] tablet:left-[139px] laptop:w-[555px] laptop:h-[321px] laptop:top-[806px] laptop:left-[150px]"
            />
            <p className="absolute font-iranSans text-right text-[#000000] font-[400] text-[12px] leading-[28px] w-[333px] h-[252px] top-[1252px] left-[21px] tablet:text-[14px]  tablet:w-[735px]  tablet:h-[140px] tablet:top-[1083px] tablet:left-[50px] laptop:w-[555px] laptop:h-[245px] laptop:top-[882px] laptop:left-[735px] laptop:text-[16px] laptop:leading-[32px]">
              بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی
              دیجیتال است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1
              بازار قرار داشته و سهم 52.484 درصدی از کل بازار را در اختیار دارد
              . هر واحد از بیت کوین در این لحظه با قیمت 67977.99 دلار، با احتساب
              نرخ تتر 64575 تومان معادل 4389678704.25 تومان معامله می شود و حجم
              مبادلات روزانه آن 20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر
              1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ 1402 اسفند
              24 معادل 73628.4 دلار بوده که همینک -7.67 اختلاف دارد از آن زمان .
            </p>
            <p className="absolute font-iranSans text-center text-[#000000] font-[900] text-[20px] leading-[40px] w-[200px] h-[80px] top-[1480px] left-[78px] tablet:leading-[46.96px] tablet:text-[30px] tablet:w-[518px]  tablet:h-[55px] tablet:top-[1360px] tablet:left-[158px] laptop:w-[518px] laptop:h-[55px] laptop:top-[1243px] laptop:left-[820px] laptop:text-[30px] laptop:leading-[46.96px]">
              نمودار قیمت بیت کوین و نرخ برابری تومان

              <CoinChart />
            </p>
           
            <p className="absolute font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[266px] h-[31px] top-[2246px] left-[55px] tablet:leading-[46.96px] tablet:text-[30px] tablet:w-[399px]  tablet:h-[47px] tablet:top-[2036px] tablet:left-[218px] laptop:w-[399px] laptop:h-[47px] laptop:top-[2166px] laptop:left-[890px] laptop:text-[30px] laptop:leading-[46.96px]">
              توضیحات بیشتر درباره بیت کوین{" "}
            </p>
            <p className="absolute font-iranSans text-[#000000] font-[400] text-[12px] leading-[28px] w-[326px] h-[245px] top-[2316px] left-[25px] tablet:text-[14px] tablet:w-[726px]  tablet:h-[245px] tablet:top-[2119px] tablet:left-[54px] laptop:w-[1140px] laptop:h-[245px] laptop:top-[2262px] laptop:left-[150px] laptop:text-[16px] laptop:leading-[32px]">
              بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی
              دیجیتال است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1
              بازار قرار داشته و سهم 52.484 درصدی از کل بازار را در اختیار دارد
              . هر واحد از بیت کوین در این لحظه با قیمت 67977.99 دلار، با احتساب
              نرخ تتر 64575 تومان معادل 4389678704.25 تومان معامله می شود و حجم
              مبادلات روزانه آن 20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر
              1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ 1402 اسفند
              24 معادل 73628.4 دلار بوده که همینک -7.67 اختلاف دارد از آن زمان .
              بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی
              دیجیتال است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1
              بازار قرار داشته و سهم 52.484 درصدی از کل بازار را در اختیار دارد
              . هر واحد از بیت کوین در این لحظه با قیمت 67977.99 دلار، با احتساب
              نرخ تتر 64575 تومان معادل 4389678704.25 تومان معامله می شود و حجم
              مبادلات روزانه آن 20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر
              1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ 1402 اسفند
              24 معادل 73628.4 دلار بوده که همینک -7.67 اختلاف دارد از آن زمان .
            </p>
            <p className="absolute font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[121px] h-[31px] top-[2891px] left-[127px]  tablet:leading-[46.96px] tablet:text-[30px] tablet:w-[181px]  tablet:h-[47px] tablet:top-[2509px] tablet:left-[327px] laptop:w-[181px] laptop:h-[47px] laptop:top-[2615px] laptop:left-[1108px] laptop:text-[30px] laptop:leading-[46.96px]">
              سوالات متداول
            </p>
            <div className="absolute w-[335px] h-[225px] top-[2953px] left-[20px] rounded-[15px] border-[1px]  border-[#F1F1F1] tablet:text-[30px] tablet:w-[734px]  tablet:h-[223px] tablet:top-[2605px] tablet:left-[51px] laptop:w-[1140px] laptop:h-[227px] laptop:top-[2711px] laptop:left-[150px]">
              <p className="absolute font-iranSans text-[#000000] font-[500] text-[16px] leading-[25.04px] w-[96px] h-[25px] top-[19px] left-[219px] tablet:text-[18px] tablet:leading-[28.11px] tablet:w-[108px]  tablet:h-[28px] tablet:top-[40px] tablet:left-[599px]  laptop:top-[40px] laptop:left-[983px] ">
                رمز ارز چیست؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000]  top-[19px]  left-[37px]  rotate-[180deg] tablet:text-[30px] tablet:w-[24px]  tablet:h-[24px] tablet:top-[50px] tablet:left-[15px] laptop:top-[30px] laptop:left-[18px]"
              />
              <p className="absolute font-iranSans text-[#000000] font-[400] text-[12px] leading-[24px] w-[294px] h-[144px] top-[64px] left-[21px] tablet:leading-[32px] tablet:text-[14px] tablet:w-[690px]  tablet:h-[96px] tablet:top-[96px] tablet:left-[17px] laptop:w-[1062px] laptop:h-[64px] laptop:top-[98px] laptop:left-[29px] laptop:text-[16px]">
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافی ...
              </p>
            </div>
            <div className="absolute w-[336px] h-[50px] top-[3196px] left-[20px] rounded-[15px] border-[1px]  border-[#F1F1F1]  tablet:w-[734px]  tablet:h-[70px] tablet:top-[2852px] tablet:left-[50px] laptop:w-[1140px] laptop:h-[88px] laptop:top-[2953px] laptop:left-[150px]">
              <p className="absolute font-iranSans text-[#000000] font-[400] text-[12px] leading-[18.78px] w-[242px] h-[18px] top-[16px] left-[73px] tablet:leading-[21.91px] tablet:text-[14px] tablet:w-[242px]  tablet:h-[18px] tablet:top-[23px] tablet:left-[466px] laptop:w-[311px] laptop:h-[28px] laptop:top-[29px] laptop:left-[780px] laptop:text-[18px] laptop:leading-[28.17px]">
                آیا می توانم با کارت بانکی بیت کوین بخرم؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000]  top-[16px]  left-[21px]  rotate-[-0deg]  tablet:w-[24px]  tablet:h-[24px] tablet:top-[23px] tablet:left-[18px]"
              />
            </div>
            <div className="absolute w-[336px] h-[50px] top-[3264px] left-[20px] rounded-[15px] border-[1px]  border-[#F1F1F1]  tablet:w-[734px]  tablet:h-[70px] tablet:top-[2946px] tablet:left-[51px] laptop:w-[1140px] laptop:h-[88px] laptop:top-[3056px] laptop:left-[150px]">
              <p className="absolute font-iranSans text-[#000000] font-[400] text-[12px] leading-[18.78px] w-[138px] h-[19px] top-[16px] left-[176px] tablet:leading-[21.91px] tablet:text-[14px] tablet:w-[242px]  tablet:h-[18px] tablet:top-[20px] tablet:left-[465px] laptop:w-[311px] laptop:h-[28px] laptop:top-[29px] laptop:left-[780px] laptop:text-[18px] laptop:leading-[28.17px]">
                چرا باید از والت استفاده کنم؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000]  top-[16px]  left-[21px]  rotate-[-0deg]  tablet:w-[24px]  tablet:h-[24px] tablet:top-[20px] tablet:left-[18px] "
              />
            </div>
            <div className="absolute w-[334px] h-[454px] top-[3352px] left-[21px] rounded-[15px]  bg-[#F8F9FA] tablet:w-[734px]  tablet:h-[294px] tablet:top-[3069px] tablet:left-[50px] laptop:w-[1137px] laptop:h-[366px] laptop:top-[3202px] laptop:left-[150px]">
              <p className="absolute font-iranSans text-[#000000] font-[900] text-[16px] leading-[25.04px] text-center  w-[240px] h-[25px] top-[49px] left-[47px] tablet:leading-[31.3px] tablet:text-[20px] tablet:w-[300px]  tablet:h-[31px] tablet:top-[50px] tablet:left-[77px] laptop:w-[420px] laptop:h-[44px] laptop:top-[53px] laptop:left-[234px] laptop:text-[28px] laptop:leading-[43.83px]">
                علاقه مند به خرید بیت کوین هستید؟
              </p>
              <p className="absolute font-iranSans text-[#000000] font-[300] text-[12px] leading-[24px] text-center  w-[246px] h-[48px] top-[91px] left-[44px] tablet:leading-[32px] tablet:text-right tablet:text-[16px] tablet:w-[339px]  tablet:h-[64px] tablet:top-[107px] tablet:left-[6px] laptop:w-[476px] laptop:h-[96px] laptop:top-[140px] laptop:text-right laptop:left-[130px] laptop:text-[22px] laptop:leading-[48px]">
                ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین
                داشته باشید.
              </p>
              <button className="absolute font-iranSans font-[700] rounded-[50px] text-[16px] bg-[#1652F0] leading-[25.04px] text-center left-[76px]  top-[156px] h-[47px] w-[182px] text-[#ffffff]  tablet:top-[197px] tablet:left-[165px] laptop:w-[182px] laptop:h-[47px] laptop:top-[279px] laptop:left-[430px] ">
                اکنون شروع کنید
              </button>
              <Image
                src="/images/sammy-line-man-with-money 1.svg"
                alt="boy"
                width={1}
                height={1}
                className="absolute w-[196px] h-[196px]   top-[227px]  left-[65px]  tablet:w-[265px]  tablet:h-[265px] tablet:top-[14px] tablet:left-[450px] laptop:w-[337px] laptop:h-[337px] laptop:top-[15px] laptop:left-[740px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>

   
  );
}
