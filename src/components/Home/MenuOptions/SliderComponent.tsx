import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SliderProps } from './MenuOptions';
import CustomButton from '@/components/UI/CustomButton';

interface SliderComponentProps {
  sliderData: SliderProps[];
}
const SliderComponent: React.FC<SliderComponentProps> = ({ sliderData }) => {
  const settings = {
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: '.slider-nav ',
    // focusOnSelect: true,
  };

  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);
  return (
    <>
      {/* Start Slider */}
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider) => setSlider1(slider)}
      >
        {sliderData.map((item, index) => (
          <div
            key={index}
            className="relative max-h-[504px] "
            onClick={() => {
              slider1?.slickGoTo(index);
            }}
          >
            <img
              src={item.image}
              alt="slide-image"
              className="min-h-[200px] sm:max-h-[504px] object-cover rounded-[10px] sm:rounded-none"
            />
            <h2 className="hidden sm:block  absolute z-50 top-6 left-6 tablet:text-[25px] text-[40px]  text-white font-semibold  ">
              {item.title()}
            </h2>
            <h2 className="sm:hidden text-[18px] absolute z-50 text-center top-[10px] left-[10px] leading-[21px]  text-white font-semibold  ">
              {item.titleMobile()}
            </h2>
            <div className="absolute bottom-[12px] sm:bottom-[24px]  flex gap-3 m-auto left-1/2 translate-x-[-50%]">
              {sliderData.map((_, idx) => (
                <div
                  key={idx}
                  className={` w-[10px] h-[10px] sm:h-[14px]  sm:w-[14px] border-2  border-white rounded-full   ${currentSlide === idx && 'bg-[#11A1AE]'} `}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      {/*END Slider */}

      {/* Start Slider BTN */}
      <div className="hidden sm:flex">
        {sliderData.map((item, idx) => (
          <CustomButton
            className={` bg-gray-200 w-full min-h-[86px]  sm:text-[10px] md:text-[12px] lg:text-[16px] leading-[19px] transition font-bold -mt-[10px] rounded-b-[50px] ${currentSlide === idx && ' text-white'} `}
            onClick={() => {
              slider1?.slickGoTo(idx);
            }}
            buttonType={'login'}
            borderRadius="rounded-b-[50px]"
            whiteBtn={currentSlide != idx}
            active={true}
            key={idx}
          >
            <span className="uppercase">
              {item.btnTitle.title1}
              <br />
              {item.btnTitle.title2}
            </span>
          </CustomButton>
        ))}
      </div>
      {/*END Slider BTN */}
        {/* Start slider info */}
      <div className="h-[44px] ">
        {sliderData.map((item, index) => (
          <h2
            key={index}
            className="sm:hidden  text-[16px] leading-[16px] font-semibold text-black "
          >
            {item.id === currentSlide + 1 && item.title()}
          </h2>
        ))}
      </div>
         {/* End slider info */}
    </>
  );
};

export default SliderComponent;
