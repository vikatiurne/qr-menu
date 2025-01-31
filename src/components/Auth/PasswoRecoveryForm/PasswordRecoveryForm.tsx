import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { data } from 'react-router-dom';
import success from '@/assets/images/Auth/PasswordRecovery/Success.png';
import logo from '@/assets/images/Auth/PasswordRecovery/Info.png';
import warning from '@/assets/images/Auth/PasswordRecovery/warning.svg';

interface EmailInputs {
  email: string;
}

const PasswordRecoveryForm: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const [submittedEmail, setSubmittedEmail] = useState<string>('');

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EmailInputs>({
    mode: 'onBlur',
  });

  const onReset = (data: EmailInputs) => {
    if (!data.email || errors.email) {
      return;
    }
    //Отправка письма на email;
    console.log('Sending password reset email to:', data.email);
    setSubmittedEmail(data.email);
    setStatus('success');
  };
  return (
    <div className="w-full max-w-[432px] mobile:max-w-[343px] flex flex-col items-center mt-[80px] relative z-10">
      {status === 'idle' ? (
        <>
          <img src={logo} alt="Info" className="w-[58px] h-[58px] mt-[107px]" />
          <h1 className="w-full mt-[24px] text-[27px] h-[41px] max-w-[224px] font-serif font-bold">
            Reset Password
          </h1>
          <div className="w-full h-[98px] mobile:h-[72px] mt-[32px] flex">
            <p className="max-w-[390px] ml-[9px] text-[16px] font-medium text-[#959895] text-center">
              Enter your email address and we’ll send you an email with
              instructions to reset your password
            </p>
          </div>
          <div className="mt-[32px] w-full max-w-[423px] mobile:max-w-[343px] mobile:mt-[24px] mobile:ml-4">
            <p className="ml-[3px] mobile:ml-0 font-medium text-[#4B4B4B]">
              Enter
            </p>
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
                  <div className="relative w-full  h-[4rem]">
                    <input
                      {...field}
                      type="email"
                      placeholder="Enter your email"
                      className={`w-full h-full pl-[27px] mobile:pl-[18px] border-solid border-[1px]
                    ${errors.email ? 'border-[#F64C4C]' : 'border-[#15C5CE]'} rounded-md focus:outline-none`}
                    />
                    {errors.email && (
                      <>
                        <img
                          src={warning}
                          alt="Warning"
                          className="absolute right-[19px] top-[50%] transform -translate-y-1/2 w-[20px] h-[20px]"
                        />

                        <p className="text-[#F64C4C] font-normal text-[14px] mt-[6px] pb-[21px] mobile:pb-0 mobile:mt-[2px]">
                          {errors.email.message}
                        </p>
                      </>
                    )}
                  </div>
                )}
              />
              <button
                type="submit"
                className={`w-full h-[57px] align-middle bg-gradient-to-b from-[#0C677C] to-[#15C5CE] rounded-md text-white text-base font-medium ${errors.email ? 'mt-[67px]' : 'mt-[32px]'} mobile:mt-[24px]`}
              >
                Reset
              </button>
            </form>
          </div>
        </>
      ) : (
        <>
          <img src={success} alt="Success image" className="mt-[107px]" />
          <h1 className="mt-[24px] text-[31px] font-serif font-semibold">
            Success!
          </h1>
          <p className="max-w-[390px] text-[16px] font-medium text-[#959895] text-center mt-[32px]">
            A email has been send to your {submittedEmail}. Please check for an
            email from company and click on the included link to reset your
            password.
          </p>
          <button
            className="w-full h-[57px] bg-gradient-to-b from-[#0C677C] to-[#15C5CE] rounded-md text-white text-base font-medium mt-[74px]"
            onClick={() => (window.location.href = '/')}
          >
            Back to Home
          </button>
        </>
      )}
    </div>
  );
};

export default PasswordRecoveryForm;
