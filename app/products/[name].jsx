import { data } from '@/db/data';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../src/styles/product.module.css';

export default function ProductsPage({ product }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Digital Design for Your Product</title>
        <meta
          name="description"
          content="Web Design, App Development, Content Creation Agency Near NY"
        />
      </Head>
      <div className={styles.cardL}>
        {product.images.map((img) => (
          <div key={img.id} className={styles.imgContainer}>
            <Image
              src={img.url}
              layout="fill"
              style={{ objectFit: 'cover' }}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{product.title}</h1>
        <p className={styles.desc}>{product.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export const getStaticPaths = async () => {
  const products = data;
  console.log(products);
  const paths = products.map((item) => {
    console.log(paths);
    return {
      params: { name: item.name },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (ctx) => {
  console.log(ctx);
  const name = ctx.params.name;
  console.log(name);
  const product = data.filter((item) => item.name === name)[0];
  console.log(product);
  return {
    props: { product },
  };
};
