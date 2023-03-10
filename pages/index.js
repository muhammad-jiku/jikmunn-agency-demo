//  internal imports
import Head from 'next/head';
import { data } from '@/db/data';
import Intro from '@/src/components/Intro/Intro';
import Services from '@/src/components/Services/Services';
import Testimonials from '@/src/components/Testimonials/Testimonials';

const HomePage = ({ services }) => {
  return (
    <div>
      <Head>
        <title>Jikmunn Agency</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Intro />
      <Services services={services} />
      <Testimonials />
    </div>
  );
};

export default HomePage;

export const getStaticProps = () => {
  const services = data;
  return {
    props: { services },
  };
};
