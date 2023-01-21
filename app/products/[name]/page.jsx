import { data } from '@/db/data';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { use } from 'react';
import styles from '../../../src/styles/product.module.css';

async function getProducts(params) {
  const name = await params?.name;
  const product = data?.filter((item) => item?.name === name)[0];
  return product;
}

export default function ProductsPage({ params }) {
  const productDetails = use(getProducts(params));
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
        {productDetails?.images?.map((img) => (
          <div key={img?.id} className={styles.imgContainer}>
            <Image
              src={img?.url}
              layout="fill"
              style={{ objectFit: 'cover' }}
              alt=""
            />
          </div>
        ))}
      </div>
      <div className={styles.cardS}>
        <h1 className={styles.title}>{productDetails?.title}</h1>
        <p className={styles.desc}>{productDetails?.longDesc}</p>
        <button className={styles.button}>
          <Link href="/contact">Contact</Link>
        </button>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const products = data;

  return products?.map((item) => ({
    name: item?.name?.toString(),
  }));
}
