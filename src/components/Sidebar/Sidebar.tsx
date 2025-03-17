import React from 'react';
import ListNavigate from '../UI/ListNavigate';
import { useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const {pathname} = useLocation()
  const appSidebar = pathname === '/restaurant/sidebar' ? true : false

  return (
    
    <div className={`${ !appSidebar ? 'border-r-2 border-gray-200 px-2 min-w-[353px]' : 'w-full'} flex items-center  flex-col justify-center  `}>
      <ListNavigate
        typeSidebar={appSidebar}
      />
    </div>
  );
};

export default Sidebar;
