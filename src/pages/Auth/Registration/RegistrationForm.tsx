import GroupFormInput from '@/components/UI/GroupFormInput';
import React, { useState } from 'react';
import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import MyButton from '@/components/UI/MyButton';

export type FormData = {
  email: string;
  nameRestaurant: string;
  password: number;
  confirmPassword: number;
};

const RegistrationForm: React.FC = () => {
  const { register, handleSubmit,reset, getValues , formState , } =
    useForm<FormData>();
  const [isErrorEmail, setIsErrorEmail] = useState(false);
  const fakeEmail = 'fakeEmail@i.ua';

  const submit: SubmitHandler<FormData> = (data) => {
    if (data.confirmPassword === data.password && data.email != fakeEmail) {
      console.log(data);
      setIsErrorEmail(false)
      reset()
    }else if(data.email === fakeEmail){
      setIsErrorEmail(true)
    } else {
      console.log('ne');
    }
  };
  const error: SubmitErrorHandler<FormData> = (data) => {
    setIsErrorEmail(false)
  };
  return (
    <form
      className="max-w-[423px] flex flex-col gap-10 p-5 text-basisText min-h-[573px]"
      onSubmit={handleSubmit(submit, error)}
    >
      <div>
        <h2 className="font-bold text-[31px]">Sign in to</h2>
        <h3 className="font-medium text-[24px]">restaurant control system</h3>
      </div>
      <GroupFormInput
        title={'Email'}
        placeholder={'Enter your email'}
        type="text"
        error={formState.errors.email}
        registerGroup={{
          ...register('email', {
            required: 'Enter a valid e-mail address!',
            pattern: {
              value: /.+@.+\..+/i,
              message: 'Enter a valid e-mail address!',
            },
          }),
        }}
      />
      <GroupFormInput
        title={'Name of the restaurant'}
        placeholder={'Enter the restaurant name'}
        type="text"
        error={formState.errors.nameRestaurant}
        registerGroup={{
          ...register('nameRestaurant', {
            required: 'Please fill in all required fields. ',
          }),
        }}
      />
      <GroupFormInput
        title={'Password'}
        placeholder={'Enter your Password'}
        type="text"
        error={formState.errors.password}
        activeIconVisible={true}
        registerGroup={{
          ...register('password', {
            required: 'Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers!',
            pattern: {
              value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/ ,
              message: 'Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers!'
            },
          }),
        }}
      />
      <GroupFormInput
        title={'Confirm password'}
        placeholder={'Confirm ur Password'}
        type="text"
        error={formState.errors.confirmPassword}
        activeIconVisible={true}
        registerGroup={{
          ...register('confirmPassword', {
            required: 'Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers!',
            pattern: {
              value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/ ,
              message: 'Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers!'
            },
           validate: (value: number) => {
              const { password } = getValues();
              return password === value || 'Passwords do not match';
            }
          }),
        }}        
      />
      <ErrorMessage formState={formState} isErrorEmail={isErrorEmail}  />

      <MyButton className="border h-[60px] rounded-md button text-white ">
        Register a new account
      </MyButton>
      <div className="text-center ">
        <span className="mr-2 font-medium text-lightGrey">
          Already have an Account ?
        </span>
        <Link
          to={'/Login'}
          type="button"
          className={`text-[#15C5CE] font-medium hover:text-[#2f7a7e]`}
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default RegistrationForm;
