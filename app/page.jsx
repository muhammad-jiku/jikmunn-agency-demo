//  internal imports
import { data } from '@/db/data';
import Intro from '@/src/components/Intro/Intro';
import Services from '@/src/components/Services/Services';
import Testimonials from '@/src/components/Testimonials/Testimonials';

async function getServices() {
  const servicesResult = await data;
  return servicesResult;
}

export default async function Home() {
  const services = await getServices();
  return (
    <div>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}
