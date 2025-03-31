import ListNavigate from '@/components/UI/ListNavigate';
import { useLocation } from 'react-router-dom';

const RestaurantHome: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="grid grid-cols-3 pb-5 msm:flex msm:flex-col">
      <div className="flex justify-center mt-12 msm:justify-start msm:p-4 msm:m-0">
        <img
          className={`w-[9rem] h-[5.875rem] mobile:w-[4.375rem] mobile:h-[3.125rem]`}
          src="/logo.svg"
          alt="Logo"
        />
      </div>
      <div className=" flex items-center flex-col justify-center mt-[63px] ">
        {pathname === '/restaurant' && (
          <div className="text-center">
            <h1 className="text-[36px] font-semibold msm:text-4xl">Welcome</h1>
            <h4 className="whitespace-nowrap text-[24px] mt-[48px] mb-[120px]">
              to your restaurant account{' '}
            </h4>
          </div>
        )}
        <ListNavigate
          gap={'gap-[36px]'}
          sizeBtn={'w-[372px] h-[55px] msm:w-[344px]'}
          sizeText={'24px'}
          activeWhiteBtn={false}
        />
      </div>
    </div>
  );
};

export default RestaurantHome;
