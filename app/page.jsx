import { data } from '@/db/data';
import Intro from '@/src/components/Intro/Intro';
import Services from '@/src/components/Services/Services';
import Testimonials from '@/src/components/Testimonials/Testimonials';

async function getProducts(params) {
  const name = await params?.name;
  const product = data?.filter((item) => item?.name === name)[0];
  return product;
}

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
