import { lazy, Suspense } from 'react';

import { fetchUrlResults } from '@/app/utils';
import { Container } from '@/components/container';
import { LinkBtn } from '@/components/ui';

const ResultsVehicle = lazy(() => import('@/components/resutl-vehicle'));
const EmptyData = lazy(() => import('@/components/empty-data'));

async function fetchVehicleData(makeId: string, year: string) {
   const response = await fetch(
      `${fetchUrlResults}/makeId/${makeId}/modelyear/${year}?format=json`
   );

   if (!response.ok) {
      throw new Error('Failed to fetch vehicle data');
   }

   return response.json();
}

export default async function VehiclePage({
   params,
}: {
   params: { makeId: string; year: string };
}) {
   const { makeId, year } = params;
   const vehicleData = await fetchVehicleData(makeId, year);

   const data = vehicleData?.Results ?? [];

   return (
      <Container contentAlign={'start'}>
         <div className='absolute tpp-10 left-10'>
            <LinkBtn href={'/'} text={'Back'} />
         </div>
         <Suspense fallback={<p>Loading...</p>}>
            {!!data.length ? <ResultsVehicle data={data} /> : <EmptyData />}
         </Suspense>
      </Container>
   );
}
