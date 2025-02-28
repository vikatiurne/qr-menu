
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderComponent from './SliderComponent';
import image1 from '@/assets/home/png/client/MenuOptions1.png';
import image2 from '@/assets/home/png/client/MenuOptions2.png';
import image3 from '@/assets/home/png/client/MenuOptions3.png';
import image4 from '@/assets/home/png/client/MenuOptions4.png';
import image5 from '@/assets/home/png/client/MenuOptions5.png';

export interface SliderProps {
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
  return (
    <div className="py-0 pb-4 sm:pt-[100px] sm:pb-[50px] font-elMessiri">
      <SliderComponent
        sliderData={sliderData}
      />
    </div>
  );
};

export default MenuOptions;
