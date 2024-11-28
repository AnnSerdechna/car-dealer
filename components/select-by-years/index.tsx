'use client';

import { FC, ChangeEvent } from 'react';

import { Select } from '@/components/ui';
import { useUpdatedSearchParams } from '@/hooks/useSelectedSearchParams';

export const SelectByYears: FC = () => {
  const { year, updateQueryParams } = useUpdatedSearchParams();

  const startYear = 2015;
  const currentYear = new Date().getFullYear();

  const yearsData = Array.from(
    { length: currentYear - startYear + 1 },
    (_, i) => startYear + i
  );

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedYear = event.target.value;
    updateQueryParams('year', selectedYear);
  };

  return (
    <Select
      options={yearsData.map((year) => (
        <option key={year} value={year}>
          {year}
        </option>
      ))}
      value={year}
      onChange={handleChange}
    />
  );
};
