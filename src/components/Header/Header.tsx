import { Link, useLocation } from 'react-router-dom';
import Button from '@/components/UI/Button';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <div className="w-full h-full flex justify-between">
      <img className="w-[144px] h-[94px]" src="/logo.svg" alt="Logo" />
      <div className="flex items-end justify-end gap-[182px]">
        <div className="flex justify-between w-[88px] h-[44px]">
          <button className="font-raleway text-lg border rounded-full p-2">
            EN
          </button>
          <button className="font-raleway text-lg">UA</button>
        </div>
        {location.pathname === '/' && (
          <Link to="login">
            <Button
              className="w-[144px] h-[44px] rounded-[9px] p-[2px] bg-gradient-to-t from-[#15C5CE] to-[#0C677C] "
              onClick={() => console.log('Login')}
            >
              <span className="flex items-center justify-center w-full h-full px-[32px] py-[10px] bg-white rounded-[10px]">
                Увійти
              </span>
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};
export default Header;
