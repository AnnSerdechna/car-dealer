import { Container } from '@/components/container';
import { lazy, Suspense } from 'react';

const ResultsVehicle = lazy(() => import('@/components/resutl-vehicle'));

/**
 * In Next.js with the App Router, getStaticProps and getServerSideProps are not used. Instead, Next.js provides new methods for data fetching that are designed to integrate with React Server Components
 */

async function fetchVehicleData(makeId: string, year: string) {
   const response = await fetch(
      `https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`
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

   return (
      <Container>
         <Suspense fallback={<p>...</p>}>
            <ResultsVehicle data={vehicleData?.Results ?? []} />
         </Suspense>
      </Container>
   );
}