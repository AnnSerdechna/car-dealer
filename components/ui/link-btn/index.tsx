import Link from 'next/link';
import { FC } from 'react';

export const LinkBtn: FC<{ isDisabled: boolean }> = ({ isDisabled }) => {
  return (
    <Link
      href={'/'}
      className={`
            ${isDisabled ? 'pointer-events-none' : 'pointer-events-auto'}
         `}
    >
      {'Next'}
    </Link>
  );
};
