import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import icon1 from '@/assets/Sidebar/svg/1r.svg';
import icon2 from '@/assets/Sidebar/svg/menu.svg';
import icon3 from '@/assets/Sidebar/svg/3.svg';
import icon4 from '@/assets/Sidebar/svg/4.png';
import icon11 from '@/assets/Sidebar/svg/11.svg';
import icon22 from '@/assets/Sidebar/svg/22.svg';
import icon33 from '@/assets/Sidebar/svg/33.svg';
import icon44 from '@/assets/Sidebar/svg/44.svg';

import CustomButton from './CustomButton';
type listNavType = {
  title: string;
  id: number;
  link: string;
  icon: string;
  icon2: string;
};
interface ListNavigateProps {
  typeSidebar: boolean;
}
const ListNavigate: React.FC<ListNavigateProps> = ({ typeSidebar }) => {

  const listNav: listNavType[] = [
    {
      title: 'Tables',
      id: 0,
      link: '/restaurant/tables',
      icon: icon1,
      icon2: icon11,
    },
    {
      title: 'Menu',
      id: 1,
      link: '/restaurant/menu',
      icon: icon2,
      icon2: icon22,
    },
    {
      title: 'Settings',
      id: 2,
      link: '/restaurant/settings',
      icon: icon3,
      icon2: icon33,
    },
    {
      title: 'Support',
      id: 3,
      link: '/restaurant/support',
      icon: icon4,
      icon2: icon44,
    },
  ];
  const [activeLink, setActiveLink] = useState(0);
  
  return (
    <div
      className={`flex flex-col ${typeSidebar ? 'gap-[36px]' : 'gap-[24px]'}  `}
    >
      {listNav.map((nav) => (
        <Link
          className={`text-white  font-semibold ${typeSidebar ? 'text-[24px]' : 'text-[18px]'}  `}
          to={nav.link}
          key={nav.id}
          onClick={ () => setActiveLink(nav.id) }
        >
          <CustomButton
            buttonType={'login'}
            active={true}
            whiteBtn={
              !typeSidebar && activeLink != nav.id
            }
            className={`${typeSidebar ? 'w-[372px]' : 'w-[225px]'} ${typeSidebar ? 'h-[55px]' : 'h-[50px]'}   flex items-center justify-center ${ typeSidebar || activeLink === nav.id ? 'text-white' : 'text-black'} `}
            borderRadius="rounded-[6px]"
          >
            <div className="flex items-center justify-center gap-[16px] ">
              <img
                src={
                  (!typeSidebar && activeLink === nav.id || typeSidebar ? nav.icon : nav.icon2)
                }
                alt=""
                className={` w-[24px] h-[24px] ${nav.id === 0 && 'w-[22px] h-[19px]'} `}
              />
              <div>
                {typeSidebar
                  ? nav.title.toLocaleUpperCase()
                  : nav.title.charAt(0).toUpperCase() + nav.title.slice(1)}
              </div>
            </div>
          </CustomButton>
        </Link>
      ))}
    </div>
  );
};

export default ListNavigate;
