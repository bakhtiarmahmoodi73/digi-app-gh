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
    <div className="relative overflow-x-hidden overflow-y-auto w-full min-h-screen bg-white flex flex-col items-center">
      <div className="relative flex-1 w-full max-w-[1536px]">
        <div className="relative flex-1">
          <div className="w-[375px] h-[3837px] sm:h-[2300px] md:w-[834px] md:h-[2860px] lg:w-full top-[0px] 2xl:flex 2xl:flex-col 2xl:items-center">
            {/* کارت اصلی - کاملاً بازنویسی شده برای 2xl */}
            <div className="absolute sm:w-[600px] xl:w-[1240px] shadow sm:rounded-[30px] sm:h-[500px] border-[#ffffff] bg-[#ffffff] w-[337px] h-[799px] top-[50px] left-[20px] rounded-[30px] blur-[#0D1A8E14] md:w-[734px] md:h-[448px] md:top-[114px] md:left-[50px] lg:w-[1000px] lg:h-[481px] lg:top-[70px] lg:left-[15px] 2xl:relative 2xl:left-0 2xl:top-0 2xl:mx-auto 2xl:w-[1400px] 2xl:h-[550px] 2xl:mt-[50px]">
              {/* بخش سمت راست - اطلاعات قیمت */}
              <div className="2xl:absolute 2xl:left-[750px] 2xl:top-[40px] 2xl:w-[600px] 2xl:h-[400px]">
                <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[100px] h-[22px] top-[32px] left-[222px] md:top-[45px] md:left-[616px] sm:top-[45px] sm:left-[480px] lg:w-[107px] lg:h-[25px] lg:top-[29px] lg:right-[30px] lg:text-[16px] lg:leading-[25.04px] 2xl:static 2xl:w-auto 2xl:h-auto 2xl:text-[20px] 2xl:mb-[10px]">
                  قیمت لحظه ای :
                </p>
                <div className="2xl:flex 2xl:items-center 2xl:mb-[20px]">
                  <Image
                    src={coin.icon}
                    alt={coin.fa_name}
                    width={60}
                    height={60}
                    className="absolute w-[43px] h-[43px] top-[75px] left-[272px] md:w-[61px] md:h-[61px] md:top-[87px] md:left-[648px] sm:top-[87px] sm:left-[540px] lg:w-[73px] lg:h-[73px] lg:top-[80px] lg:right-[30px] 2xl:static 2xl:w-[70px] 2xl:h-[70px] 2xl:ml-[15px]"
                  />
                  <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[56px] h-[22px] top-[70px] left-[210px] md:top-[87px] sm:top-[80px] sm:left-[470px] lg:w-[150px] lg:h-[28px] lg:top-[85px] lg:right-[110px] lg:text-[18px] lg:leading-[28.17px] 2xl:static 2xl:w-auto 2xl:text-[22px] 2xl:ml-[10px]">
                    {coin.fa_name}
                  </p>
                  <p className="absolute xl:w-[175px] xl:left-[560px] font-iranSansnumber text-right overflow-hidden whitespace-nowrap text-[#000000] font-[700] text-[14px] leading-[21px] w-[142px] h-[21px] top-[75px] left-[5px] md:top-[88px] md:left-[385px] lg:w-[150px] sm:top-[80px] sm:left-[295px] lg:h-[27px] lg:top-[87px] lg:left-[580px] lg:text-[18px] lg:leading-[27px] 2xl:static 2xl:w-auto 2xl:text-[24px] 2xl:mr-auto">
                    {Number(coin.irt_price)
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                    تومان
                  </p>
                </div>

                <div className="2xl:flex 2xl:justify-between 2xl:mb-[15px]">
                  <p className="absolute font-iranSans text-[#696464] font-[700] text-[14px] leading-[21.91px] w-[27px] h-[22px] top-[100px] left-[239px] md:top-[117px] md:left-[609px] sm:top-[110px] sm:left-[495px] lg:w-[34px] lg:h-[28px] lg:top-[125px] lg:right-[110px] lg:text-[18px] lg:leading-[28.17px] 2xl:static 2xl:text-[16px]">
                    {coin.currency_code}
                  </p>
                  <p className="absolute font-iranSansnumber text-[#696464] font-[400] text-[14px] leading-[21px] w-[71px] h-[21px] top-[104px] left-[25px] md:top-[117px] md:left-[600px] sm:top-[110px] sm:left-[310px] lg:w-[92px] lg:h-[27px] lg:top-[126px] lg:left-[560px] lg:text-[18px] lg:leading-[27px] 2xl:static 2xl:text-[16px]">
                    $
                    {Number(coin.price)
                      .toFixed(0)
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                  </p>
                </div>

                <Image
                  src="/images/Line 102 (1).svg"
                  alt="line"
                  width={900}
                  height={507}
                  className="absolute xl:w-[500px] xl:left-[600px] w-[290px] h-[1px] top-[140px] p-[0px] left-[25px] border-[#EBEBEB] border-none rotate-[-180deg] md:top-[169px] md:left-[400px] md:w-[324px] sm:top-[170px] sm:left-[330px] sm:w-[250px] lg:w-[400px] lg:top-[178px] lg:left-[580px] 2xl:static 2xl:w-full 2xl:my-[20px]"
                />

                {/* ردیف اطلاعات قیمت */}
                <div className="2xl:grid 2xl:grid-cols-2 2xl:gap-x-[100px] 2xl:gap-y-[25px]">
                  <div className="2xl:flex 2xl:justify-between">
                    <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[91px] h-[18px] top-[164px] left-[222px] md:top-[186px] md:left-[618px] sm:top-[186px] sm:left-[490px] lg:w-[121px] lg:h-[24px] lg:top-[214px] lg:right-[30px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                      تغییر قیمت امروز :
                    </p>
                    <p
                      className={`absolute font-iranSansnumber font-[400] text-[12px] leading-[18px] w-[39px] h-[18px] top-[164px] left-[25px] md:top-[186px] md:left-[415px] sm:top-[186px] sm:left-[330px] lg:w-[52px] lg:h-[24px] lg:top-[214px] lg:left-[575px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]
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

                  <div className="2xl:flex 2xl:justify-between">
                    <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[79px] h-[18px] top-[208px] left-[234px] md:top-[236px] md:left-[630px] sm:top-[236px] sm:left-[505px] lg:w-[105px] lg:h-[24px] lg:top-[265px] lg:right-[30px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                      خرید بیت کوین:
                    </p>
                    <div className="2xl:flex 2xl:items-center">
                      <p
                        className={`absolute font-iranSansnumber font-[400] text-[12px] leading-[18px] w-[111px] h-[18px] top-[208px] left-[12px] md:top-[236px] md:left-[405px] sm:top-[236px] sm:left-[330px] lg:w-[130px] lg:h-[24px] lg:top-[265px] lg:left-[595px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px] ${
                          Number(coin.daily_change_percent) >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {Number(coin.buy_irt_price)
                          .toFixed(0)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </p>
                      <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[208px] left-[25px] md:top-[236px] md:left-[420px] sm:top-[236px] sm:left-[340px] lg:w-[30px] lg:h-[24px] lg:top-[265px] lg:left-[590px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px] 2xl:mr-[5px]">
                        تومان
                      </span>
                    </div>
                  </div>

                  <div className="2xl:flex 2xl:justify-between">
                    <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[84px] h-[18px] top-[251px] left-[231px] md:top-[286px] md:left-[625px] sm:top-[286px] sm:left-[500px] lg:w-[112px] lg:h-[24px] lg:top-[316px] lg:right-[30px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                      فروش بیت کوین:
                    </p>
                    <div className="2xl:flex 2xl:items-center">
                      <p
                        className={`absolute font-iranSansnumber font-[400] text-[12px] leading-[18px] w-[112px] h-[18px] top-[251px] left-[12px] md:top-[286px] md:left-[405px] sm:left-[330px] sm:top-[286px] lg:w-[130px] lg:h-[24px] lg:top-[316px] lg:left-[615px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px] ${
                          Number(coin.daily_change_percent) >= 0
                            ? "text-green-600"
                            : "text-red-600"
                        }`}
                      >
                        {Number(coin.sell_irt_price)
                          .toFixed(0)
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}
                      </p>
                      <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[251px] left-[27px] md:top-[286px] md:left-[420px] sm:left-[340px] sm:top-[286px] lg:w-[30px] lg:h-[24px] lg:top-[316px] lg:left-[590px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px] 2xl:mr-[5px]">
                        تومان
                      </span>
                    </div>
                  </div>

                  <div className="2xl:flex 2xl:justify-between">
                    <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[128px] h-[18px] top-[295px] left-[187px] md:top-[336px] md:left-[581px] sm:left-[460px] sm:top-[336px] lg:w-[170px] lg:h-[24px] lg:top-[367px] lg:right-[30px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                      بالاترین قیمت 24 ساعته :
                    </p>
                    <div className="2xl:flex 2xl:items-center">
                      <p className="absolute font-iranSansnumber text-[#147D03] font-[400] text-[12px] leading-[18px] w-[96px] h-[18px] top-[295px] left-[22px] md:top-[336px] md:left-[420px] sm:top-[336px] sm:left-[340px] lg:w-[130px] lg:h-[24px] lg:top-[367px] lg:left-[595px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                        1.000.000.000
                      </p>
                      <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[295px] left-[27px] md:top-[336px] md:left-[420px] lg:w-[30px] sm:top-[336px] sm:left-[340px] lg:h-[24px] lg:top-[367px] lg:left-[590px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px] 2xl:mr-[5px]">
                        تومان
                      </span>
                    </div>
                  </div>

                  <div className="2xl:flex 2xl:justify-between">
                    <p className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[143px] h-[18px] top-[338px] left-[172px] md:top-[388px] md:left-[566px] sm:top-[388px] sm:left-[447px] lg:w-[192px] lg:h-[24px] lg:top-[418px] lg:right-[30px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                      پایین ترین قیمت 24 ساعته :
                    </p>
                    <div className="2xl:flex 2xl:items-center">
                      <p className="absolute font-iranSansnumber text-[#FF6868] font-[400] text-[12px] leading-[18px] w-[96px] h-[18px] top-[338px] left-[22px] md:top-[388px] md:left-[420px] sm:top-[388px] sm:left-[340px] lg:w-[130px] lg:h-[24px] lg:top-[418px] lg:left-[595px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                        1.000.000.000
                      </p>
                      <span className="absolute font-iranSansnumber text-[#000000] font-[400] text-[12px] leading-[18px] w-[20px] h-[18px] top-[338px] left-[27px] md:top-[388px] md:left-[420px] sm:top-[388px] sm:left-[340px] lg:w-[30px] lg:h-[24px] lg:top-[418px] lg:left-[590px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px] 2xl:mr-[5px]">
                        تومان
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* خط جداکننده عمودی */}
              <Image
                src="/images/Line 102 (1).svg"
                alt="lineee"
                width={1}
                height={1}
                className="absolute w-[290px] h-[1px] top-[386px] border-none left-[25px] border-[#EBEBEB] border-[1px] md:w-[415px] md:top-[225px] md:left-[180px] md:rotate-[-90deg] sm:w-[415px] sm:top-[240px] sm:left-[100px] sm:rotate-[-90deg] lg:rotate-[-90deg] lg:w-[448px] lg:left-[320px] lg:top-[240px] 2xl:absolute 2xl:left-[700px] 2xl:top-[40px] 2xl:h-[400px] 2xl:w-[1px] 2xl:rotate-[-90deg]"
              />

              {/* بخش سمت چپ - مبدل ارز */}
              <div className="2xl:absolute 2xl:left-[50px] 2xl:top-[40px] 2xl:w-[600px]">
                <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[85px] h-[22px] top-[412px] left-[229.62px] md:top-[41px] md:left-[246px] sm:top-[41px] sm:left-[210px] lg:w-[97px] lg:h-[25px] lg:top-[29px] lg:left-[400px] lg:text-[16px] lg:leading-[25.04px] 2xl:static 2xl:text-[18px] 2xl:mb-[15px]">
                  ارسال می کنید:
                </p>

                <div className="2xl:flex 2xl:flex-col 2xl:gap-[25px]">
                  {/* فیلد ارسال */}
                  <div className="2xl:relative">
                    <div className="absolute w-[291.04px] h-[47px] top-[446px] left-[25px] rounded-[8px] bg-[#F8F9FA] md:w-[304px] md:h-[47px] md:top-[75px] md:left-[26px] sm:top-[75px] sm:left-[10px] lg:rounded-[50px] lg:bg-[#F6F4F4] lg:w-[474px] lg:h-[47px] lg:top-[72px] lg:left-[27px] 2xl:static 2xl:w-[500px] 2xl:h-[50px]"></div>
                    <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[81px] h-[19px] top-[460px] left-[221.01px] md:top-[89px] md:left-[237px] sm:top-[89px] sm:left-[197px] lg:w-[94px] lg:h-[22px] lg:top-[86px] lg:left-[380px] lg:text-[14px] lg:leading-[21.91px] 2xl:absolute 2xl:left-[360px] 2xl:top-[15px] 2xl:text-[14px]">
                      مقدار را وارد کنید
                    </p>
                    <Image
                      src="/images/Line 33.svg"
                      alt="linee"
                      width={1}
                      height={1}
                      className="absolute w-[37px] h-[1px] bg-[#9B9B9B] rotate-[-90deg] top-[469px] left-[152.67px] border-none md:top-[98px] md:left-[151px] sm:left-[140px] sm:top-[100px] lg:w-[37px] lg:top-[95px] lg:left-[232px] 2xl:absolute 2xl:left-[300px] 2xl:top-[25px]"
                    />
                    <Image
                      src="/images/Group 33.svg"
                      alt="iran"
                      width={10}
                      height={10}
                      className="absolute w-[24.89px] h-[26px] top-[458px] left-[119.16px] md:w-[26px] md:top-[87px] md:left-[116px] sm:left-[120px] sm:top-[87px] lg:w-[26px] lg:h-[26px] lg:top-[84px] lg:left-[210px] 2xl:absolute 2xl:left-[260px] 2xl:top-[12px]"
                    />
                    <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[28px] h-[19px] top-[460px] left-[83px] md:top-[89px] md:left-[83px] sm:left-[85px] sm:top-[90px] lg:w-[33px] lg:h-[22px] lg:top-[86px] lg:left-[165px] lg:text-[14px] lg:leading-[21.91px] 2xl:absolute 2xl:left-[220px] 2xl:top-[15px] 2xl:text-[14px]">
                      تومان
                    </p>
                    <Image
                      src="/images/Frame.svg"
                      alt="frame"
                      width={1}
                      height={1}
                      className="absolute w-[22.98px] h-[24px] text-[#696464] top-[459px] left-[29.7px] border-none md:w-[24px] md:top-[88px] md:left-[33px] sm:left-[20px] sm:top-[88px] lg:w-[97px] lg:h-[25px] lg:top-[86px] lg:left-[10px] 2xl:absolute 2xl:left-[30px] 2xl:top-[13px]"
                    />
                  </div>

                  {/* آیکون تبدیل */}
                  <div className="2xl:flex 2xl:justify-center">
                    <div className="absolute bg-[#E8E8E8] w-[34.34px] h-[34.34px] top-[514px] left-[18px] rounded-[50%] md:top-[142px] md:left-[29px] sm:left-[10px] sm:top-[142px] lg:w-[40px] lg:h-[40px] lg:top-[153px] lg:left-[30px] 2xl:static"></div>
                    <Image
                      src="/images/noun-back-and-forth-1522889 1.svg"
                      alt="frame"
                      width={1}
                      height={1}
                      className="absolute w-[16.6px] h-[16.74px] top-[524px] left-[27.7px] border-none rotate-[-180deg] text-[#000000] md:top-[151.44px] md:left-[38.04px] sm:left-[18px] sm:top-[151px] lg:w-[17px] lg:h-[16px] lg:top-[165px] lg:left-[42px] 2xl:absolute 2xl:left-[242px] 2xl:top-[5px]"
                    />
                  </div>

                  {/* فیلد دریافت */}
                  <div className="2xl:relative">
                    <p className="absolute font-iranSans text-[#000000] font-[700] text-[14px] leading-[21.91px] w-[100px] h-[22px] top-[548px] left-[210px] md:top-[176px] md:left-[233px] sm:left-[192px] sm:top-[176px] lg:w-[108px] lg:h-[25px] lg:top-[191px] lg:left-[390px] lg:text-[16px] lg:leading-[25.04px] 2xl:static 2xl:text-[18px] 2xl:mb-[15px]">
                      دریافت می کنید:
                    </p>
                    
                    <div className="absolute w-[291.04px] h-[47px] top-[581px] left-[25px] rounded-[8px] bg-[#F8F9FA] md:w-[304px] md:h-[47px] md:top-[209px] md:left-[24px] sm:left-[10px] sm:top-[209px] lg:rounded-[50px] lg:bg-[#F6F4F4] lg:w-[474px] lg:h-[47px] lg:top-[235px] lg:left-[27px] 2xl:static 2xl:w-[500px] 2xl:h-[50px]"></div>
                    <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[81px] h-[19px] top-[595px] left-[221.01px] md:top-[223px] md:left-[230px] sm:left-[190px] sm:top-[223px] lg:w-[94px] lg:h-[22px] lg:top-[248px] lg:left-[380px] lg:text-[14px] lg:leading-[21.91px] 2xl:absolute 2xl:left-[360px] 2xl:top-[15px] 2xl:text-[14px]">
                      مقدار نهایی
                    </p>
                    <Image
                      src="/images/Line 33.svg"
                      alt="linee"
                      width={1}
                      height={1}
                      className="absolute w-[37px] h-[1px] bg-[#9B9B9B] rotate-[-90deg] top-[605px] left-[152.67px] border-none md:top-[232px] md:left-[151px] sm:left-[140px] sm:top-[235px] lg:top-[260px] lg:left-[232px] 2xl:absolute 2xl:left-[300px] 2xl:top-[25px]"
                    />
                    <Image
                      src="/images/bitcoin (1) 3.svg"
                      alt="bit"
                      width={10}
                      height={10}
                      className="absolute w-[24.89px] h-[26px] top-[595px] left-[119.16px] md:w-[26px] md:top-[219px] md:left-[116px] lg:w-[26px] sm:left-[120px] sm:top-[219px] lg:h-[26px] lg:top-[246px] lg:left-[210px] 2xl:absolute 2xl:left-[260px] 2xl:top-[12px]"
                    />
                    <p className="absolute font-iranSans text-[#696464] font-[300] text-[12px] leading-[18.78px] w-[48px] h-[19px] top-[595px] left-[65px] md:top-[222px] md:left-[62px] sm:left-[60px] sm:top-[222px] lg:w-[56px] lg:h-[22px] lg:top-[248px] lg:left-[145px] lg:text-[14px] lg:leading-[21.91px] 2xl:absolute 2xl:left-[220px] 2xl:top-[15px] 2xl:text-[14px]">
                      بیت کوین
                    </p>
                    <Image
                      src="/images/Frame.svg"
                      alt="frame"
                      width={1}
                      height={1}
                      className="absolute w-[22.98px] h-[24px] text-[#696464] top-[595px] left-[29.7px] border-none md:w-[24px] md:top-[220px] md:left-[33px] sm:left-[20px] sm:top-[220px] lg:w-[97px] lg:h-[25px] lg:top-[249px] lg:left-[10px] 2xl:absolute 2xl:left-[30px] 2xl:top-[13px]"
                    />
                  </div>

                  {/* نرخ ارز */}
                  <div className="2xl:flex 2xl:justify-between 2xl:mt-[20px]">
                    <div className="2xl:text-center">
                      <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18.78px] w-[52px] h-[19px] top-[643px] left-[258px] md:top-[271px] md:left-[268px] sm:left-[235px] sm:top-[271px] lg:w-[70px] lg:h-[25px] lg:top-[307px] lg:left-[425px] lg:text-[16px] lg:leading-[25.04px] 2xl:static 2xl:text-[16px] 2xl:mb-[5px]">
                        نرخ ارز یک
                      </p>
                      <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18px] w-[51px] h-[18px] top-[642px] left-[19px] md:top-[272px] md:left-[24px] sm:left-[20px] sm:top-[272px] lg:w-[68px] lg:h-[24px] lg:top-[307px] lg:left-[30px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                        5.600 دلار
                      </p>
                    </div>
                    
                    <div className="2xl:text-center">
                      <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18.78px] w-[47px] h-[19px] top-[681px] left-[262px] md:top-[309px] md:left-[274px] sm:left-[240px] sm:top-[309px] lg:w-[70px] lg:h-[25px] lg:top-[347px] lg:left-[425px] lg:text-[16px] lg:leading-[25.04px] 2xl:static 2xl:text-[16px] 2xl:mb-[5px]">
                        نرخ ارز دو
                      </p>
                      <p className="absolute font-iranSans text-[#000000] font-[700] text-[12px] leading-[18px] w-[72px] h-[18px] top-[682px] left-[13px] md:top-[310px] md:left-[16px] sm:left-[16px] sm:top-[310px] lg:w-[96px] lg:h-[24px] lg:top-[347px] lg:left-[20px] lg:text-[16px] lg:leading-[24px] 2xl:static 2xl:text-[16px]">
                        49.750 تومان
                      </p>
                    </div>
                  </div>
                </div>

                {/* دکمه‌ها */}
                <button className="absolute font-iranSans bg-[#1652F0] w-[291px] h-[47px] top-[731px] left-[18px] rounded-[8px] text-[14px] font-[700] leading-[21.91px] text-[#FFFFFF] md:w-[305px] md:top-[359px] md:left-[25px] sm:left-[10px] sm:top-[359px] lg:hidden 2xl:hidden">
                  ثبت سفارش خرید
                </button>
                <button className="absolute hidden md:hidden lg:block border border-[#0D1A8E] text-[#0D1A8E] w-[474px] h-[47px] top-[397px] left-[30px] rounded-[50px] font-iranSans font-[700] text-[16px] leading-[25.04px] 2xl:static 2xl:w-[500px] 2xl:h-[50px] 2xl:mt-[25px] 2xl:text-[18px]">
                  ادامه خرید
                </button>
              </div>
            </div>

            {/* بقیه بخش‌های صفحه - بدون تغییر */}
            <p className="absolute xl:left-[1050px] font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[50px] h-[31px] top-[956px] left-[200px] md:h-[47px] md:leading-[46.96px] md:text-[30px] md:w-[196px] md:top-[621px] md:left-[350px] sm:top-[620px] sm:left-[350px] lg:w-[196px] lg:h-[47px] lg:top-[680px] lg:left-[800px] lg:text-[30px] lg:leading-[46.96px] 2xl:left-[1200px] 2xl:top-[650px] 2xl:text-[32px]">
              درباره
            </p>
            <span className="absolute xl:left-[980px] font-iranSansnumber text-[#0D1A8E] text-[20px] font-[900] leading-[31.3px] w-[100px] h-[18px] top-[956px] left-[100px] md:w-[150px] md:h-[47px] md:leading-[46.96px] md:text-[30px] md:top-[621px] md:left-[320px] sm:top-[620px] sm:left-[250px] lg:w-[196px] lg:h-[47px] lg:top-[680px] lg:left-[730px] lg:text-[30px] lg:leading-[46.96px] 2xl:left-[1000px] 2xl:top-[650px] 2xl:text-[32px]">
              بیت کوین
            </span>
            <Image
              src="/images/Group 559.svg"
              alt="bitcoin"
              width={400}
              height={400}
              className="absolute w-[337px] h-[194.91px] rounded-[20px] top-[1022px] left-[19px] sm:left-[20px] sm:w-[750px] sm:h-[300px] md:w-[555px] md:h-[321px] md:top-[715px] md:left-[139px] sm:top-[680px] lg:w-[450px] lg:h-[321px] lg:top-[680px] lg:left-[20px] xl:w-[555px] 2xl:left-[450px] 2xl:top-[720px] 2xl:w-[600px] 2xl:h-[350px]"
            />
            <p className="absolute sm:top-[1000px] sm:w-[600px] xl:left-[695px] xl:w-[550px] xl:text-[16px] font-iranSans text-right text-[#000000] font-[400] text-[12px] leading-[28px] w-[333px] h-[252px] top-[1252px] left-[21px] md:text-[14px] md:w-[735px] md:h-[140px] md:top-[1083px] md:left-[50px] lg:w-[480px] lg:h-[245px] lg:top-[740px] lg:left-[515px] lg:text-[14px] lg:leading-[32px] 2xl:left-[800px] 2xl:top-[720px] 2xl:w-[500px] 2xl:text-[16px] 2xl:leading-[30px]">
              بیت کوین با نماد اختصاری BTC یک ارز دیجیتال یا شکلی از دارایی
              دیجیتال است که با ارزش بازار حدود 541 میلیارد دلار، در رتبه 1
              بازار قرار داشته و سهم 52.484 درصدی از کل بازار را در اختیار دارد
              . هر واحد از بیت کوین در این لحظه با قیمت 67977.99 دلار، با احتساب
              نرخ تتر 64575 تومان معادل 4389678704.25 تومان معامله می شود و حجم
              مبادلات روزانه آن 20367661885.022 دلار است. قیمت در ۲۴ ساعت اخیر
              1.53 تغییر یافته است. بالاترین قیمت بیت کوین در تاریخ 1402 اسفند
              24 معادل 73628.4 دلار بوده که همینک -7.67 اختلاف دارد از آن زمان .
            </p>
            <p className="absolute sm:top-[1200px] sm:w-[400px] sm:left-[150px] xl:left-[740px] font-iranSans text-center text-[#000000] font-[900] text-[20px] leading-[40px] w-[200px] h-[80px] top-[1550px] left-[78px] md:leading-[46.96px] md:text-[30px] md:w-[518px] md:h-[55px] md:top-[1360px] md:left-[158px] lg:w-[518px] lg:h-[55px] lg:top-[1050px] lg:left-[495px] lg:text-[30px] lg:leading-[46.96px] 2xl:left-[650px] 2xl:top-[1000px] 2xl:text-[32px]">
              نمودار قیمت بیت کوین ونرخ برابری تومان
            </p>
            <div className="absolute left-[10px] w-[350px] top-[1750px] lg:top-[1150px] sm:left-[20px] sm:w-[600px] sm:top-[1280px] md:w-[750px] md:left-[10px] md:top-[1450px] lg:left-[20px] lg:w-[980px] xl:w-[1240px] 2xl:left-[150px] 2xl:top-[1100px] 2xl:w-[1200px]">
              <CoinChart />
            </div>

            <p className="absolute sm:top-[1750px] sm:w-[400px] sm:left-[100px] xl:left-[850px] font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[266px] h-[31px] top-[2246px] left-[55px] md:leading-[46.96px] md:text-[30px] md:w-[399px] md:h-[47px] md:top-[2036px] md:left-[218px] lg:w-[399px] lg:h-[47px] lg:top-[1850px] lg:left-[600px] lg:text-[30px] lg:leading-[46.96px] 2xl:left-[900px] 2xl:top-[1800px] 2xl:text-[32px]">
              توضیحات بیشتر درباره بیت کوین
            </p>
            <p className="absolute sm:w-[600px] sm:left-[10px] sm:top-[1850px] xl:left-[20px] xl:w-[1224px] font-iranSans text-[#000000] font-[400] text-[12px] leading-[28px] w-[326px] h-[245px] top-[2316px] left-[25px] md:text-[14px] md:w-[726px] md:h-[245px] md:top-[2119px] md:left-[54px] lg:w-[980px] lg:h-[245px] lg:top-[1950px] lg:left-[20px] lg:text-[16px] lg:leading-[32px] 2xl:left-[150px] 2xl:top-[1850px] 2xl:w-[1200px] 2xl:text-[16px] 2xl:leading-[32px]">
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
            <p className="absolute sm:top-[2200px] sm:left-[40px] sm:w-[400px] xl:left-[1062px] font-iranSans text-[#000000] font-[900] text-[20px] leading-[31.3px] w-[121px] h-[31px] top-[2891px] left-[127px] md:leading-[46.96px] md:text-[30px] md:w-[181px] md:h-[47px] md:top-[2509px] md:left-[327px] lg:w-[181px] lg:h-[47px] lg:top-[2280px] lg:left-[820px] lg:text-[30px] lg:leading-[46.96px] 2xl:left-[1200px] 2xl:top-[2200px] 2xl:text-[32px]">
              سوالات متداول
            </p>
            <div className="absolute sm:w-[600px] sm:left-[10px] sm:top-[2270px] xl:left-[20px] xl:w-[1225px] w-[335px] h-[225px] top-[2953px] left-[20px] rounded-[15px] border-[1px] border-[#F1F1F1] md:text-[30px] md:w-[734px] md:h-[223px] md:top-[2605px] md:left-[51px] lg:w-[980px] lg:h-[227px] lg:top-[2340px] lg:left-[20px] 2xl:left-[150px] 2xl:top-[2250px] 2xl:w-[1200px] 2xl:h-[250px]">
              <p className="absolute sm:left-[480px] xl:left-[1050px] xl:w-[120px] xl:text-[20px] font-iranSans text-[#000000] font-[500] text-[16px] leading-[25.04px] w-[96px] h-[25px] top-[19px] left-[219px] md:text-[18px] md:leading-[28.11px] md:w-[108px] md:h-[28px] md:top-[40px] md:left-[599px] lg:top-[40px] lg:left-[830px] 2xl:left-[1050px] 2xl:top-[40px] 2xl:text-[20px]">
                رمز ارز چیست؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000] top-[19px] left-[37px] rotate-[180deg] md:text-[30px] md:w-[24px] md:h-[24px] md:top-[50px] md:left-[15px] lg:top-[30px] lg:left-[18px] 2xl:left-[150px] 2xl:top-[40px] 2xl:w-[20px] 2xl:h-[20px]"
              />
              <p className="absolute sm:w-[560px] xl:left-[20px] xl:w-[1155px] xl:text-[20px] font-iranSans text-[#000000] font-[400] text-[12px] leading-[24px] w-[294px] h-[144px] top-[64px] left-[21px] md:leading-[32px] md:text-[14px] md:w-[690px] md:h-[96px] md:top-[96px] md:left-[17px] lg:w-[920px] lg:h-[64px] lg:top-[98px] lg:left-[10] lg:text-[14px] 2xl:left-[150px] 2xl:top-[80px] 2xl:w-[1000px] 2xl:text-[16px] 2xl:leading-[28px]">
                لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی
                و بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود.
                طراح گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن
                صفحه و ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده
                می نماید، تا از نظر گرافی ...
              </p>
            </div>
            <div className="absolute sm:w-[600px] sm:left-[10px] sm:top-[2520px] xl:w-[1225px] w-[336px] h-[50px] top-[3196px] left-[20px] rounded-[15px] border-[1px] border-[#F1F1F1] md:w-[734px] md:h-[70px] md:top-[2852px] md:left-[50px] lg:w-[980px] lg:h-[88px] lg:top-[2580px] lg:left-[20px] 2xl:left-[150px] 2xl:top-[2500px] 2xl:w-[1200px] 2xl:h-[70px]">
              <p className="absolute sm:left-[340px] xl:text-[20px] xl:left-[780px] xl:w-[400px] font-iranSans text-[#000000] font-[400] text-[12px] leading-[18.78px] w-[242px] h-[18px] top-[16px] left-[73px] md:leading-[21.91px] md:text-[14px] md:w-[242px] md:h-[18px] md:top-[23px] md:left-[466px] lg:w-[311px] lg:h-[28px] lg:top-[29px] lg:left-[630px] lg:text-[18px] lg:leading-[28.17px] 2xl:left-[780px] 2xl:top-[25px] 2xl:text-[18px]">
                آیا می توانم با کارت بانکی بیت کوین بخرم؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000] top-[16px] left-[21px] rotate-[-0deg] md:w-[24px] md:h-[24px] md:top-[23px] md:left-[18px] 2xl:left-[150px] 2xl:top-[25px] 2xl:w-[20px] 2xl:h-[20px]"
              />
            </div>
            <div className="absolute sm:w-[600px] sm:top-[2600px] sm:left-[10px] xl:w-[1225px] w-[336px] h-[50px] top-[3264px] left-[20px] rounded-[15px] border-[1px] border-[#F1F1F1] md:w-[734px] md:h-[70px] md:top-[2946px] md:left-[51px] lg:w-[980px] lg:h-[88px] lg:top-[2680px] lg:left-[20px] 2xl:left-[150px] 2xl:top-[2580px] 2xl:w-[1200px] 2xl:h-[70px]">
              <p className="absolute sm:left-[445px] xl:text-[20px] xl:left-[780px] xl:w-[400px] font-iranSans text-[#000000] font-[400] text-[12px] leading-[18.78px] w-[138px] h-[19px] top-[16px] left-[176px] md:leading-[21.91px] md:text-[14px] md:w-[242px] md:h-[18px] md:top-[20px] md:left-[465px] lg:w-[311px] lg:h-[28px] lg:top-[29px] lg:left-[630px] lg:text-[18px] lg:leading-[28.17px] 2xl:left-[780px] 2xl:top-[25px] 2xl:text-[18px]">
                چرا باید از والت استفاده کنم؟
              </p>
              <Image
                src="/images/Frame.svg"
                alt="frame"
                width={1}
                height={1}
                className="absolute w-[16px] h-[16px] text-[#000000] top-[16px] left-[21px] rotate-[-0deg] md:w-[24px] md:h-[24px] md:top-[20px] md:left-[18px] 2xl:left-[150px] 2xl:top-[25px] 2xl:w-[20px] 2xl:h-[20px]"
              />
            </div>
            <div className="absolute sm:w-[600px] sm:h-[320px] sm:left-[10px] sm:top-[2750px] xl:w-[1225px] w-[334px] h-[454px] top-[3352px] left-[21px] rounded-[15px] bg-[#F8F9FA] md:w-[734px] md:h-[294px] md:top-[3069px] md:left-[50px] lg:w-[980px] lg:h-[366px] lg:top-[2820px] lg:left-[20px] 2xl:left-[150px] 2xl:top-[2700px] 2xl:w-[1200px] 2xl:h-[400px]">
              <p className="absolute xl:text-[34px] xl:w-[550px] font-iranSans text-[#000000] font-[900] text-[16px] leading-[25.04px] text-center w-[240px] h-[25px] top-[49px] left-[47px] md:leading-[31.3px] md:text-[20px] md:w-[300px] md:h-[31px] md:top-[50px] md:left-[77px] lg:w-[420px] lg:h-[44px] lg:top-[53px] lg:left-[140px] lg:text-[28px] lg:leading-[43.83px] 2xl:left-[400px] 2xl:top-[50px] 2xl:text-[28px]">
                علاقه مند به خرید بیت کوین هستید؟
              </p>
              <p className="absolute xl:text-[24px] xl:left-[190px] font-iranSans text-[#000000] font-[300] text-[12px] leading-[24px] text-center w-[246px] h-[48px] top-[91px] left-[44px] md:leading-[32px] md:text-right md:text-[16px] md:w-[339px] md:h-[64px] md:top-[107px] md:left-[6px] lg:w-[476px] lg:h-[96px] lg:top-[140px] lg:text-right lg:left-[80px] lg:text-[22px] lg:leading-[48px] 2xl:left-[350px] 2xl:top-[120px] 2xl:text-[20px] 2xl:w-[500px]">
                ما اینجا هستیم تا شما تجربه ای متفاوت از خرید و فروش بیت کوین
                داشته باشید.
              </p>
              <button className="absolute xl:w-[300px] xl:left-[360px] font-iranSans font-[700] rounded-[50px] text-[16px] bg-[#1652F0] leading-[25.04px] text-center left-[76px] top-[156px] h-[47px] w-[182px] text-[#ffffff] md:top-[197px] md:left-[165px] lg:w-[182px] lg:h-[47px] lg:top-[279px] lg:left-[380px] 2xl:left-[450px] 2xl:top-[200px] 2xl:w-[200px] 2xl:text-[18px]">
                اکنون شروع کنید
              </button>
              <Image
                src="/images/sammy-line-man-with-money 1.svg"
                alt="boy"
                width={1}
                height={1}
                className="absolute xl:left-[850px] w-[196px] h-[196px] top-[227px] left-[65px] md:w-[265px] md:h-[265px] md:top-[14px] md:left-[450px] sm:w-[265px] sm:top-[14px] sm:left-[300px] sm:h-[265px] lg:w-[337px] lg:h-[337px] lg:top-[15px] lg:left-[610px] 2xl:left-[900px] 2xl:top-[10px] 2xl:w-[300px] 2xl:h-[300px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}