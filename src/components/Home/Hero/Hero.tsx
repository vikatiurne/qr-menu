import CustomButton from '@/components/UI/CustomButton';
import { Link } from 'react-router-dom';
import HeroCardImgLt from '@/assets/Home/cardImgLt.png';
import HeroCardImgRt from '@/assets/Home/cardImgRt.png';

const Hero: React.FC = () => {
  return (
    <div className="grid grid-rows-2 font-elMassiri text-center text-[#2B2A34] sm:w-full p-0 ">
      <div className="container mx-auto my-10 min-w-[164px]">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {/* Part 1 */}
          <div className="">
            <p className="font-bold xl:text-[52px] lg:text-4xl md:text-3xl text-[28px] xl:mb-0">
              Розумні
              <span className="bg-gradient-to-top text-transparent bg-clip-text">
                {' '}
                інтсрументи для успіху{' '}
              </span>
              вашого ресторану
            </p>
          </div>
          {/* part2 rghtImg*/}
          <div className=" lg:row-span-2 flex justify-center items-center object-contain ">
            <img
              className="xl:w-full h-full object-cover rounded-3xl lg:w-[75%] sm:w-[85%] min-w-[164px]"
              src={HeroCardImgRt}
              alt="cardImgRgt"
            />
          </div>
          {/* part 3 */}
          <div className="flex flex-col justify-between items-center h-full">
            {/* 1 row - button + link */}
            <Link
              className="w-[max-content] h-[max-content] bg-custom-gradient rounded-[10px] mx-auto mt-2 mb-6"
              to="#JoinUs"
            >
              <CustomButton
                className="lg:text-[22px] md:h-[54px] lg:w-[216px] text-[19px] h-[42px] w-[178px] leading-[21.6px] text-white bg-none "
                borderRadius="rounded-lg"
                whiteBtn={false}
              >
                СПРОБУВАТИ
              </CustomButton>
            </Link>
            {/* 2 row - img+txt */}
            <div className="grid grid-cols-2 gap-4 xl:w-full lg:w-[75%] sm:w-[85%] mx-auto">
              <img
                className="w-full h-auto"
                src={HeroCardImgLt}
                alt="cardImgLft"
              />
              <p className="w-full h-auto text-white text-center uppercase md:text-[22px] md:leading-[26.4px] sm:text-sm text-[16px] leading-[19.6px] flex items-center px-2 bg-gradient-to-top border-none rounded-[20px] overflow-hidden">
                Оптимізуйте ресторанний бізнес із Velori
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="md:text-[40px] md:leading-[40px] md:mt-11 mt-2 text-[18px] leading-[18px] font-bold lg:w-[90%] w-full mx-auto h-[max-content]">
        Velori перетворює меню на{' '}
        <span className="bg-gradient-to-top text-transparent bg-clip-text">
          QR-код
        </span>
        , а
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
