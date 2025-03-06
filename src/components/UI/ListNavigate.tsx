import { Link, useLocation } from 'react-router-dom';
import icon1 from '@/assets/Sidebar/svg/1r.svg';
import icon2 from '@/assets/Sidebar/svg/menu.svg';
import icon3 from '@/assets/Sidebar/svg/3.svg';
import icon4 from '@/assets/Sidebar/svg/4.png';
import CustomButton from './CustomButton';

type listNavType = {
  title: string;
  id: number;
  link: string;
  icon: string;
};

interface ListNavigateProps {
  gap: string;
  sizeBtn?: string;
  sizeText: string;
  activeWhiteBtn: boolean;
}

const ListNavigate: React.FC<ListNavigateProps> = ({
  gap,
  sizeBtn,
  sizeText,
  activeWhiteBtn,
}) => {
  const { pathname } = useLocation();

  const listNav: listNavType[] = [
    { title: 'Tables', id: 0, link: '/restaurant/tables', icon: icon1 },
    { title: 'Menu', id: 1, link: '/', icon: icon2 },
    { title: 'Settings', id: 2, link: '/', icon: icon3 },
    { title: 'Support', id: 3, link: '/', icon: icon4 },
  ];

  return (
    <ul className={`flex flex-col ${gap}`}>
      {listNav.map((nav) => (
        <li key={nav.id}>
          <Link
            className={`text-white font-semibold text-[${sizeText}]`}
            to={nav.link}
          >
            <CustomButton
              buttonType={'login'}
              active={true}
              whiteBtn={
                activeWhiteBtn &&
                pathname != `/restaurant/${nav.title.toLocaleLowerCase()}`
              }
              className={`${sizeBtn} uppercase flex items-center justify-center ${pathname === `/restaurant/sidebar` || pathname === `/restaurant/${nav.title.toLocaleLowerCase()}` ? 'text-white' : 'text-black'} `}
              borderRadius="rounded-[6px]"
            >
              <div className="flex items-center justify-center gap-[16px] ">
                <img src={nav.icon} alt="" className={`w-[24px] h-[24px] `} />
                <span>{nav.title}</span>
              </div>
            </CustomButton>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default ListNavigate;
