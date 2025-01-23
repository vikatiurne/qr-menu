import { SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { changeCheckedSign } from '@/pages/Auth/authSlice';
import { Link } from 'react-router-dom';
import GroupFormInput from '@/components/UI/GroupFormInput';
import MyButton from '@/components/UI/MyButton';
import { useAppSelector } from '@/hooks/useAppSelector';

export type FormData = {
  email: string;
  password: number;
};

const LoginForm: React.FC = () => {
  const { register, handleSubmit, reset, formState , clearErrors} =
    useForm<FormData>({
      mode: 'onBlur'
    });
  const { chekedSignRemember } = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();
  // const fakeData = { email: 'fakeEmail@i.ua', password: 'Test123456' };
  
  const submit: SubmitHandler<FormData> = (data) => {
    const newSubmitData = { ...data, chekedSignRemember };
    console.log(newSubmitData);
    reset()
    dispatch(changeCheckedSign(false));
    // if (
    //   data.email === fakeData.email &&
    //   String(data.password) === fakeData.password
    // ) {
    //   const newSubmitData = { ...data, chekedSignRemember };
    //   console.log(newSubmitData);
    //   reset();
    //   dispatch(changeCheckedSign(false));
    // } else {
    //   console.log('данные не совпадают');
    //   console.log(data);
    // }
  };
  const error: SubmitErrorHandler<FormData> = (data) => {
    console.log(data)
  };

  return (
    <form
      onSubmit={handleSubmit(submit, error)}
      className="max-w-[423px] flex flex-col  sm:gap-10 gap-5  text-basisText min-h-[573px] relative z-50  mt-[138px]"
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
            onChange: () => formState.errors.email && clearErrors('email')
          }),
        }}
      />

      <GroupFormInput
        title={'Password'}
        placeholder={'Enter your Password'}
        type="password"
        error={formState.errors.password}
        activeIconVisible={true}
        registerGroup={{
          ...register('password', {
            required:
              'Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers!',
            pattern: {
              value: /(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/,
              message:
                'Enter a secure password: At least 8 characters long, containing uppercase and lowercase letters and numbers!',
            },
            onChange: () => formState.errors.password && clearErrors('password')
          }),
        }}
      />
      <div className="flex justify-between items-center text-[16px] font-medium ">
        <div className="flex gap-2 relative sm:-left-5 items-center  ">
          <label
            onClick={() => dispatch(changeCheckedSign(!chekedSignRemember))}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="checkbox"
              checked={chekedSignRemember}
              id="checkboxForm"
              className=" rounded-none  w-4 h-4 cursor-pointer"
              readOnly
            />
            <button type="button">Remember me</button>
          </label>
        </div>
        <Link
          to={'/forgot-password'}
          className={`text-[#15C5CE] font-medium relative sm:-right-5 hover:text-[#2f7a7e] `}
        >
          Forgot Password ?
        </Link>
      </div>
      <MyButton
        disabled={!formState.isValid}
        className={`border h-[60px] rounded-md button `}
      >
        Register a new account
      </MyButton>
      <div className="text-center ">
        <span className="mr-2 font-medium  text-lightGrey">
          Don’t have an Account ?
        </span>
        <Link
          to={'/Registration'}
          className={`text-[#15C5CE] font-medium hover:text-[#2f7a7e]`}
        >
          Sign up
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
