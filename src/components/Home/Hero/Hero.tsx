import CustomButton from '@/components/UI/CustomButton';
import { Link } from 'react-router-dom';
import HeroCardImgLt from '@/assets/Home/cardImgLt.png';
import HeroCardImgRt from '@/assets/Home/cardImgRt.png';

const TxtGradientStyle = {
  background: 'linear-gradient(to top, #15C5CE, #0C677C)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};
const Hero: React.FC = () => {
  return (
    <div className="grid grid-rows-2 font-elMassiri text-center text-[#2B2A34]">
      <div className="container mx-auto my-10">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:auto-rows-fr lg:gap-6">
          <div className=" flex flex-col  justify-between mb-10">
            <p className="font-bold 2xl:text-5xl xl:text-4xl lg:text-3xl md:text-4xl text-3xl">
              Розумні
              <span style={TxtGradientStyle}> інтсрументи для успіху </span>
              вашого ресторану
            </p>
            <div className="text-white flex justify-center">
            <Link to="#JoinUs">
              <CustomButton
                className="px-8 py-1 text-2xl"
                borderRadius="rounded-lg"
                whiteBtn={false}
              >
                Спробувати
              </CustomButton>
              </Link>
            </div>
          </div>
          <div className="lg:row-span-2  flex justify-center items-center">
            <img className="" src={HeroCardImgRt} alt="cardImgRgt" />
          </div>
          <div className=" flex items-end justify-center">
            <div className="grid grid-cols-2 gap-4 ">
              <img
                className="w-full mobile:w-[4rem]"
                src={HeroCardImgLt}
                alt="cardImgLft"
              />
              <p className="text-white text-center xl:text-2xl lg:text-xl flex items-center px-2 bg-gradient-to-t from-[#15C5CE] to-[#0C677C] border-none rounded-3xl overflow-hidden">
                Оптимізуйте ресторанний бізнес із Velori
              </p>
            </div>
          </div>
        </div>
      </div>

      <p className="text-4xl font-bold">
        Velori перетворює меню на <span style={TxtGradientStyle}>QR-код</span>,
        а<span style={TxtGradientStyle}>AI-офіціант</span> допомагає обрати
        страви за вподобаннями.
      </p>
    </div>
  );
};

export default Hero;
