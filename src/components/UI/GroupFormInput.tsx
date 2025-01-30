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
  leftTypeIcon?: React.ReactNode;
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
  leftTypeIcon,
  registerGroup,
  error,
}) => {
  const [visibleData, setVisibleData] = useState<string>(type);
  const [inputValue, setInputValue] = useState('');

  // Класи для div та input залежно від groupType
  const divClassName =
    groupType === 'auth'
      ? 'min-h-[92px] max-sm:min-h-[80px] flex  flex-col gap-2'
      : '';
  const inputClassName =
    groupType === 'auth'
      ? 'outline-[#15C5CE] border  w-full h-[59px] rounded-md pl-[18px] max-sm:h-[48px]'
      : 'w-full font-[18px] placeholder:text-[18px] h-[52px] border border-[#15C5CE] rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[#15C5CE] focus:border-transparent';;
      const errorClass = error
      ? groupType === 'joinUs'
        ? 'mb-[14px]'  // Менша відстань для 'joinUs' і помилки
        : 'mb-[34px]'  // Стандартна відстань 34 пікселі (приблизно mb-8)
      : 'mb-[34px]';
  
  
  
  
      return (
    <div className={` ${divClassName} ${errorClass}`}>
      {title && <h3 className="text-[16px] font-medium">{title}</h3>}
      <div className="flex relative">
        <input
          className={`${inputClassName} ${error ? 'border-red-500' : ''} ${leftTypeIcon && !inputValue ? 'pl-[38px]' : 'pl-[15px]'}`}
          type={visibleData}
          placeholder={placeholder}
          {...registerGroup}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {leftTypeIcon && !inputValue && (
          <span className="absolute left-[14px] top-[28px] -translate-y-1/2 h-5 w-5">
            {leftTypeIcon}
          </span>
        )}
        {error && groupType === 'joinUs' &&(
          <span className="absolute right-[8px] top-1/2 -translate-y-1/2 h-5 w-5">
            <svg
              width="22"
              height="18"
              viewBox="0 0 22 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.916016 17.4167L10.9993 0L21.0827 17.4167H0.916016ZM10.9993 14.6667C11.2591 14.6667 11.4769 14.5787 11.6529 14.4027C11.8289 14.2267 11.9166 14.0091 11.916 13.75C11.9154 13.4909 11.8274 13.2733 11.652 13.0973C11.4766 12.9213 11.2591 12.8333 10.9993 12.8333C10.7396 12.8333 10.5221 12.9213 10.3467 13.0973C10.1713 13.2733 10.0833 13.4909 10.0827 13.75C10.0821 14.0091 10.1701 14.227 10.3467 14.4036C10.5233 14.5802 10.7408 14.6679 10.9993 14.6667ZM10.0827 11.9167H11.916V7.33333H10.0827V11.9167Z"
                fill="#CC2424"
              />
            </svg>
          </span>
        )}
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
              <img
                className="absolute right-5 top-1/2 -translate-y-1/2"
                src={warning}
                alt="icon"
              />
            )}
          </button>
        )}
      </div>
      {error && (
        <span className="text-[14px] mt-[6px] text-[#F64C4C]">
          {error.message}
        </span>
      )}
    </div>
  );
};

export default GroupFormInput;
