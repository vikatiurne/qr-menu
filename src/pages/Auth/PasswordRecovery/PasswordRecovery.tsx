import React from 'react';
import { Controller, useForm } from 'react-hook-form';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { data } from 'react-router-dom';
import logo from '@/assets/images/Auth/Info.png';
import warning from '@/assets/images/Auth/warning.svg';

interface EmailInputs {
  email: string;
}

const PasswordRecovery: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInputs>({
    mode: 'onBlur',
  });

  const onReset = (data: EmailInputs) => {
    //Отправка письма на email;
    console.log('Sending password reset email to:', data.email);
  };
  return (
    <div className="w-[432px] flex flex-col items-center">
      <img src={logo} alt="Info" className="w-[58px] h-[58px] m-[24px]" />
      <h1 className="text-[31px] h-[41] w-[224] text-bold font-serif font-semibold">
        Reset Password
      </h1>
      <p className="mt-[32px] w-[390px] text-[16px] font-medium text-[#959895] text-left-center">
        Enter your email address and we’ll send you an email with instructions
        to reset your password
      </p>
      <div className="mt-[82px]">
        <p className="ml-[3px] font-medium text-[#4B4B4B]">Enter</p>
        <form onSubmit={handleSubmit(onReset)} className="mt-[9px]">
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,4}$/,
                message: 'Enter a valid e-mail address!',
              },
            }}
            render={({ field }) => (
              <div className="relative w-[423px] h-[4rem]">
                <input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className={`w-full h-full pl-[27px] border-solid border-[1px]
                  ${errors.email ? 'border-[#F64C4C]' : 'border-[#15C5CE]'} rounded-md focus:outline-none`}
                />
                {errors.email && (
                  <>
                    <img
                      src={warning}
                      alt="Warning"
                      className="absolute right-[19px] top-[50%] transform -translate-y-1/2 w-[20px] h-[20px]"
                    />

                    <p className="text-[#F64C4C] font-normal text-[14px] mt-[6px] pb-[21px]">
                      {errors.email.message}
                    </p>
                  </>
                )}
              </div>
            )}
          />
          <button
            type="submit"
            className={`w-[423px] h-[57px] align-middle bg-gradient-to-b from-[#0C677C] to-[#15C5CE] rounded-md text-white text-base font-medium ${errors.email ? 'mt-[67px]' : 'mt-[32px]'}`}
          >
            Reset
          </button>
        </form>
      </div>
    </div>
  );
};

export default PasswordRecovery;
