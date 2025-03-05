import React from 'react';
import ListNavigate from '../UI/ListNavigate';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="pb-5">
      <div>
        <img
          className={`w-[144px] h-[94px]' : 'w-[9rem] h-[5.875rem]'} mobile:w-[4.375rem] mobile:h-[3.125rem] absolute left-[64px] top-[48px]`}
          src="/logo.svg"
          alt="Logo"
        />
      </div>
      <div className=" flex items-center  flex-col justify-center mt-[63px] ">
        {pathname === '/restaurant/sidebar' && (
          <div className="text-center">
            <h1 className="text-[36px] font-semibold">Welcome</h1>
            <h4 className="text-[24px] mt-[48px] mb-[120px]">
              to your restaurant account{' '}
            </h4>
          </div>
        )}
        <ListNavigate gap={'gap-[36px]'} sizeBtn={'w-[372px] h-[55px]'} sizeText={'24px'} activeWhiteBtn={false} />
      </div>
    </div>
  );
};

export default Sidebar;
