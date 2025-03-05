import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import LoginIcon from '@/assets/Header/icon.svg';
import CustomButton from '../UI/CustomButton';
import cn from '@/utils/cn';

const Header: React.FC = () => {
  const [language, setLanguage] = useState('UA');

  const { pathname } = useLocation();
  const restaurantPath = pathname.includes('/restaurant');

  const [isAuth, setIsAuth] = useState(
    pathname.toLocaleLowerCase() === '/login' ||
      pathname.toLocaleLowerCase() === '/registration'
  );

  useEffect(() => {
    setIsAuth(pathname === '/login' || pathname === '/registration');
  }, [pathname]);

  const setUkrainianLanguage = () => setLanguage('UA');
  const setEnglishLanguage = () => setLanguage('EN');

  return (
    <header
      id="Header"
      className={cn(
        'w-full h-full flex justify-between',
        isAuth && 'items-center pt-[1.375rem]',
        restaurantPath && 'bg-gradientToTop px-12'
      )}
    >
      {restaurantPath ? (
        <h1 className="text-white py-5">Назва ресторану</h1>
      ) : (
        <img
          className={cn(
            isAuth ? 'w-[5.625rem] h-[4.25rem]' : 'w-[9rem] h-[5.875rem]',
            'mobile:w-[4.375rem] mobile:h-[3.125rem]'
          )}
          src="/logo.svg"
          alt="Logo"
        />
      )}
      <div
        className={cn(
          'flex flex-1 items-end justify-end gap-[18%]',
          restaurantPath && 'items-center gap-[10%]'
        )}
      >
        <div className="flex flex-1 justify-end items-center gap-1">
          <CustomButton
            restaurantPage
            className={cn(
              restaurantPath && 'text-white bg-none',
              'w-9 h-9 font-raleway text-lg mobile:font-elMessiri mobile:text-sm mobile:w-7  mobile:h-7'
            )}
            onClick={setEnglishLanguage}
            buttonType="language"
            active={language === 'EN'}
            borderRadius={
              language === 'EN' && 'rounded-full before:rounded-full p-1'
            }
            whiteBtn={language === 'EN' && !restaurantPath}
          >
            EN
          </CustomButton>
          <CustomButton
            restaurantPage
            className={cn(
              restaurantPath && 'text-white bg-none',
              'w-9 h-9 font-raleway text-lg mobile:font-elMessiri mobile:text-sm mobile:w-7  mobile:h-7'
            )}
            onClick={setUkrainianLanguage}
            buttonType="language"
            active={language === 'UA'}
            borderRadius={
              language === 'UA' && 'rounded-full before:rounded-full p-1'
            }
            whiteBtn={language === 'UA' && !restaurantPath}
          >
            UA
          </CustomButton>
        </div>
        {pathname === '/' && (
          <Link to="login">
            <button onClick={() => console.log('Login')}>
              <img
                className="w-8 h-8 sm:hidden inline-block"
                src={LoginIcon}
                alt="Login"
              />
            </button>
            <CustomButton
              active
              buttonType="login"
              className="w-[6.6rem] h-[2.3rem] hidden sm:inline-block"
              borderRadius="rounded-[.625rem] before:rounded-[.625rem]"
              whiteBtn
              onClick={() => console.log('Login')}
            >
              <span className="text-lg font-raleway text-black ">Увійти</span>
            </CustomButton>
          </Link>
        )}
        {restaurantPath && (
          <Link to="/">
            <button onClick={() => console.log('Home')}>
              <img
                className="w-8 h-8 sm:hidden inline-block"
                src={LoginIcon}
                alt="Home"
              />
            </button>
            <CustomButton
              buttonType="login"
              className="w-[6.6rem] h-[2.3rem] hidden sm:inline-block"
              borderRadius="rounded-[.625rem] before:rounded-[.625rem]"
              onClick={() => console.log('Home')}
            >
              <span className="text-lg font-raleway text-white">Вийти</span>
            </CustomButton>
          </Link>
        )}
      </div>
    </header>
  );
};
export default Header;
