import { ResultDataProps } from '@/types';
import { FC } from 'react';

type ResultsVehicleProps = {
   data: ResultDataProps[];
}

const ResultsVehicle: FC<ResultsVehicleProps> = ({ 
   data
}) => {
   return (
      <div>
         {data.map(item => (
            <div 
               key={item?.Model_ID} 
               className={`
                  py-4
                  px-6
                  border
               `}
            >
               <p>{item?.Model_Name}</p>
            </div>
         ))}
      </div>
   )
}

export default ResultsVehicle;