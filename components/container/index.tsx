import { FC, PropsWithChildren } from 'react';

export const Container: FC<PropsWithChildren> = ({ children }) => {
   return (
      <main
         className={`
            flex 
            items-center
            justify-center 
            h-screen  
            p-10 
            bg-gray-100
         `}
      >
         {children}
      </main>
   )
}