import { LinkBtn } from '@/components/ui';
import { SelectByMakes, SelectByYears } from '@/components';
import { NextButton } from '@/components/next-btn';
import { Container } from '@/components/container';

const fetchUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function Home() {
  const res = await fetch(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/car?format=json`, { cache: 'no-store' });

  const data = await res.json();

  const mock = [
    {
      "MakeId": 440,
      "MakeName": "ASTON MARTIN",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 441,
      "MakeName": "TESLA",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 442,
      "MakeName": "JAGUAR",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 443,
      "MakeName": "MASERATI",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 445,
      "MakeName": "ROLLS-ROYCE",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 448,
      "MakeName": "TOYOTA",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 449,
      "MakeName": "MERCEDES-BENZ",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 452,
      "MakeName": "BMW",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 454,
      "MakeName": "BUGATTI",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 456,
      "MakeName": "MINI",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 460,
      "MakeName": "FORD",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 464,
      "MakeName": "LINCOLN",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 465,
      "MakeName": "MERCURY",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 466,
      "MakeName": "LOTUS",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 467,
      "MakeName": "CHEVROLET",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 468,
      "MakeName": "BUICK",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 469,
      "MakeName": "CADILLAC",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 470,
      "MakeName": "HOLDEN",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
    {
      "MakeId": 471,
      "MakeName": "OPEL",
      "VehicleTypeId": 2,
      "VehicleTypeName": "Passenger Car"
    },
  ]

  return (
    <Container>
      <div className='flex flex-col gap-8'>
        <h2 className='text-center text-4xl mb-8'>
          Please, select vehicle and year
        </h2>
        <div className='flex items-center gap-4'>
          <SelectByMakes data={data?.Results ?? mock} />
          <SelectByYears />
        </div>

        <div className='self-end'>
          <NextButton />
        </div>
      </div>
    </Container>
  );
}
