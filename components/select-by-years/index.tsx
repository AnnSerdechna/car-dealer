'use client';

import { FC, ChangeEvent } from 'react';

import { Select } from '@/components/ui';
import { useUpdatedSearchParams } from '@/hooks/useSelectedSearchParams';

export const SelectByYears: FC = () => {
   const { modelyear, updateQueryParams } = useUpdatedSearchParams();

   const startYear = 2015;
   const currentYear = new Date().getFullYear();

   const yearsData = Array.from(
      { length: currentYear - startYear + 1 },
      (_, i) => startYear + i
   );

   const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
      const selectedYear = event.target.value;
      updateQueryParams('modelyear', selectedYear);
   };

   return (
      <Select
         placeholder={'a year'}
         options={yearsData.map((year) => (
            <option key={year} value={year}>
               {year}
            </option>
         ))}
         value={modelyear}
         onChange={handleChange}
      />
   );
};
