import { Container } from '@/components';
import { FC } from 'react';

const EmptyData: FC = () => {
   return (
      <Container>
         <p className="text-xl">No data according to your params</p>
      </Container>
   );
};

export default EmptyData;
