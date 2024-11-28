import { LinkBtn } from '@/components/ui';
import { SelectByMakes, SelectByYears } from '@/components';

const fetchUrl = process.env.NEXT_PUBLIC_API_URL;

export default async function Home() {
  const res = await fetch(`${fetchUrl}/car?format=json`, { cache: 'no-store' });

  const data = await res.json();

  return (
    <main>
      <SelectByMakes data={data?.Results ?? []} />
      <SelectByYears />

      <LinkBtn isDisabled />
    </main>
  );
}
