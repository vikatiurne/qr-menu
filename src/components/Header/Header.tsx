import { Link, useLocation } from 'react-router-dom';
import Button from '@/components/UI/Button';
import LoginIcon from '@/assets/Header/icon.svg';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <header className="w-full h-full flex justify-between">
      <img
        className="w-[9rem] h-[5.875rem] mobile:w-[4.375rem] mobile:h-[3.125rem]"
        src="/logo.svg"
        alt="Logo"
      />
      <div className="flex flex-1 items-end justify-end gap-[18%]">
        <div className="flex items-center justify-end gap-5">
          <button className="font-raleway text-lg tablet:w-6 mobile:font-elMassiri mobile:text-sm">
            EN
          </button>
          <button className="font-raleway text-lg tablet:w-6 mobile:font-elMassiri mobile:text-sm">
            UA
          </button>
        </div>
        {location.pathname === '/' && (
          <Link to="login">
            <button onClick={() => console.log('Login')}>
              <img
                className="w-8 h-8 hidden mobile:inline-block"
                src={LoginIcon}
                alt="Login"
              />
            </button>
            {/* <Button
              className="w-[9rem] h-[2.75rem] rounded-[.6875rem] p-[.25rem] bg-gradient-to-t from-[#15C5CE] to-[#0C677C] mobile:hidden"
              onClick={() => console.log('Login')}
            >
              <span className="flex items-center justify-center w-full h-full px-[2rem] py-[.625rem] bg-white rounded-[.625rem]">
                Увійти
              </span>
            </Button> */}
            <Button className="relative text-lg font-raleway w-[7.625rem] h-[2.75rem] bg-white rounded-[.625rem] border-none py-[.625rem] px-8 before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-t before:from-[#15C5CE] before:to-[#0C677C] before:rounded-[.75rem] before:m-[-0.2rem] before:z-[-1]">
              Увійти
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
