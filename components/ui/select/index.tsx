import React, { FC, ReactNode } from 'react';

interface SelectComponentProps {
  options: ReactNode;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Select: FC<SelectComponentProps> = ({
  options,
  value,
  onChange,
}) => {
  return (
    <div className={'relative w-64'}>
      <select
        className={`
               block 
               w-full 
               appearance-none 
               rounded-lg 
               border 
               border-gray-300 
               bg-white
               px-4 
               py-2 
               pr-8 
               text-gray-700
               focus:border-blue-500 
               focus:outline-none 
               focus:ring-1 
               focus:ring-blue-500
            `}
        value={value}
        onChange={onChange}
      >
        {options}
      </select>
      <div
        className={`
               pointer-events-none 
               absolute 
               inset-y-0 
               right-0 
               flex 
               items-center 
               px-2 
               text-gray-500
            `}
      >
        <svg
          className="h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
    </div>
  );
};
