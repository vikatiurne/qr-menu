import CustomButton from '@/components/UI/CustomButton';
import { Link } from 'react-router-dom';
import HeroCardImgLt from '@/assets/Home/cardImgLt.png';
import HeroCardImgRt from '@/assets/Home/cardImgRt.png';

const Hero: React.FC = () => {
  return (
    <div className="grid grid-rows-2 font-elMassiri text-center text-[#2B2A34]">
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {/* Part 1 */}
          <div className="">
            <p className="font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-4xl xl:mb-0 mb-10">
              Розумні
              <span className="bg-gradient-to-top text-transparent bg-clip-text">
                {' '}
                інтсрументи для успіху{' '}
              </span>
              вашого ресторану
            </p>
          </div>
          {/* part2 rghtImg*/}
          <div className="lg:row-span-2 flex justify-center items-center object-contain">
            <img
              className="w-full  h-full object-cover rounded-3xl"
              src={HeroCardImgRt}
              alt="cardImgRgt"
            />
          </div>
          {/* part 3 */}
          <div className="grid grid-cols-1 grid-rows-[auto,1fr] items-center justify-center">
            {/* 1 row - button + link*/}
            <Link
              className="w-[max-content] h-[max-content] bg-custom-gradient xl:rounded-xl  lg:rounded-xl rounded-xl  mx-auto my-12"
              to="#JoinUs"
            >
              <CustomButton
                className="xl:px-9 xl:py-3 xl:text-2xl lg:px-12 lg:py-4 lg:text-4xl  px-10 py-2 text-3xl text-white bg-none "
                borderRadius="rounded-lg"
                whiteBtn={false}
              >
                СПРОБУВАТИ
              </CustomButton>
            </Link>
            {/* 2 row - img+txt */}
            <div className="grid grid-cols-2 gap-4 mt-auto">
              <img className="w-full" src={HeroCardImgLt} alt="cardImgLft" />
              <p className="text-white text-center xl:text-3xl lg:text-4xl md:text-3xl  text-2xl flex items-center px-2 bg-gradient-to-top border-none rounded-3xl overflow-hidden">
                Оптимізуйте ресторанний бізнес із Velori
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="text-3xl xl:text-4xl lg:text-3xl md:text-2xl font-bold w-[90%] mx-auto mt-10 h-[max-content]">
        Velori перетворює меню на{' '}
        <span className="gradient-to-top">QR-код</span>, а
        <span className="bg-gradient-to-top text-transparent bg-clip-text">
          {' '}
          AI-офіціант{' '}
        </span>
        допомагає обрати страви за вподобаннями.
      </p>
    </div>
  );
};

export default Hero;
