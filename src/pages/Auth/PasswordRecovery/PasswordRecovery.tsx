import React from 'react';
import { Controller, useForm } from 'react-hook-form';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { data } from 'react-router-dom';
import logo from '../../../../public/Info.png';

interface EmailInputs {
  email: string;
}

const PasswordRecovery: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInputs>();

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
              required: 'Email is required',
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA0-9]{2,4}$/,
                message: 'Invalid email address',
              },
            }}
            render={({ field }) => (
              <div>
                <input
                  {...field}
                  type="email"
                  placeholder="Enter your email"
                  className="w-[423px] h-[4rem] pl-[27px] border-solid border-[1px] border-[#15C5CE] rounded-md focus:outline-none"
                />
                {errors.email && <p>{errors.email.message}</p>}
              </div>
            )}
          />
        </form>
      </div>
      <button
        type="submit"
        className="w-[423px] h-[57px] mt-[32px] align-middle bg-gradient-to-b from-[#0C677C] to-[#15C5CE] rounded-md text-white text-base font-medium"
      >
        Reset
      </button>
    </div>
  );
};

export default PasswordRecovery;
