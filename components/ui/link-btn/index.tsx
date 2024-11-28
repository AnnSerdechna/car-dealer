import Link from 'next/link';
import { FC } from 'react';

type LinkBtnProps = {
   href: string;
   text: string;
   isDisabled?: boolean;
};

export const LinkBtn: FC<LinkBtnProps> = ({
   href,
   text,
   isDisabled = false,
}) => {
   return (
      <Link
         href={href}
         className={`
      	${isDisabled ? 'pointer-events-none' : 'pointer-events-auto'}
        	border
			border-gray-300 
         bg-white
         px-8
      	py-3
         text-xl
         rounded-lg 
      `}
      >
         {text}
      </Link>
   );
};
