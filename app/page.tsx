import { SelectByMakes, SelectByYears } from '@/components';
import { NextButton } from '@/components/next-btn';
import { Container } from '@/components/container';
import { fetchUrl } from './utils';

export default async function Home() {
  const res = await fetch(
    `${fetchUrl}/car?format=json`,
    { cache: 'no-store' }
  );

  const data = await res.json();

  return (
    <Container>
      <div className="flex flex-col gap-8">
        <h2 className="text-center text-4xl mb-8">
          Please, select a vehicle and a year
        </h2>
        <div className="flex flex-col lg:flex-row items-center gap-4">
          <SelectByMakes data={data?.Results ?? []} />
          <SelectByYears />
        </div>

        <div className="self-end">
          <NextButton />
        </div>
      </div>
    </Container>
  );
}
