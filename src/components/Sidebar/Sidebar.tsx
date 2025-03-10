import React from 'react';
import ListNavigate from '../UI/ListNavigate';

const Sidebar: React.FC = () => {

  return (
    <div className=" flex items-center  flex-col justify-center ">
      <ListNavigate
        gap={'gap-[36px]'}
        sizeBtn={'w-[372px] h-[55px]'}
        sizeText={'24px'}
        activeWhiteBtn={false}
      />
    </div>
  );
};

export default Sidebar;
