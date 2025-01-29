import React, { useState } from 'react';
import showicon from '@/assets/auth/svg/showicon.svg';
import warning from '@/assets/auth/svg/warning.svg';
import invisible from '@/assets/auth/svg/invisible.svg';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

type GroupType = 'auth' | 'joinUs';

interface GroupFormInputProps {
  registerGroup: UseFormRegisterReturn;
  title?: string;
  type: string;
  placeholder: string;
  groupType?: GroupType; // Необов’язковий проп
  activeIconVisible?: boolean;
  isErrorConfirn?: boolean;
  error?: FieldError | undefined;
}

const GroupFormInput: React.FC<GroupFormInputProps> = ({
  title,
  type,
  placeholder,
  groupType = 'auth', // Значення за замовчуванням
  isErrorConfirn,
  activeIconVisible,
  registerGroup,
  error,
}) => {
  const [visibleData, setVisibleData] = useState<string>(type);

  // Класи для div та input залежно від groupType
  const divClassName =
    groupType === 'auth' 
    ? 'min-h-[92px] max-sm:min-h-[80px] flex  flex-col gap-2' 
    : '';
  const inputClassName =
    groupType === 'auth'
      ? 'outline-[#15C5CE] border  w-full h-[59px] rounded-md pl-[18px] max-sm:h-[48px]'
      : 'w-full font-[18px] placeholder:text-[18px] pl-[38px] h-[52px] border border-[#15C5CE] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#15C5CE] focus:border-transparent';

  return (
    <div className={` ${divClassName}`}>
      {title && <h3 className="text-[16px] font-medium">{title}</h3>}
      <div className="flex relative">
        <input
          className={`${inputClassName} ${error ? 'border-red-500' : ''}`}
          type={visibleData}
          placeholder={placeholder}
          {...registerGroup}
        />
        {activeIconVisible && (
          <button
            type="button"
            disabled={!!error}
            onMouseDown={(e) => {
              e.preventDefault();
              setVisibleData(visibleData === 'text' ? 'password' : 'text');
            }}
          >
            {!error ? (
              <img
                className="absolute right-5 top-1/2 -translate-y-1/2 h-5 w-5"
                src={visibleData === 'text' ? showicon : invisible}
                alt="icon"
              />
            ) : (
              <img className="absolute right-5 top-1/2 -translate-y-1/2" src={warning} alt="icon" />
            )}
          </button>
        )}
      </div>
      {error && <span className="text-[14px] mt-[6px] text-[#F64C4C]">{error.message}</span>}
    </div>
  );
};

export default GroupFormInput;
