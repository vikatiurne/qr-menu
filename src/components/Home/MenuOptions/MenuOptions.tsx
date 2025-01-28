import React, { useEffect, useState } from 'react';
import image1 from '@/assets/home/png/client/MenuOptions1.png';
import image2 from '@/assets/home/png/client/MenuOptions2.png';
import image3 from '@/assets/home/png/client/MenuOptions3.png';
import image4 from '@/assets/home/png/client/MenuOptions4.png';
import image5 from '@/assets/home/png/client/MenuOptions5.png';
import CustomButton from '@/components/UI/CustomButton';

interface SliderProps {
  image: string;
  id: number;
  title: () => any;
  btnTitle: {
    title1: string;
    title2: string;
  };
}

const MenuOptions: React.FC = () => {
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
  const [active, setActive] = useState<string>(image1);
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${active})` , backgroundPosition: 'center' , backgroundSize: 'contain' }}
        className="w-full h-[504px] duration-300 relative mobile:h-[200px] "
      >
        {sliderData.map((item) => (
          <h2 className="absolute z-50 top-6 left-6 text-[40px] text-white font-semibold  ">
            {item.image === active && item.title()}
          </h2>
        ))}
      </div>
      <div className="flex justify-between ">
        {sliderData.map((item) => (
          <CustomButton
            key={item.id}
            buttonType="menuOptions"
            active={item.image != active ? false : true}
            className={`border bg-gray-200 w-full h-[86px] leading-[19px] transition font-bold  rounded-b-[50px] ${item.image === active && 'text-white'}`}
            //  className={`border w-full h-[86px] leading-[19px] transition  rounded-b-[50px]`}
            onClick={() => setActive(item.image)}
          >
            <span className="">
              {item.btnTitle.title1}
              <br />
              {item.btnTitle.title2}
            </span>
          </CustomButton>
        ))}
      </div>
    </div>

    // active={active != index ? false : true}
    // buttonType='menuOptions'
    // className={`w-full h-[86px]  leading-[19px]   ${active === index && 'text-white'}`}
    // borderRadius="rounded-b-[50px]"
    // whiteBtn={active != index }
    // whiteBtn={active === index }
    // onClick={() => changeActiveSlider(index)}
  );
};

export default MenuOptions;
