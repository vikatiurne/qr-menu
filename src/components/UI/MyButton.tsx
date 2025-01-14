import React, { ReactNode } from 'react';

interface MyButtonProps {
    children: ReactNode ,
    className: string ,
}

const MyButton:React.FC<MyButtonProps> = ({children , className  }) => {
    return (
        <button className={`font-medium bg-custom-gradient  hover:bg-customHover-gradient ${className} `}>
            {children}
        </button>
    );
};

export default MyButton;