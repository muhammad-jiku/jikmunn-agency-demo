import { data } from '@/db/data';
import Intro from '@/src/components/Intro/Intro';
import Services from '@/src/components/Services/Services';
import Testimonials from '@/src/components/Testimonials/Testimonials';

export default function Home({ services }) {
  return (
    <div>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
}

export const getStaticProps = async () => {
  const services = await data;
  console.log('services', services);
  return {
    props: { services },
  };
};
