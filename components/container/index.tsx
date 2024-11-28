import { FC, ReactNode } from 'react';

type ContainerProps = {
   contentAlign?: 'center' | 'start';
   children: ReactNode;
};

export const Container: FC<ContainerProps> = ({
   contentAlign = 'center',
   children,
}) => {
   return (
      <main
         className={` 
            flex 
            items-${contentAlign}
            justify-center
            h-full 
            min-h-screen
            p-10 
            bg-gray-100
         `}
      >
         {children}
      </main>
   );
};
