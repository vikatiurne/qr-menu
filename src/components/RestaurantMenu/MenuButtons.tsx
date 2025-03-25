import React from 'react';
import CustomButton from '../UI/CustomButton';

const MenuButtons:React.FC = () => {
    return (
        <div>
            <CustomButton children={'Category'} buttonType={'login'} />
            <CustomButton children={'Create a new dish'} buttonType={'login'}/>
        </div>
    );
};

export default MenuButtons;