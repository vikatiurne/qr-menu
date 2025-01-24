import CustomButton from '@/components/UI/CustomButton';
import { Link } from 'react-router-dom';
import HeroCardImgLt from '@/assets/Home/cardImgLt.png';
import HeroCardImgRt from '@/assets/Home/cardImgRt.png';

const Hero: React.FC = () => {
  return (
    <div className="grid grid-rows-2 font-elMassiri text-center text-[#2B2A34]">
      <div className="container mx-auto my-10 min-w-[164px]">
        <div className="grid grid-cols-1 gap-4 xl:grid-cols-2">
          {/* Part 1 */}
          <div className="">
            <p className="font-bold 2xl:text-6xl xl:text-5xl lg:text-4xl md:text-3xl text-2xl xl:mb-0 mb-10">
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
          <div className=" grid grid-cols-1 grid-rows-[auto,1fr] items-center justify-center ">
            {/* 1 row - button + link*/}
            <Link
              className="w-[max-content] h-[max-content] bg-custom-gradient xl:rounded-xl lg:rounded-xl rounded-xl mx-auto my-12"
              to="#JoinUs"
            >
              <CustomButton
                className="xl:px-9 xl:py-3 xl:text-2xl lg:px-12 lg:py-4 lg:text-4xl sm:px-10 sm:py-2 sm:text-3xl text-lg px-3 py-1 text-white bg-none "
                borderRadius="rounded-lg"
                whiteBtn={false}
              >
                СПРОБУВАТИ
              </CustomButton>
            </Link>
            {/* 2 row - img+txt */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 m-auto xl:w-full lg:w-[75%] sm:w-[85%]">
              <img className="sm:w-full sm:h-auto min-w-[164px] h-[128px] " src={HeroCardImgLt} alt="cardImgLft" />
              <p className="sm:w-full sm:h-auto w-[164px] h-[128px] text-white text-center uppercase xl:text-2xl md:text-2xl sm:text-sm text-xs flex items-center px-2 bg-gradient-to-top border-none rounded-2xl overflow-hidden">
                Оптимізуйте ресторанний бізнес із Velori
              </p>
            </div>
          </div>
        </div>
      </div>
      <p className="2xl:text-5xl xl:text-4xl lg:text-3xl md:text-2xl text-xl font-bold lg:w-[90%] w-full mx-auto mt-10 h-[max-content]">
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
