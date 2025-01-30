import Slider from 'react-slick';
import React, { useState , useEffect } from 'react';
import image1 from '@/assets/home/png/client/MenuOptions1.png';
import image2 from '@/assets/home/png/client/MenuOptions2.png';
import image3 from '@/assets/home/png/client/MenuOptions3.png';
import image4 from '@/assets/home/png/client/MenuOptions4.png';
import image5 from '@/assets/home/png/client/MenuOptions5.png';
import CustomButton from '@/components/UI/CustomButton';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface SliderProps {
  image: string;
  id: number;
  title: () => any;
  btnTitle: {
    title1: string;
    title2: string;
  };
}

const slideTextSpanStyle: string = 'text-[#15C5CE]';
const sliderData: SliderProps[] = [
  {
    image: image1,
    id: 1,
    btnTitle: { title1: 'QR-', title2: 'меню' },
    title: () => {
      return (
        <div className="leading-[40px]">
          {' '}
          Безконтактне <span className={slideTextSpanStyle}>онлайн-меню</span>
          , <br /> швидке оновлення.{' '}
        </div>
      );
    },
  },
  {
    image: image2,
    id: 2,
    btnTitle: { title1: 'Зробити', title2: 'замовлення' },
    title: () => {
      return (
        <div className="leading-[40px]">
          {' '}
          Гості замовляють самостійно, <br />{' '}
          <span className={slideTextSpanStyle}>швидше і більше.</span>{' '}
        </div>
      );
    },
  },
  {
    image: image3,
    id: 3,
    btnTitle: { title1: 'AI', title2: 'офіціант' },
    title: () => {
      return (
        <div className="leading-[40px]">
          {' '}
          Персональний <span className={slideTextSpanStyle}>
            AI-офіціант
          </span>{' '}
          <br /> допоможе обрати страви.{' '}
        </div>
      );
    },
  },
  {
    image: image4,
    id: 4,
    btnTitle: { title1: 'Чат з', title2: 'рекомендаціями' },
    title: () => {
      return (
        <div className="leading-[40px]">
          {' '}
          Розумний офіціант{' '}
          <span className={slideTextSpanStyle}>
            відповість <br /> на всі питання
          </span>{' '}
          стосовно страв.
        </div>
      );
    },
  },
  {
    image: image5,
    id: 5,
    btnTitle: { title1: 'Функція', title2: '“Як завжди”' },
    title: () => {
      return (
        <div className="leading-[40px]">
          {' '}
          <span className={slideTextSpanStyle}>Автоматичне приготування</span>
          <br /> страви, які замовляли раніше.{' '}
        </div>
      );
    },
  },
];

export default function MenuOptions() {
  const settings = {
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: '.slider-nav',
    focusOnSelect: true,
  };

  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);

  return (
    <>
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider) => setSlider1(slider)}
      >
        {sliderData.map((item, index) => (
          <div
            className="relative "
            onClick={() => {
              slider1?.slickGoTo(index);
            }}
          >
            <img
              src={item.image}
              alt="slide-image"
              className="h-full border "
            />
            <h2 className="absolute z-50 top-6 left-6 text-[40px] text-white font-semibold  ">
              {item.title()}
            </h2>
            <div className="absolute bottom-[24px]  flex gap-3 m-auto left-1/2 translate-x-[-50%]">
              {sliderData.map((elem , idx) => (
                <div
                  className={`w-[14px] h-[14px] border-2  border-white rounded-full bg-transparent ${currentSlide === idx && 'bg-[#11A1AE]'} `}
                >
              
                </div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      <div className="thumb-wrapper flex">
        {sliderData.map((item, idx) => (
          <button
            className={`border bg-gray-200 w-full min-h-[86px] leading-[19px] transition font-bold  rounded-b-[50px] ${currentSlide === idx && 'bg-red-500'} `}
            onClick={() => {
              slider1?.slickGoTo(idx);
            }}
          >
            <span className="uppercase">
              {item.btnTitle.title1}
              <br />
              {item.btnTitle.title2}
            </span>
          </button>
        ))}
      </div>
    </>
  );
}
