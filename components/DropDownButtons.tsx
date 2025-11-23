import { useState } from 'react';
import Image from 'next/image';

const DropDownButtons = () => {
  const [selectedButton, setSelectedButton] = useState<string>('دیفای');
  const [isOpen, setIsOpen] = useState<boolean>(false);

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
    setIsOpen(false);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Dropdown for mobile */}
      <div className="mt-[32px] mx-[20px] md:hidden relative">
        <button 
          onClick={toggleDropdown}
          className="flex items-center justify-between rounded-[8px] w-full h-[47px] font-iran-sans-black text-[12px] font-iranSans text-[#F7F7F7] bg-[#1652F0] xl:w-[130px] xl:h-[47px] xl:text-[14px] md:w-[85px] md:h-[47px] md:text-[12px] px-[16px]"
        >
          <span className="mr-[28px]">{selectedButton}</span>
          <Image
            src="/images/Frame (1).png"
            alt="frame"
            width={40}
            height={60}
            className={`w-[24px] ml-[18px] invert brightness-0 md:hidden transition-transform ${isOpen ? 'rotate-180' : ''}`}
          />
        </button>
        
        {/* Dropdown menu */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-[8px] shadow-lg z-10 max-h-60 overflow-y-auto">
            {buttons.map((button) => (
              <button
                key={button}
                onClick={() => handleButtonClick(button)}
                className={`w-full text-right px-[16px] py-[12px] font-iran-sans-regular text-[12px] transition-colors ${
                  selectedButton === button
                    ? 'bg-[#1652F0] text-[#F7F7F7]'
                    : 'bg-white text-[#000000] hover:bg-gray-100'
                } ${button === buttons[0] ? 'rounded-t-[8px]' : ''} ${
                  button === buttons[buttons.length - 1] ? 'rounded-b-[8px]' : ''
                }`}
              >
                {button}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Original button group for desktop */}
      <div className="hidden md:grid md:mt-[52px] xl:mt-[83px] md:mx-[50px] xl:mx-[150px] md:gap-x-[8px] xl:gap-x-[16px] gap-y-0 md:items-center md:grid-cols-[repeat(8,minmax(50px,1fr))] bg-[#ffffff]">
        {buttons.map((button) => (
          <button
            key={button}
            onClick={() => handleButtonClick(button)}
            className={`rounded-[8px] font-iran-sans-regular xl:h-[47px] xl:text-[14px] font-[400] md:h-[47px] md:text-[12px] ${
              selectedButton === button
                ? 'bg-[#1652F0] text-[#F7F7F7]'
                : 'bg-[#F7F7F7] text-[#000000]'
            } ${button === 'دیفای' ? '' : 'hidden md:block'}`}
          >
            {button === 'دیفای' ? (
              <div className="flex items-center justify-center">
                <span>دیفای</span>
                <Image
                  src="/images/Frame (1).png"
                  alt="frame"
                  width={40}
                  height={60}
                  className="w-[24px] invert brightness-0 md:hidden"
                />
              </div>
            ) : (
              button
            )}
          </button>
        ))}
      </div>
    </>
  );
};

export default DropDownButtons;