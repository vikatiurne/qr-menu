import JoinUsPic from '@/assets/Home/png/client/join_us.png';
import CustomButton from '@/components/UI/CustomButton';
import GroupFormInput from '@/components/UI/GroupFormInput';
import React, { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import ErrorMessage from './ErrorMessage';

export type FormData = {
  email: string;
  nameRestaurant: string;
  password: number;
  confirmPassword: number;
};
const JoinUs: React.FC = () => {
  const { register, handleSubmit, reset, getValues, formState, clearErrors } =
    useForm<FormData>({ mode: 'onBlur' });
  const [isErrorEmail, setIsErrorEmail] = useState<boolean>(false);

  return (
    <div className="grid xl:grid-cols-2 grid-cols-1 font-elMessiri text-center text-[#2B2A34] gap-[24px]">
      <div className="">
        <p className="text-2xl xl:text-[40px] mobile:text-[18px] font-bold w-full mx-auto h-[max-content] leading-4 xl:leading-10">
          Приєднуйтесь до
          <span className="bg-gradientToTop text-transparent bg-clip-text">
            {' '}
            Velori!
          </span>
        </p>
        <form className="mx-auto mt-[36px] h-auto container">
          <div className="font-raleway font-[18px]  leading-[1.25] grid grid-cols-1 gap-[34px] text-[#202328]  xl:h-[310px]">
            {/* Email Input */}
            <div className="relative mt-2">
              <div className="relative ">
                <GroupFormInput
                  groupType="joinUs"
                  placeholder={'E-mail'}
                  type="text"
                  error={formState.errors.email}
                  leftTypeIcon={
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g opacity="0.8">
                        <path
                          d="M2.5 3C2.10218 3 1.72064 3.15804 1.43934 3.43934C1.15804 3.72064 1 4.10218 1 4.5V5.293C1.026 5.302 1.051 5.313 1.076 5.325L7.674 8.51C7.88 8.61 8.12 8.61 8.326 8.51L14.924 5.325C14.9487 5.31296 14.9741 5.30227 15 5.293V4.5C15 4.10218 14.842 3.72064 14.5607 3.43934C14.2794 3.15804 13.8978 3 13.5 3H2.5Z"
                          fill="url(#paint0_linear_4270_941)"
                        />
                        <path
                          d="M15 6.95398L8.978 9.85998C8.67299 10.0072 8.33868 10.0836 8 10.0836C7.66132 10.0836 7.32701 10.0072 7.022 9.85998L1 6.95398V11.5C1 11.8978 1.15804 12.2793 1.43934 12.5606C1.72064 12.8419 2.10218 13 2.5 13H13.5C13.8978 13 14.2794 12.8419 14.5607 12.5606C14.842 12.2793 15 11.8978 15 11.5V6.95398Z"
                          fill="url(#paint1_linear_4270_941)"
                        />
                      </g>
                      <defs>
                        <linearGradient
                          id="paint0_linear_4270_941"
                          x1="8.60985"
                          y1="7.74725"
                          x2="8.60985"
                          y2="3"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#15C5CE" />
                          <stop offset="0.96" stop-color="#0C677C" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_4270_941"
                          x1="8.60985"
                          y1="12.0931"
                          x2="8.60985"
                          y2="6.95398"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#15C5CE" />
                          <stop offset="0.96" stop-color="#0C677C" />
                        </linearGradient>
                      </defs>
                    </svg>
                  }
                  registerGroup={{
                    ...register('email', {
                      required: 'Введіть дійсну електронну адресу!',
                      pattern: {
                        value: /.+@.+\..+/i,
                        message: 'Введіть дійсну електронну адресу!',
                      },
                      onChange: () =>
                        formState.errors.email && clearErrors('email'),
                    }),
                  }}
                />
                <span className="absolute inset-y-[15px] left-[14px] items-center"></span>
              </div>
            </div>

            {/* Restaurant Name Input */}
            <div className="relative">
              <GroupFormInput
                groupType="joinUs"
                placeholder={'Назва ресторану'}
                type="text"
                error={formState.errors.nameRestaurant}
                leftTypeIcon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        d="M8.00062 8C8.79627 8 9.55933 7.68393 10.1219 7.12132C10.6846 6.55871 11.0006 5.79565 11.0006 5C11.0006 4.20435 10.6846 3.44129 10.1219 2.87868C9.55933 2.31607 8.79627 2 8.00062 2C7.20497 2 6.44191 2.31607 5.8793 2.87868C5.31669 3.44129 5.00062 4.20435 5.00062 5C5.00062 5.79565 5.31669 6.55871 5.8793 7.12132C6.44191 7.68393 7.20497 8 8.00062 8ZM12.7356 14C13.3536 14 13.8286 13.439 13.6076 12.861C13.1741 11.7251 12.4058 10.7476 11.4045 10.058C10.4031 9.36834 9.21596 8.99908 8.00012 8.99908C6.78428 8.99908 5.59711 9.36834 4.59577 10.058C3.59443 10.7476 2.82614 11.7251 2.39262 12.861C2.17262 13.439 2.64662 14 3.26462 14H12.7356Z"
                        fill="url(#paint0_linear_4270_946)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4270_946"
                        x1="8.49361"
                        y1="12.2"
                        x2="8.49362"
                        y2="2"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#15C5CE" />
                        <stop offset="0.96" stop-color="#0C677C" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                registerGroup={{
                  ...register('nameRestaurant', {
                    required: "Будь ласка, заповніть всі обов'язкові поля. ",
                    onChange: () =>
                      formState.errors.nameRestaurant &&
                      clearErrors('nameRestaurant'),
                  }),
                }}
              />
            </div>

            {/* Password Input */}
            <div className="relative">
              <GroupFormInput
                groupType="joinUs"
                placeholder={'Пароль'}
                type="password"
                error={formState.errors.password}
                leftTypeIcon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 6.00004C14.0002 6.60184 13.8646 7.19594 13.6033 7.73807C13.342 8.28019 12.9618 8.75637 12.4909 9.13113C12.02 9.50589 11.4707 9.76957 10.8837 9.90253C10.2968 10.0355 9.68741 10.0343 9.101 9.89904L7.146 11.854C7.05229 11.9475 6.92535 12 6.793 12H5V13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9474 4.63261 14 4.5 14H2.5C2.36739 14 2.24021 13.9474 2.14645 13.8536C2.05268 13.7598 2 13.6326 2 13.5V11.207C2.00003 11.0747 2.05253 10.9477 2.146 10.854L6.101 6.89904C5.97529 6.35029 5.96684 5.78118 6.07618 5.22894C6.18553 4.67669 6.41021 4.15375 6.73554 3.6943C7.06087 3.23486 7.47952 2.84926 7.96412 2.56273C8.44871 2.27619 8.98832 2.09518 9.54768 2.03152C10.107 1.96786 10.6735 2.02298 11.2101 2.1933C11.7467 2.36361 12.2413 2.64527 12.6615 3.01986C13.0818 3.39444 13.4182 3.85352 13.6489 4.36707C13.8795 4.88062 13.9992 5.43707 14 6.00004ZM10 4.00004C9.80109 4.00004 9.61032 4.07905 9.46967 4.21971C9.32902 4.36036 9.25 4.55112 9.25 4.75004C9.25 4.94895 9.32902 5.13972 9.46967 5.28037C9.61032 5.42102 9.80109 5.50004 10 5.50004C10.1326 5.50004 10.2598 5.55272 10.3536 5.64648C10.4473 5.74025 10.5 5.86743 10.5 6.00004C10.5 6.19895 10.579 6.38972 10.7197 6.53037C10.8603 6.67102 11.0511 6.75004 11.25 6.75004C11.4489 6.75004 11.6397 6.67102 11.7803 6.53037C11.921 6.38972 12 6.19895 12 6.00004C12 5.4696 11.7893 4.9609 11.4142 4.58582C11.0391 4.21075 10.5304 4.00004 10 4.00004Z"
                        fill="url(#paint0_linear_4270_950)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4270_950"
                        x1="8.52273"
                        y1="12.2009"
                        x2="8.52273"
                        y2="2.00586"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#15C5CE" />
                        <stop offset="0.96" stop-color="#0C677C" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                registerGroup={{
                  ...register('password', {
                    required:
                      'Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers!',
                    pattern: {
                      value:
                        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
                      message:
                        'Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers!',
                    },
                    onChange: () =>
                      formState.errors.password && clearErrors('password'),
                  }),
                }}
              />
            </div>

            {/* Confirm Password Input */}
            <div className="relative">
              <GroupFormInput
                groupType="joinUs"
                placeholder={'Підтвердіть пароль'}
                type="password"
                error={formState.errors.confirmPassword}
                leftTypeIcon={
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.8">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M14 6.00004C14.0002 6.60184 13.8646 7.19594 13.6033 7.73807C13.342 8.28019 12.9618 8.75637 12.4909 9.13113C12.02 9.50589 11.4707 9.76957 10.8837 9.90253C10.2968 10.0355 9.68741 10.0343 9.101 9.89904L7.146 11.854C7.05229 11.9475 6.92535 12 6.793 12H5V13.5C5 13.6326 4.94732 13.7598 4.85355 13.8536C4.75979 13.9474 4.63261 14 4.5 14H2.5C2.36739 14 2.24021 13.9474 2.14645 13.8536C2.05268 13.7598 2 13.6326 2 13.5V11.207C2.00003 11.0747 2.05253 10.9477 2.146 10.854L6.101 6.89904C5.97529 6.35029 5.96684 5.78118 6.07618 5.22894C6.18553 4.67669 6.41021 4.15375 6.73554 3.6943C7.06087 3.23486 7.47952 2.84926 7.96412 2.56273C8.44871 2.27619 8.98832 2.09518 9.54768 2.03152C10.107 1.96786 10.6735 2.02298 11.2101 2.1933C11.7467 2.36361 12.2413 2.64527 12.6615 3.01986C13.0818 3.39444 13.4182 3.85352 13.6489 4.36707C13.8795 4.88062 13.9992 5.43707 14 6.00004ZM10 4.00004C9.80109 4.00004 9.61032 4.07905 9.46967 4.21971C9.32902 4.36036 9.25 4.55112 9.25 4.75004C9.25 4.94895 9.32902 5.13972 9.46967 5.28037C9.61032 5.42102 9.80109 5.50004 10 5.50004C10.1326 5.50004 10.2598 5.55272 10.3536 5.64648C10.4473 5.74025 10.5 5.86743 10.5 6.00004C10.5 6.19895 10.579 6.38972 10.7197 6.53037C10.8603 6.67102 11.0511 6.75004 11.25 6.75004C11.4489 6.75004 11.6397 6.67102 11.7803 6.53037C11.921 6.38972 12 6.19895 12 6.00004C12 5.4696 11.7893 4.9609 11.4142 4.58582C11.0391 4.21075 10.5304 4.00004 10 4.00004Z"
                        fill="url(#paint0_linear_4270_950)"
                      />
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_4270_950"
                        x1="8.52273"
                        y1="12.2009"
                        x2="8.52273"
                        y2="2.00586"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stop-color="#15C5CE" />
                        <stop offset="0.96" stop-color="#0C677C" />
                      </linearGradient>
                    </defs>
                  </svg>
                }
                registerGroup={{
                  ...register('confirmPassword', {
                    required:
                      'Введіть надійний пароль: не менше 8 символів, які містять великі та малі літери та цифри!',
                    pattern: {
                      value:
                        /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
                      message:
                        'Введіть надійний пароль: не менше 8 символів, які містять великі та малі літери та цифри!',
                    },
                    validate: (value: number) => {
                      const { password } = getValues();
                      return password === value || 'Паролі не співпадають';
                    },
                    onChange: () =>
                      formState.errors.confirmPassword &&
                      clearErrors('confirmPassword'),
                  }),
                }}
              ></GroupFormInput>
            </div>
            <div className="w-full ">
              <CustomButton
                className="w-full h-[54px] text-[22px] font-elMessiri text-center font-bold leading-[29.7px] uppercase"
                borderRadius="rounded-lg"
                buttonType="menuOptions"
                whiteBtn={false}
                active={formState.isValid}
                disabled={!formState.isValid}
              >
                Реєстрація
              </CustomButton>
            </div>
          </div>
        </form>
      </div>
      <div className=" flex justify-center items-center object-contain">
        <img className="mobile:hidden" src={JoinUsPic} alt="JoinUsPicRgt" />
      </div>
    </div>
  );
};

export default JoinUs;
