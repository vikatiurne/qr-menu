import ListNavigate from '@/components/UI/ListNavigate';
import React from 'react';

const RestaurantHome: React.FC = () => {
  return (
    <div className="border-r-2 border-gray-200 px-2 min-w-[353px] flex items-center  flex-col">
      <ListNavigate typeSidebar={true} />
    </div>
  );
};

export default RestaurantHome;
