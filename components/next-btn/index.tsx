'use client';

import { FC } from 'react';

import { LinkBtn } from '@/components/ui';
import {useUpdatedSearchParams} from '@/hooks/useSelectedSearchParams';

export const NextButton: FC = () => {
   const {modelyear, makeId } = useUpdatedSearchParams();

   const isEnabled = !!modelyear && !!makeId;

   return (
      <>
         <LinkBtn
            href={`result/${makeId}/${modelyear}`}
            text={'Next'}
            isDisabled={!isEnabled}
         />
      </>
   )
}