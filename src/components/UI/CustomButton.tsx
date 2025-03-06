import cn from '@/utils/cn';

type ButtonType = 'login' | 'language' | 'custom';

interface ButtonProps {
  children: React.ReactNode;
  buttonType: ButtonType;
  active: boolean;
  onClick: () => void;
  className: string;
  disabled: boolean;
  whiteBtn: boolean;
  borderRadius: string;
  restaurantPage: boolean;
}

type OptionalButtonProps = Partial<ButtonProps> & {
  children: React.ReactNode;
  buttonType: ButtonType;
};

const CustomButton: React.FC<OptionalButtonProps> = ({
  buttonType,
  borderRadius,
  onClick,
  active,
  className = '',
  children,
  whiteBtn,
  disabled,
  restaurantPage,
}) => {
  enum currentButtonType {
    login = 'w-[calc(100%-2.1px)] h-[calc(100%-2.1px)]',
    language = 'w-[calc(100%-2.3px)] h-[calc(100%-2.1px)]',
  }

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <button
      className={cn(
        className,
        borderRadius,
        disabled
          ? 'bg-[#828386]'
          : 'bg-custom-gradient  hover:bg-customHover-gradient',
        'relative',
        active && 'bg-gradientToTop',
        active && restaurantPage && 'border',
        !restaurantPage && 'border-none'
      )}
      onClick={handleClick}
      disabled={disabled}
    >
      {active && (
        <span
          className={cn(
            currentButtonType[buttonType],
            borderRadius,
            whiteBtn && 'bg-white',
            'absolute inset-0 z-10 translate-x-[.075rem] translate-y-[.075rem]'
          )}
        ></span>
      )}
      <span className="relative z-20">{children}</span>
    </button>
  );
};

export default CustomButton;
