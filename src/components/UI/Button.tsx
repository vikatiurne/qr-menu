interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className: string;
  disabled: boolean;
}

type OptionalButtonProps = Partial<ButtonProps>;

const Button: React.FC<OptionalButtonProps> = ({
  onClick,
  children,
  className,
  disabled,
}) => {
  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
    }
  };

  return (
    <button
      className={`${className}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
