import JoinUsPic from '@/assets/Home/png/client/join_us.png';
import React from 'react';
import Form from '@/components/Home/JoinUs/Form';

const JoinUs: React.FC = () => {
  return (
    <div className="lg:min-h-[498px] grid xl:grid-cols-2 grid-cols-1 font-elMessiri text-center text-[#2B2A34] gap-[24px]">
      <div>
        <p className="text-2xl xl:text-[40px] mobile:text-[18px] font-bold w-full mx-auto h-[max-content] leading-4 xl:leading-10">
          Приєднуйтесь до <span className="bg-gradientToTop text-transparent bg-clip-text"> Velori!</span>
        </p>
        {/* Додаємо форму під текстом */}
        <Form />
      </div>
      <div className="flex justify-center items-center object-contain">
        <img className="hidden lg:block max-h-[498px]" src={JoinUsPic} alt="JoinUsPicRgt" />
      </div>
    </div>
  );
};

export default JoinUs;
