import { Link, useLocation } from 'react-router-dom';
import LoginIcon from '@/assets/Header/icon.svg';
import CustomButton from '../UI/CustomButton';

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
        <div className="flex flex-1 justify-end items-center gap-1">
          <CustomButton
            className="w-9 h-9 font-raleway text-lg mobile:font-elMessiri mobile:text-sm mobile:w-7  mobile:h-7  "
            active
            buttonType="language"
            borderRadius="rounded-full before:rounded-full p-1"
            whiteBtn
          >
            EN
          </CustomButton>
          <CustomButton
            className="w-9 h-9 font-raleway text-lg mobile:font-elMessiri mobile:text-sm mobile:w-7  mobile:h-7  "
            active={false}
            buttonType="language"
          >
            UA
          </CustomButton>
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
            <CustomButton
              active
              buttonType="login"
              className="w-[6.6rem] h-[2.3rem] mobile:hidden"
              borderRadius="rounded-[.625rem] before:rounded-[.625rem]"
              whiteBtn
              onClick={() => console.log('Login')}
            >
              <span className="text-lg font-raleway text-black ">Увійти</span>
            </CustomButton>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
