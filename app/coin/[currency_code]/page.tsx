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
          `https://b.wallet.ir/coinlist/list/?page=1&limit=10`
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
          <div className="  w-[375px] h-[3837px] md:w-[834px] md:h-[2860px] lg:w-full lg:bg-blue-200 lg:h-[3065px] top-[0px]">
            <div className=" absolute  shadow sm:rounded-[30px] border-[#ffffff] bg-[#ffffff] w-[337px] h-[799px] top-[104px] left-[20px] rounded-[30px] blur-[#0D1A8E14] md:w-[734px] md:h-[448px] md:top-[114px] md:left-[50px] lg:w-[1000px] lg:h-[481px] lg:top-[70px] lg:left-[15px] ">
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[93px] h-[22px] top-[32px] left-[222px] md:top-[45px] md:left-[616px] lg:w-[107px] lg:h-[25px] lg:top-[29px] lg:right-[30px] lg:text-[16px] lg:leading-[25.04px] ">
                قیمت لحظه ای :
              </p>
              <Image
                src={coin.icon}
                alt={coin.fa_name}
                width={60}
                height={60}
                className="absolute w-[43px] h-[43px] top-[75px] left-[272px] md:w-[61px] md:h-[61px] md:top-[87px] md:left-[648px]  lg:w-[73px] lg:h-[73px] lg:top-[80px] lg:right-[30px]  "
              />
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[56px] h-[22px] top-[70px] left-[210px] md:top-[87px] lg:w-[150px] lg:h-[28px] lg:top-[85px] lg:right-[110px] lg:text-[18px] lg:leading-[28.17px]  ">
                {coin.fa_name}
              </p>
              <p className="absolute   font-iranSansnumber text-right overflow-hidden whitespace-nowrap text-[#000000] font-[700] text-[14px] leading-[21px] w-[142px] h-[21px] top-[75px] left-[5px] md:top-[88px] md:left-[385px] lg:w-[150px] lg:h-[27px] lg:top-[87px] lg:left-[580px] lg:text-[18px] lg:leading-[27px]">
                {Number(coin.irt_price)
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                تومان
              </p>

              <p className="absolute font-iranSans text-[#696464] font-[700] text-[14px] leading-[21.91px] w-[27px] h-[22px] top-[100px] left-[239px] md:top-[117px] md:left-[609px]  lg:w-[34px] lglg:h-[28px] lg:top-[125px] lg:right-[110px] lg:text-[18px] lg:leading-[28.17px]">
                {coin.currency_code}
              </p>
              <p className="absolute font-iranSansnumber text-[#696464] font-[400] text-[14px] leading-[21px] w-[71px] h-[21px] top-[104px] left-[25px] md:top-[117px] md:left-[600px] lg:w-[92px] lg:h-[27px] lg:top-[126px] lg:left-[560px] lg:text-[18px] lg:leading-[27px]">
                $
                {Number(coin.price)
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>

              <Image
                src="/images/Line 102 (1).svg"
                alt="line"
                width={507}
                height={507}
                className="absolute  w-[290px] h-[1px] top-[140px] p-[0px] left-[25px]  border-[#EBEBEB] border-none rotate-[-180deg] md:top-[169px] md:left-[400px] md:w-[324px] lg:w-[400px] lg:top-[178px] lg:right-[30px] "
              />

              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[91px] h-[18px] top-[164px] left-[222px] md:top-[186px] md:left-[618px] lg:w-[121px] lg:h-[24px] lg:top-[214px] lg:right-[30px] lg:text-[16px] lg:leading-[24px] ">
                {" "}
                تغییر قیمت امروز :{" "}
              </p>

              <p
                className={`absolute font-iranSansnumber text-[#147D03] font-[400] text-[12px] leading-[18px] w-[39px] h-[18px] top-[164px] left-[25px] md:top-[186px] md:left-[415px] lg:w-[52px] lg:h-[24px] lg:top-[214px] lg:left-[575px] lg:text-[16px] lg:leading-[24px]
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
              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[79px] h-[18px] top-[208px] left-[234px] md:top-[236px] md:left-[630px] lg:w-[105px] lg:h-[24px] lg:top-[265px] lg:right-[30px] lg:text-[16px] lg:leading-[24px]">
                {" "}
                خرید بیت کوین:{" "}
              </p>
              <p
                className={`absolute font-iranSansnumber  font-[400] text-[12px] leading-[18px] w-[111px] h-[18px] top-[208px] left-[8px] md:top-[236px] md:left-[405px] lg:w-[130px] lg:h-[24px] lg:top-[265px] lg:left-[595px] lg:text-[16px] lg:leading-[24px] ${
                  Number(coin.daily_change_percent) >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {Number(coin.buy_irt_price)
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
              <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[208px] left-[25px] md:top-[236px] md:left-[420px] lg:w-[30px] lg:h-[24px] lg:top-[265px] lg:left-[590px] lg:text-[16px] lg:leading-[24px]">
                تومان
              </span>
              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[84px] h-[18px] top-[251px] left-[231px] md:top-[286px] md:left-[625px] lg:w-[112px] lg:h-[24px] lg:top-[316px] lg:right-[30px] lg:text-[16px] lg:leading-[24px]">
                {" "}
                فروش بیت کوین:{" "}
              </p>
              <p
                className={`absolute font-iranSansnumber  font-[400] text-[12px] leading-[18px] w-[112px] h-[18px] top-[251px] left-[8px] md:top-[286px] md:left-[405px] laptop:w-[130px] lg:h-[24px] lg:top-[316px] lg:left-[615px] lg:text-[16px] lg:leading-[24px] ${
                  Number(coin.daily_change_percent) >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {" "}
                {Number(coin.sell_irt_price)
                  .toFixed(0)
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
              </p>
              <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[251px] left-[27px] md:top-[286px] md:left-[420px] lg:w-[30px] lg:h-[24px] lg:top-[316px] lg:left-[590px] lg:text-[16px] lg:leading-[24px]">
                تومان
              </span>
              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[128px] h-[18px] top-[295px] left-[187px] md:top-[336px] md:left-[581px] lg:w-[170px] lg:h-[24px] lg:top-[367px] lg:right-[30px] lg:text-[16px] lg:leading-[24px]">
                {" "}
                بالاترین قیمت 24 ساعته :{" "}
              </p>
              <p className="absolute font-iranSansnumber text-[#147D03] font-[400] text-[12px] leading-[18px] w-[96px] h-[18px] top-[295px] left-[22px] md:top-[336px] md:left-[420px] lg:w-[130px] lg:h-[24px] lg:top-[367px] lg:left-[595px] lg:text-[16px] lg:leading-[24px]">
                {" "}
                1.000.000.000{" "}
              </p>
              <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[295px] left-[27px] md:top-[336px] md:left-[420px] lg:w-[30px] lg:h-[24px] lg:top-[367px] lg:left-[590px] lg:text-[16px] lg:leading-[24px]">
                تومان
              </span>
              <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[143px] h-[18px] top-[338px] left-[172px] md:top-[388px] md:left-[566px] lg:w-[192px] lg:h-[24px] lg:top-[418px] lg:right-[30px] lg:text-[16px] lg:leading-[24px]">
                {" "}
                پایین ترین قیمت 24 ساعته :{" "}
              </p>
              <p className="absolute font-iranSansnumber text-[#FF6868] font-[400] text-[12px] leading-[18px] w-[96px] h-[18px] top-[338px] left-[22px] md:top-[388px] md:left-[420px] lg:w-[130px] lg:h-[24px] lg:top-[418px] lg:left-[595px] lg:text-[16px] lg:leading-[24px]">
                {" "}
                1.000.000.000{" "}
              </p>
              <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[338px] left-[27px] md:top-[388px] md:left-[420px] lg:w-[30px] lg:h-[24px] lg:top-[418px] lg:left-[590px] lg:text-[16px] lg:leading-[24px]">
                تومان
              </span>
              <Image
                src="/images/Line 102 (1).svg"
                alt="lineee"
                width={1}
                height={1}
                className="absolute w-[290px]    h-[1px] top-[386px] border-none  left-[25px]  border-[#EBEBEB] border-[1px]  md:w-[415px] md:top-[225px] md:left-[180px] md:rotate-[-90deg] lg:rotate-[-90deg] lg:w-[448px] lg:left-[320px] lg:top-[240px]"
              />
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[85px] h-[22px] top-[412px] left-[229.62px] md:top-[41px] md:left-[246px] lg:w-[97px] lg:h-[25px] lg:top-[29px] lg:left-[400px] lg:text-[16px] lg:leading-[25.04px]">
                ارسال می کنید:
              </p>
              <div className="absolute w-[291.04px] h-[47px] top-[446px] left-[25px] rounded-[8px] bg-[#F8F9FA] md:w-[304px] md:h-[47px] md:top-[75px] md:left-[26px] lg:rounded-[50px] lg:bg-[#F6F4F4] lg:w-[474px] lg:h-[47px] lg:top-[72px] lg:left-[27px]   "></div>
              <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[81px] h-[19px] top-[460px] left-[221.01px] md:top-[89px] md:left-[237px] lg:w-[94px] lg:h-[22px] lg:top-[86px] lg:left-[380px] lg:text-[14px] lg:leading-[21.91px]">
                {" "}
                مقدار را وارد کنید
              </p>
              <Image
                src="/images/Line 33.svg"
                alt="linee"
                width={1}
                height={1}
                className="absolute w-[37px] h-[1px] bg-[#9B9B9B] rotate-[-90deg] top-[469px]  left-[152.67px]  border-none md:top-[98px] md:left-[151px] lg:w-[37px]  lg:top-[95px] lg:left-[232px]  "
              />
              <Image
                src="/images/Group 33.svg"
                alt="iran"
                width={10}
                height={10}
                className="absolute w-[24.89px] h-[26px] top-[458px] left-[119.16px] md:w-[26px] md:top-[87px] md:left-[116px] lg:w-[26px] lg:h-[lg26px] lg:top-[84px] lg:left-[210px] "
              />
              <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[28px] h-[19px] top-[460px] left-[83px] md:top-[89px] md:left-[83px] lg:w-[33px] lg:h-[22px] lg:top-[86px] lg:left-[165px] lg:text-[14px] lg:leading-[21.91px]">
                {" "}
                تومان
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[22.98px] h-[24px] text-[#696464]  top-[459px]  left-[29.7px]  border-none md:w-[24px] md:top-[88px] md:left-[33px] lg:w-[97px] lg:h-[25px] lg:top-[86px] lg:left-[10px]"
              />
              <div className="absolute bg-[#E8E8E8] w-[34.34px] h-[34.34px] top-[514px] left-[18px] rounded-[50%] md:top-[142px] md:left-[29px] lg:w-[40px] lg:h-[40px] lg:top-[153px] lg:left-[30px] "></div>
              <Image
                src="/images/noun-back-and-forth-1522889 1.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16.6px] h-[16.74px]   top-[524px]  left-[27.7px]  border-none rotate-[-180deg] text-[#000000] md:top-[151.44px] md:left-[38.04px] lg:w-[17px] lg:h-[16px] lg:top-[165px] lg:left-[42px] "
              />
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[85px] h-[22px] top-[548px] left-[229.62px] md:top-[176px] md:left-[233px] lg:w-[108px] lg:h-[25px] lg:top-[191px] lg:left-[390px] lg:text-[16px] lg:leading-[25.04px]">
                دریافت می کنید:
              </p>
              <div className="absolute w-[291.04px] h-[47px] top-[581px] left-[25px] rounded-[8px] bg-[#F8F9FA] md:w-[304px] md:h-[47px] md:top-[209px] md:left-[24px] lg:rounded-[50px] lg:bg-[#F6F4F4] lg:w-[474px] lg:h-[47px] lg:top-[235px] lg:left-[27px]"></div>
              <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[81px] h-[19px] top-[595px] left-[221.01px] md:top-[223px] md:left-[230px] lg:w-[94px] lg:h-[22px] lg:top-[248px] lg:left-[380px] lg:text-[14px] lg:leading-[21.91px]">
                {" "}
                مقدار نهایی
              </p>
              <Image
                src="/images/Line 33.svg"
                alt="linee"
                width={1}
                height={1}
                className="absolute w-[37px] h-[1px] bg-[#9B9B9B] rotate-[-90deg] top-[605px]  left-[152.67px]  border-none md:top-[232px] md:left-[151px] lg:top-[260px] lg:left-[232px]"
              />
              <Image
                src="/images/bitcoin (1) 3.svg"
                alt="bit"
                width={10}
                height={10}
                className="absolute w-[24.89px] h-[26px] top-[595px] left-[119.16px] md:w-[26px] md:top-[219px] md:left-[116px] lg:w-[26px] lg:h-[26px] lg:top-[246px] lg:left-[210px]"
              />
              <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[48px] h-[19px] top-[595px] left-[65px] md:top-[222px] md:left-[62px] lg:w-[56px] lg:h-[22px] lg:top-[248px] lg:left-[145px] lg:text-[14px] lg:leading-[21.91px]">
                {" "}
                بیت کوین
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[22.98px] h-[24px] text-[#696464]  top-[595px]  left-[29.7px]  border-none md:w-[24px] md:top-[220px] md:left-[33px] lg:w-[97px] lg:h-[25px] lg:top-[249px] lg:left-[10px]"
              />
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18.78px] w-[52px] h-[19px] top-[643px] left-[258px] md:top-[271px] md:left-[268px] lg:w-[70px] lg:h-[25px] lg:top-[307px] lg:left-[425px] lg:text-[16px] lg:leading-[25.04px]">
                نرخ ارز یک
              </p>
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18px] w-[51px] h-[18px] top-[642px] left-[19px]  md:top-[272px] md:left-[24px] lg:w-[68px] lg:h-[24px] lg:top-[307px] lg:left-[30px] lg:text-[16px] lg:leading-[24px]">
                5.600 دلار
              </p>
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18.78px] w-[47px] h-[19px] top-[681px] left-[262px] md:top-[309px] md:left-[274px] lg:w-[70px] lg:h-[25px] lg:top-[347px] lg:left-[425px] lg:text-[16px] lg:leading-[25.04px]">
                نرخ ارز دو
              </p>
              <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18px] w-[72px] h-[18px] top-[682px] left-[13px] md:top-[310px] md:left-[16px] lg:w-[96px] lg:h-[24px] lg:top-[347px] lg:left-[20px] lg:text-[16px] lg:leading-[24px]">
                49.750 تومان
              </p>
              <button className="absolute font-iranSans bg-[#1652F0] w-[291px] h-[47px] top-[731px] left-[18px] rounded-[8px] text-[14px] font-[700] leading-[21.91px] text-[#FFFFFF] md:w-[305px] md:top-[359px] md:left-[25px] lg:hidden">
                ثبت سفارش خرید
              </button>
              <button className="absolute hidden md:hidden lg:block border border-[#0D1A8E] text-[#0D1A8E] w-[474px] h-[47px] top-[397px] left-[30px] rounded-[50px] font-iranSans font-[700] text-[16px] leading-[25.04px] ">
                ادامه خرید
              </button>
            </div>
            <p className="absolute font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[291px] h-[31px] top-[956px] left-[123px] md:h-[47px] md:leading-[46.96px] md:text-[30px] md:w-[196px] md:top-[621px] md:left-[750px] lg:w-[196px] lg:h-[47px] lg:top-[680px] lg:left-[800px] lg:text-[30px] lg:leading-[46.96px] ">
              درباره
            </p>
            <span className="absolute font-iranSansnumber text-[#0D1A8E] text-[20px] font-[900]  leading-[31.3px] w-[291px] h-[18px] top-[956px] left-[170px] md:w-[100px] md:h-[47px] md:leading-[46.96px] md:text-[30px]  md:top-[621px] md:left-[370px] lg:w-[196px] lg:h-[47px] lg:top-[680px] lg:left-[730px] lg:text-[30px] lg:leading-[46.96px]">
              بیت کوین
            </span>
            <Image
              src="/images/Group 559.svg"
              alt="bitcoin"
              width={1}
              height={1}
              className="absolute w-[337px] h-[194.91px]  rounded-[20px] top-[1022px]  left-[19px] md:w-[555px]  md:h-[321px] md:top-[715px] md:left-[139px] lg:w-[450px] lg:h-[321px] lg:top-[680px] lg:left-[20px]"
            />
            <p className="absolute font-iranSans text-right text-[#000000] font-[400] text-[12px] leading-[28px] w-[333px] h-[252px] top-[1252px] left-[21px] md:text-[14px]  md:w-[735px]  md:h-[140px] md:top-[1083px] md:left-[50px] lg:w-[480px] lg:h-[245px] lg:top-[740px] lg:left-[515px] lg:text-[14px] lg:leading-[32px]">
              بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی
              دیجیتال است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1
              بازار قرار داشته و سهم 52.484 درصدی از کل بازار را در اختیار دارد
              . هر واحد از بیت کوین در این لحظه با قیمت 67977.99 دلار، با احتساب
              نرخ تتر 64575 تومان معادل 4389678704.25 تومان معامله می شود و حجم
              مبادلات روزانه آن 20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر
              1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ 1402 اسفند
              24 معادل 73628.4 دلار بوده که همینک -7.67 اختلاف دارد از آن زمان .
            </p>
            <p className="absolute font-iranSans text-center text-[#000000] font-[900] text-[20px] leading-[40px] w-[200px] h-[80px] top-[1480px] left-[78px] md:leading-[46.96px] md:text-[30px] md:w-[518px]  md:h-[55px] md:top-[1360px] md:left-[158px] lg:w-[518px] lg:h-[55px] lg:top-[1050px] lg:left-[495px] lg:text-[30px] lg:leading-[46.96px]">
              نمودار قیمت بیت کوین ونرخ برابری تومان
            </p>
            <div className="absolute lg:top-[1150px] lg:left-[20px]">
              <CoinChart />
            </div>

            <p className="absolute font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[266px] h-[31px] top-[2246px] left-[55px] md:leading-[46.96px] md:text-[30px] md:w-[399px]  md:h-[47px] md:top-[2036px] md:left-[218px] lg:w-[399px] lg:h-[47px] lg:top-[1850px] lg:left-[600px] lg:text-[30px] lg:leading-[46.96px]">
              توضیحات بیشتر درباره بیت کوین{" "}
            </p>
            <p className="absolute font-iranSans text-[#000000] font-[400] text-[12px] leading-[28px] w-[326px] h-[245px] top-[2316px] left-[25px] md:text-[14px] md:w-[726px]  md:h-[245px] md:top-[2119px] md:left-[54px] lg:w-[980px] lg:h-[245px] lg:top-[1950px] lg:left-[20px] lg:text-[16px] lg:leading-[32px]">
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
            <p className="absolute font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[121px] h-[31px] top-[2891px] left-[127px]  md:leading-[46.96px] md:text-[30px] md:w-[181px]  md:h-[47px] md:top-[2509px] md:left-[327px] lg:w-[181px] lg:h-[47px] lg:top-[2280px] lg:left-[820px] lg:text-[30px] lg:leading-[46.96px]">
              سوالات متداول
            </p>
            <div className="absolute w-[335px] h-[225px] top-[2953px] left-[20px] rounded-[15px] border-[1px]  border-[#F1F1F1] md:text-[30px] md:w-[734px]  md:h-[223px] md:top-[2605px] md:left-[51px] lg:w-[980px] lg:h-[227px] lg:top-[2340px] lg:left-[20px]">
              <p className="absolute font-iranSans text-[#000000] font-[500] text-[16px] leading-[25.04px] w-[96px] h-[25px] top-[19px] left-[219px] md:text-[18px] md:leading-[28.11px] md:w-[108px]  md:h-[28px] md:top-[40px] md:left-[599px]  lg:top-[40px] lg:left-[830px] ">
                رمز ارز چیست؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000]  top-[19px]  left-[37px]  rotate-[180deg] md:text-[30px] md:w-[24px]  md:h-[24px] md:top-[50px] md:left-[15px] lg:top-[30px] lg:left-[18px]"
              />
              <p className="absolute font-iranSans text-[#000000] font-[400] text-[12px] leading-[24px] w-[294px] h-[144px] top-[64px] left-[21px] md:leading-[32px] md:text-[14px] md:w-[690px]  md:h-[96px] md:top-[96px] md:left-[17px] lg:w-[920px] lg:h-[64px] lg:top-[98px] lg:left-[10] lg:text-[14px]">
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافی ...
              </p>
            </div>
            <div className="absolute w-[336px] h-[50px] top-[3196px] left-[20px] rounded-[15px] border-[1px]  border-[#F1F1F1]  md:w-[734px]  md:h-[70px] md:top-[2852px] md:left-[50px] lg:w-[980px] lg:h-[88px] lg:top-[2580px] lg:left-[20px]">
              <p className="absolute font-iranSans text-[#000000] font-[400] text-[12px] leading-[18.78px] w-[242px] h-[18px] top-[16px] left-[73px] md:leading-[21.91px] md:text-[14px] md:w-[242px]  md:h-[18px] md:top-[23px] md:left-[466px] lg:w-[311px] lg:h-[28px] lg:top-[29px] lg:left-[630px] lg:text-[18px] lg:leading-[28.17px]">
                آیا می توانم با کارت بانکی بیت کوین بخرم؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000]  top-[16px]  left-[21px]  rotate-[-0deg]  md:w-[24px]  md:h-[24px] md:top-[23px] md:left-[18px]"
              />
            </div>
            <div className="absolute w-[336px] h-[50px] top-[3264px] left-[20px] rounded-[15px] border-[1px]  border-[#F1F1F1]  md:w-[734px]  md:h-[70px] md:top-[2946px] md:left-[51px] lg:w-[1140px] lg:h-[88px] lg:top-[2680px] lg:left-[20px]">
              <p className="absolute font-iranSans text-[#000000] font-[400] text-[12px] leading-[18.78px] w-[138px] h-[19px] top-[16px] left-[176px] md:leading-[21.91px] md:text-[14px] md:w-[242px]  md:h-[18px] md:top-[20px] md:left-[465px] lg:w-[311px] lg:h-[28px] lg:top-[29px] lg:left-[780px] lg:text-[18px] lg:leading-[28.17px]">
                چرا باید از والت استفاده کنم؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000]  top-[16px]  left-[21px]  rotate-[-0deg]  md:w-[24px]  md:h-[24px] md:top-[20px] md:left-[18px] "
              />
            </div>
            <div className="absolute w-[334px] h-[454px] top-[3352px] left-[21px] rounded-[15px]  bg-[#F8F9FA] md:w-[734px]  md:h-[294px] md:top-[3069px] md:left-[50px] lg:w-[1137px] lg:h-[366px] lg:top-[3202px] lg:left-[150px]">
              <p className="absolute font-iranSans text-[#000000] font-[900] text-[16px] leading-[25.04px] text-center  w-[240px] h-[25px] top-[49px] left-[47px] md:leading-[31.3px] md:text-[20px] md:w-[300px]  md:h-[31px] md:top-[50px] md:left-[77px] lg:w-[420px] lg:h-[44px] lg:top-[53px] lg:left-[234px] lg:text-[28px] lg:leading-[43.83px]">
                علاقه مند به خرید بیت کوین هستید؟lg
              </p>
              <p className="absolute font-iranSans text-[#000000] font-[300] text-[12px] leading-[24px] text-center  w-[246px] h-[48px] top-[91px] left-[44px] md:leading-[32px] md:text-right md:text-[16px] md:w-[339px]  md:h-[64px] md:top-[107px] md:left-[6px] lg:w-[476px] lg:h-[96px] lg:top-[140px] lg:text-right lg:left-[130px] lg:text-[22px] lg:leading-[48px]">
                ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین
                داشته باشید.
              </p>
              <button className="absolute font-iranSans font-[700] rounded-[50px] text-[16px] bg-[#1652F0] leading-[25.04px] text-center left-[76px]  top-[156px] h-[47px] w-[182px] text-[#ffffff]  md:top-[197px] md:left-[165px] lg:w-[182px] lg:h-[47px] lg:top-[279px] lg:left-[430px] ">
                اکنون شروع کنید
              </button>
              <Image
                src="/images/sammy-line-man-with-money 1.svg"
                alt="boy"
                width={1}
                height={1}
                className="absolute w-[196px] h-[196px]   top-[227px]  left-[65px]  md:w-[265px]  md:h-[265px] md:top-[14px] md:left-[450px] lg:w-[337px] lg:h-[337px] lg:top-[15px] lg:left-[740px] "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
