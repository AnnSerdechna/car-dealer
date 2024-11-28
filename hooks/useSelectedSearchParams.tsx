import { useRouter, useSearchParams } from 'next/navigation';

export const useUpdatedSearchParams = () => {
   const router = useRouter();
   const searchParams = useSearchParams();

   const modelyear = searchParams.get('modelyear') ?? '';
   const makeId = searchParams.get('makeId') ?? '';

   const updateQueryParams = (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
         params.set(key, value);
      } else {
         params.delete(key);
      }
      router.push(`?${params.toString()}`);
   };

   return { modelyear, makeId, updateQueryParams };
};
