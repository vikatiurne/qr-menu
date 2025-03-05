import React, { ReactNode } from 'react';

interface PopupProps {
    children:ReactNode ,
    className?: string ,
}

const Popup:React.FC<PopupProps> = ({children , className}) => {
    return (
        <div className={`${className} shadow-[0_0px_15px_rgba(0,0,0,0.25)] `} >
            {children}
        </div>
    );
};

export default Popup;