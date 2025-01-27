import CustomButton from '@/components/UI/CustomButton';
import { Link } from 'react-router-dom';
import HeroCardImgLt from '@/assets/Home/cardImgLt.png';
import HeroCardImgRt from '@/assets/Home/cardImgRt.png';

const Hero: React.FC = () => {
  return (
    <div className="grid grid-rows-2 font-elMessiri text-center text-[#2B2A34]">
      <div className="container mx-auto min-w-[164px] xl:mb-[100px] sm:mb-[4em] mb-[3em] mobile:mb-[50px]">
        <div className="grid grid-cols-1 gap-[24px] xl:grid-cols-2">
          {/* Part 1 */}
          <div className="">
            <p className="font-bold lg:text-[52px] lg:leading-[1.1] text-4xl leading-[1] mobile:text-[28px] mobile:leading-[1]">
              Розумні
              <span className="bg-gradientToTop text-transparent bg-clip-text">
                {' '}
                інструменти для успіху{' '}
              </span>
              вашого ресторану
            </p>
          </div>
          {/* part2 rghtImg*/}
          <div className="lg:row-span-2 flex justify-center items-center object-contain">
            <img
              className="h-full xl:w-full lg:w-[80%] sm:w-[90%] min-w-[164px] object-cover rounded-3xl mobile:rounded-[10px] mobile:h-[290px]"
              src={HeroCardImgRt}
              alt="cardImgRgt"
            />
          </div>
          {/* part 3 */}
          <div className="flex flex-col justify-between items-center h-full">
            {/* 1 row - button + link */}
            <Link
              className="w-[max-content] h-[max-content] bg-customGradient rounded-[10px] mx-auto mb-[30px] mobile:mb-[26px]"
              to="#JoinUs"
            >
              <CustomButton
                className="lg:text-[22px] md:h-[54px] lg:w-[216px] text-[19px] h-[42px] w-[178px] leading-[21.6px] text-white bg-none "
                borderRadius="rounded-lg"
                buttonType="menuOptions" // Додай значення для buttonType (залежить від опису)
                active={true}
                whiteBtn={false}
              >
                СПРОБУВАТИ
              </CustomButton>
            </Link>
            {/* 2 row - img+txt */}
            <div className="grid grid-cols-2 gap-[24px] xl:w-full lg:w-[85%] sm:w-[90%] mobile:w-[344px] mobile:gap-[16px] mx-auto">
              <img
                className="w-full h-auto mobile:h-[128px] mobile:w-[164px]"
                src={HeroCardImgLt}
                alt="cardImgLft"
              />
              <p className="flex items-center px-2 bg-gradientToTop w-full h-auto text-white text-center uppercase sm:text-[22px] mobile:text-[16px] mobile:leading-[1.2]  mobile:h-[128px] mobile:w-[164px] rounded-[20px] mobile:rounded-[10px] overflow-hidden">
                Оптимізуйте ресторанний бізнес із Velori
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="mt-1 text-2xl lg:text-[40px] mobile:text-[18px] font-bold w-full mx-auto h-[max-content]">
        Velori перетворює меню на{' '}
        <span className="bg-gradientToTop text-transparent bg-clip-text">
          QR-код
        </span>
        , а
        <span className="bg-gradientToTop text-transparent bg-clip-text">
          {' '}
          AI-офіціант{' '}
        </span>
        допомагає обрати страви за вподобаннями.
      </p>
    </div>
  );
};

export default Hero;
