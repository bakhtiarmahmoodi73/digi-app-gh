import { useState } from 'react';
import Image from 'next/image';

const AccordionB = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`rounded-[15px] border-[1px] border-[#F1F1F1] mx-[20px] mt-[18px] md:mt-[24px] md:mx-[50px] xl:mt-[15px] xl:mx-[150px] ${
      isOpen 
        ? 'h-[225px] md:h-[223px] xl:h-[227px]' 
        : 'h-[50px] md:h-[70px] xl:h-[88px]'
    }`}>
      <div 
        className="flex justify-between items-center px-[21px] h-[50px] md:h-[70px] md:px-[26px] xl:h-[88px] xl:px-[49px] cursor-pointer"
        onClick={toggleAccordion}
      >
        <p className="xl:text-[18px] md:text-[14px] font-iran-sans-regular text-[#000000] text-[12px] leading-[18.78px]">
          آیا می توانم با کارت بانکی بیت کوین بخرم؟
        </p>
        <Image
          src="/images/Frame.svg"
          alt="frame"
          width={1}
          height={1}
          className={`w-[16px] h-[16px] md:w-[24px] md:h-[24px] text-[#000000] transition-transform duration-300 ${
            isOpen ? 'rotate-0' : 'rotate-[-180deg]'
          }`}
        />
      </div>
      
      {isOpen && (
        <div className="px-[21px] pb-[21px] md:px-[26px] md:pb-[26px] xl:px-[49px] xl:pb-[49px]">
          <p className="font-iran-sans-regular text-[#000000] text-[12px] leading-[24px] md:text-[14px] xl:text-[16px]">
            لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
            بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح
            گرافیک از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و
            ارایه اولیه شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا
            از نظر گرافی ...
          </p>
        </div>
      )}
    </div>
  );
};

export default AccordionB;