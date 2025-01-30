import costSavingsLt from '@/assets/Home/advantages/costSavingsLt.png';
import card from '@/assets/Home/advantages/card.png';

const CostSavings: React.FC = () => {
  return (
    <section className="container mx-auto mb-[3.125rem] min-w-[10.25rem] font-elMessiri text-[#2B2A34]">
      <div className="grid grid-cols-1 gap-[1.5rem] xl:grid-cols-2">
        <div className="flex justify-center items-center object-contain mxl:order-last">
          <img
            className="h-full xl:w-full lg:w-[80%] sm:w-[90%] min-w-[10.25rem] object-contain mobile:object-cover mobile:h-[10.3rem] mobile:w-full"
            src={costSavingsLt}
            alt="CostSavings"
          />
        </div>
        <div className="grid grid-cols-2 gap-[1.5rem] items-end msm:gap-[1rem]">
          <div className="col-span-2 self-start text-center mxl:order-first mxl:text-[280%] ">
            <p className="leading-[1.0] font-bold 2xl:text-[2.5rem] xl:text-[2rem] msm:text-[7vw]">
              <span className="bg-gradientToTop text-transparent bg-clip-text">
                {' '}
                Зменшуйте витрати{' '}
              </span>
              щомісяця!
            </p>
          </div>
          <div className="w-full h-full aspect-[4/3] flex flex-col justify-center items-center px-2 bg-gradientToTop text-white text-center uppercase rounded-[1.25rem] mobile:rounded-[.625rem]">
            <span className="leading-[1.0] text-[210%] xl:text-[180%] sm:mb-[.375rem] lg:mb-[.625rem] lg:text-[250%] msm:text-[7vw]">
              -20%
            </span>
            <p className="text-[1.375rem] xl:text-[1.25rem] lg:text-[2.125rem] msm:text-[4vw]">
              Витрати на персонал
            </p>
          </div>
          <div className="w-full h-full aspect-[4/3]">
            <img className="w-full h-full" src={card} alt="Graph-Card" />
          </div>
          <div className="w-full h-full aspect-[4/3] flex flex-col justify-center items-center px-2 bg-gradientToTop text-white text-center uppercase rounded-[1.25rem] mobile:rounded-[.625rem]">
            <span className="leading-[1.0] text-[210%] xl:text-[180%] sm:mb-[.375rem] lg:mb-[.625rem] lg:text-[250%] msm:text-[7vw]">
              -99%
            </span>
            <p className="text-[1.375rem] xl:text-[1.25rem] lg:text-[2.125rem] msm:text-[4vw]">
              Витрати на друк
            </p>
          </div>
          <div className="w-full h-full aspect-[4/3] flex flex-col justify-center items-center px-2 bg-gradientToTop text-white text-center uppercase rounded-[1.25rem] mobile:rounded-[.625rem]">
            <span className="leading-[1.0] text-[210%] xl:text-[180%] sm:mb-[.375rem] lg:mb-[.625rem] lg:text-[250%] msm:text-[7vw]">
              -10%
            </span>
            <p className="text-[1.375rem] xl:text-[1.25rem] lg:text-[2.125rem] msm:text-[4vw]">
              Нових відвідувачів щомісяця
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CostSavings;
