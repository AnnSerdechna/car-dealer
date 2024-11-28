import { ResultDataProps } from '@/types';
import { FC } from 'react';

type ResultsVehicleProps = {
   data: ResultDataProps[];
};

const ResultsVehicle: FC<ResultsVehicleProps> = ({ data }) => {
   return (
      <div className="flex flex-col gap-2">
         {data.map((item, index) => (
            <div
               key={`${index}-${item?.Model_ID}`}
               className={`
                  min-w-64
                  w-full
                  py-4
                  px-6
                  bg-white
                  shadow
                  rounded-lg
               `}
            >
               <p className="text-xl">{item?.Model_Name}</p>
            </div>
         ))}
      </div>
   );
};

export default ResultsVehicle;
