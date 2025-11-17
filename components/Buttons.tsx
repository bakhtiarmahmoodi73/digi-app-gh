import { useState } from 'react';
import Image from 'next/image';

const ButtonGroup = () => {
  const [selectedButton, setSelectedButton] = useState<string>('دیفای');

  const buttons = [
    'دیفای',
    'حریم خصوصی',
    'متاورس',
    'قابل استخراج',
    'میم کوین',
    'استیبل کوین',
    'توکن',
    'ICO'
  ];

  const handleButtonClick = (buttonName: string) => {
    setSelectedButton(buttonName);
  };

  return (
    <div className="hidden md:grid md:mt-[52px] xl:mt-[83px] md:mx-[50px] xl:mx-[150px] md:gap-x-[8px] xl:gap-x-[16px] gap-y-0 md:items-center md:grid-cols-[repeat(8,minmax(50px,1fr))] bg-[#ffffff]">
      {buttons.map((button) => (
        <button
          key={button}
          onClick={() => handleButtonClick(button)}
          className={`rounded-[8px] font-iranSans xl:h-[47px] xl:text-[14px] font-[400] md:h-[47px] md:text-[12px] ${
            selectedButton === button
              ? 'bg-[#1652F0] text-[#F7F7F7]'
              : 'bg-[#F7F7F7] text-[#000000]'
          } ${button === 'دیفای' ? '' : 'hidden md:block'}`}
        >
          {button === 'دیفای' ? (
            <>
              <span>دیفای</span>
              <Image
                src="/images/Frame (1).png"
                alt="frame"
                width={40}
                height={60}
                className="w-[24px] invert brightness-0 md:hidden"
              />
            </>
          ) : (
            button
          )}
        </button>
      ))}
    </div>
  );
};

export default ButtonGroup;