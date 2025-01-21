interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
  disabled: boolean;
  whiteBtn: boolean;
  borderRadius: string;
}

type OptionalButtonProps = Partial<ButtonProps>;

const CustomButton: React.FC<OptionalButtonProps> = ({
  borderRadius,
  className = '',
  children,
  whiteBtn,
  disabled,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <button
      className={`relative flex items-center justify-center bg-gradient-to-t from-[#15C5CE] to-[#0C677C] border-none overflow-hidden ${borderRadius} ${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {whiteBtn && (
        <span
          className={`absolute inset-0 ${borderRadius} bg-white z-10 w-[calc(100%-2px)] h-[calc(100%-2px)] transform translate-x-[1px] translate-y-[1px]`}
        ></span>
      )}
      <span className="relative z-20">{children}</span>
    </button>
  );
};

export default CustomButton;
