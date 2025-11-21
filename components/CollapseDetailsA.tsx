import { useState } from 'react';
import Image from 'next/image';

const Accordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`rounded-[15px] border-[1px] border-[#F1F1F1] mx-[20px] mt-[31px] md:mt-[49px] md:mx-[50px] xl:mx-[150px] ${
      isOpen 
        ? 'h-[225px] md:h-[223px] xl:h-[227px]' 
        : 'h-[50px] md:h-[70px] xl:h-[88px]'
    }`}>
      <div 
        className="flex items-center justify-between mx-[20px] mt-[19px] md:mt-[40px] md:mr-[27px] md:ml-[17px] xl:mr-[49px] xl:ml-[29px] cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="font-iran-sans-medium text-[#000000] text-[16px] leading-[25.04px] md:text-[18px] ">
          رمز ارز چیست؟
        </p>
        <Image
          src="/images/Frame.svg"
          alt="frame"
          width={1}
          height={1}
          className={`w-[16px] h-[16px] md:w-[24px] md:h-[24px] text-[#000000] transition-transform duration-300 ${
            isOpen ? 'rotate-0' : 'rotate-[180deg]'
          }`}
        />
      </div>
      {isOpen && (
        <p className="font-iran-sans-regular text-[#000000] text-[12px] leading-[24px] mt-[19px] mx-[20px] md:text-[14px] xl:text-[16px] md:mt-[28px] md:mr-[27px] md:ml-[17px] xl:mr-[49px] xl:ml-[29px]">
          لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
          بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
          گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
          ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
          از نظر گرافی ...
        </p>
      )}
    </div>
  );
};

export default Accordion;