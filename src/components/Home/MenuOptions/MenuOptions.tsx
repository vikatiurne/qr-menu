import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';
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
  titleMobile: () => any;
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
    titleMobile: () => {
      return <span>QR-меню</span>;
    },
    title: () => {
      return (
        <div>
          <div className="leading-[16px] sm:leading-[40px] hidden sm:block">
            <p>
              Безконтактне{' '}
              <span className={slideTextSpanStyle}>онлайн-меню</span>,
            </p>
            <p>швидке оновлення.</p>
          </div>
          <div className="sm:hidden font-semibold">
            Безконтактне <span className={slideTextSpanStyle}>онлайн-меню</span>{' '}
            , швидке оновлення.
          </div>
        </div>
      );
    },
  },
  {
    image: image2,
    id: 2,
    titleMobile: () => {
      return (
        <span>
          Зробити
          <br />
          замовлення
        </span>
      );
    },
    btnTitle: { title1: 'Зробити', title2: 'замовлення' },
    title: () => {
      return (
        <div>
          <div className="leading-[16px] sm:leading-[40px] hidden sm:block">
            <p>Гості замовляють самостійно,</p>
            <span className={slideTextSpanStyle}>швидше і більше.</span>{' '}
          </div>
          <div className="sm:hidden font-semibold text-[16px]">
            Гості замовляють самостійно,{' '}
            <span className={slideTextSpanStyle}>швидше і більше.</span>
          </div>
        </div>
      );
    },
  },
  {
    image: image3,
    id: 3,
    titleMobile: () => {
      return <span>AI-офіціант</span>;
    },
    btnTitle: { title1: 'AI', title2: 'офіціант' },
    title: () => {
      return (
        <div>
          <div className="leading-[16px] sm:leading-[40px] hidden sm:block">
            <p>
              Персональний{' '}
              <span className={slideTextSpanStyle}>AI-офіціант</span>
            </p>{' '}
            <p>допоможе обрати страви.</p>
          </div>
          <div className="sm:hidden font-semibold text-[16px]">
            Персональний <span className={slideTextSpanStyle}>AI-офіціант</span>{' '}
            допоможе обрати страви.
          </div>
        </div>
      );
    },
  },
  {
    image: image4,
    id: 4,
    titleMobile: () => {
      return (
        <span>
          чат з
          <br />
          рекомендаціями
        </span>
      );
    },
    btnTitle: { title1: 'Чат з', title2: 'рекомендаціями' },
    title: () => {
      return (
        <div>
          <div className="leading-[16px] sm:leading-[40px] hidden sm:block">
            <p>
              Розумний офіціант{' '}
              <span className={slideTextSpanStyle}> відповість</span>
              <span className={slideTextSpanStyle}>
                <br /> на всі питання
              </span>
            </p>
            <p>стосовно страв.</p>
          </div>
          <div className="sm:hidden font-semibold text-[16px]">
            Розумний офіціант
            <span className={slideTextSpanStyle}>
              {' '}
              відповість на всі питання стосовно страв.
            </span>
          </div>
        </div>
      );
    },
  },
  {
    image: image5,
    id: 5,
    titleMobile: () => {
      return (
        <span>
          Функція
          <br />
          “як завжди”
        </span>
      );
    },
    btnTitle: { title1: 'Функція', title2: '“Як завжди”' },
    title: () => {
      return (
        <div>
          <div className="leading-[16px] sm:leading-[40px] hidden sm:block">
            <p>
              <span className={slideTextSpanStyle}>
                Автоматичне приготування
              </span>
            </p>

            <p>страви, які замовляли раніше</p>
          </div>
          <div className="sm:hidden font-semibold text-[16px]">
            <span className={slideTextSpanStyle}>Автоматичне приготування</span>{' '}
            страви, які замовляли раніше
          </div>
        </div>
      );
    },
  },
];

const MenuOptions: React.FC = () => {
  const settings = {
    onReInit: () => setCurrentSlide(slider1?.innerSlider.state.currentSlide),
    lazyLoad: true,
    asNavFor: '.slider ',
    // adaptiveHeight: true
    // slidesToShow: 1    // focusOnSelect: true,
  };

  const [nav1, setNav1] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slider1, setSlider1] = useState(null);

  useEffect(() => {
    setNav1(slider1);
  }, [slider1]);
  return (
    <div className="py-0 pb-4 sm:pb-[50px] font-elMessiri ">
      <Slider
        {...settings}
        asNavFor={nav1}
        ref={(slider) => setSlider1(slider)}
        // className={'max-w-[100vw] container'}
        // className='max-w-[100%] '
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
              className="min-h-[200px] sm:max-h-[504px]  object-cover rounded-[10px] sm:rounded-none"
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
                  key={idx} className={` w-[10px] h-[10px] sm:h-[14px]  sm:w-[14px] border-2  border-white rounded-full   ${currentSlide === idx && 'bg-[#11A1AE]'} `}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </Slider>
      <div className="hidden sm:flex">
        {sliderData.map((item, idx) => (
          <CustomButton
            key={idx}
            className={` bg-gray-200 w-full min-h-[86px]  sm:text-[10px] md:text-[12px] lg:text-[16px] leading-[19px] transition font-bold -mt-[10px] rounded-b-[50px] ${currentSlide === idx && ' text-white'} `}
            onClick={() => {
              slider1?.slickGoTo(idx);
            }}
            buttonType={'login'}
            borderRadius="rounded-b-[50px]"
            whiteBtn={currentSlide != idx}
            active={true}
          >
            <span className="uppercase">
              {item.btnTitle.title1}
              <br />
              {item.btnTitle.title2}
            </span>
          </CustomButton>
        ))}
      </div>
      <div className="h-[44px] ">
        {sliderData.map((item,i) => (
          <h2 key={i} className="sm:hidden  text-[16px] leading-[16px] font-semibold text-black ">
            {item.id === currentSlide + 1 && item.title()}
          </h2>
        ))}
      </div>
    </div>
  );
};

export default MenuOptions;
