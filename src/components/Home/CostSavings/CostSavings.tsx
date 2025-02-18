import costSavingsLt from '@/assets/Home/advantages/costSavingsLt.png';
import graphCard from '@/assets/Home/advantages/graphCard.png';
import SavingsCard from '@/components/UI/SavingsCard';

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
          <SavingsCard value="-20%" description="Витрати на персонал" />
          <SavingsCard imageSrc={graphCard} altText="Graph-Card" />
          <SavingsCard value="-99%" description="Витрати на друк нового меню" />
          <SavingsCard value="+10%" description="Нових відвідувачів щомісяця" />
        </div>
      </div>
    </section>
  );
};

export default CostSavings;
