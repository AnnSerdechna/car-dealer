'use client';

import { FC, ChangeEvent } from 'react';

import { Select } from '@/components/ui';
import { VehicleData } from '@/types';
import { useUpdatedSearchParams } from '@/hooks/useSelectedSearchParams';

type SelectByMakesProps = {
  data: VehicleData[];
};

export const SelectByMakes: FC<SelectByMakesProps> = ({ data }) => {
  const { makeId, updateQueryParams } = useUpdatedSearchParams();

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedMakeId = event.target.value;
    updateQueryParams('makeId', selectedMakeId);
  };

  return (
    <Select
      options={data?.map((option) => (
        <option key={option.MakeId} value={option.MakeId}>
          {option.MakeName}
        </option>
      ))}
      value={makeId}
      onChange={handleChange}
    />
  );
};
