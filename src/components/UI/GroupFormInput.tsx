import React, { useState } from 'react';
import showicon from '@/assets/images/Auth/showicon.svg'
import warning from '@/assets/images/Auth/warning.svg'
import { FieldError , UseFormRegisterReturn } from 'react-hook-form';

interface GroupFormInputProps {
  registerGroup: UseFormRegisterReturn;
  title: string;
  type: string;
  placeholder: string;
  activeIconVisible?: boolean;
  isErrorConfirn?: boolean;
  error?: FieldError | undefined

}

const GroupFormInput: React.FC<GroupFormInputProps> = ({
  title,
  type,
  placeholder,
  isErrorConfirn,
  activeIconVisible,
  registerGroup,
  error,
}) => {
  const [visibleData, setVisibleData] = useState<string>(type);

  return (
    <div className="min-h-[92px] flex  flex-col">
      <h3 className="text-[16px] font-medium mb-2">{title}</h3>
      <div className=" flex relative">
        <input
          className={`  ${error || isErrorConfirn ? 'border-red-500 ' : 'w-full h-[60px] rounded-md pl-[27px]'} border  w-full h-[59px] rounded-md pl-[27px]  `}
          type={visibleData}
          placeholder={placeholder}
          {...registerGroup}
        />
        {activeIconVisible && (
          <button
            type="button"
            disabled={error ? true : false}
            onClick={() =>
              setVisibleData(visibleData === 'text' ? 'password' : 'text')
            }
          >
            <img
              className="absolute  right-5  top-1/2  -translate-y-1/2"
              src={!error ? showicon : warning }
              alt="icon"
            />
          </button>
        )}  
        {error && (
          <img
            className="absolute  right-5  top-1/2  -translate-y-1/2"
            src={!error ? showicon : warning }
            alt="icon"
          />
        )}
      </div>
      {error && (
        <span className={`text-[14px] mt-[6px] text-[#F64C4C]`}>
          {error.message}{' '}
        </span>
      )}
    </div>
  );
};

export default GroupFormInput;
