import React, { ReactNode } from 'react';

interface MyButtonProps {
    children: ReactNode ,
    className: string ,
    disabled?: boolean
}

const MyButton:React.FC<MyButtonProps> = ({children , className , disabled  }) => {
    return (
        <button disabled={disabled} className={`font-medium text-white ${ disabled ? 'bg-[#828386]' : 'bg-custom-gradient  hover:bg-customHover-gradient' } ${className} `}  >
            {children}
        </button>
    );
};

export default MyButton;