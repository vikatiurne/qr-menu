import React from 'react';

interface TablesPopupProps{
    setIsActivePopup: (boolean) => void 
    isActivePopup: boolean
}

const TablesPopup:React.FC<TablesPopupProps> = ({setIsActivePopup , isActivePopup}) => {
    return (
        <div>
            <span onClick={() => setIsActivePopup(!isActivePopup)} className='cursor-pointer'>close</span>
            <h1>Ordering the table 1</h1>
        </div>
    );
};

export default TablesPopup;