import React from 'react';
import Subtract from '@/assets/images/Auth/Subtract.svg';
import warning from '@/assets/images/Auth/warning.svg';
import Close from '@/assets/images/Auth/Close.svg';

interface ErrorMessageProps {
  isErrorEmail: boolean;
  formState: any;
  setIsErrorEmail?: (arg0: boolean) => void;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({
  formState,
  isErrorEmail,
  setIsErrorEmail,
}) => {
  return (
    <div className="flex gap-2 flex-col">
      {formState.errors?.nameRestaurant && (
        <div
          className={`text-[14px] h-[60px] flex items-center  text-[#F64C4C] bg-[#FFF1F1] py-3 px-4 rounded-md gap-2`}
        >
          <img src="/warning.svg" alt="" />
          <span> Please fill in all required fields.</span>
        </div>
      )}

      {isErrorEmail && (
        <div
          className={`text-[14px] h-[60px] flex items-center   ${isErrorEmail ? 'bg-[#F1F8FF] text-basisText' : 'text-[#F64C4C] bg-[#FFF1F1]'}  py-3 px-4 rounded-md gap-2`}
        >
          <img src={` ${isErrorEmail ? Subtract : warning} `} alt="" />
          <div className="flex justify-between items-center">
            <span>
              This mail have allredy been registred. Please try with another
              email.
            </span>
            <button type="button" onClick={() => setIsErrorEmail(false)}>
              <img src={Close} alt="Close icon" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorMessage;
