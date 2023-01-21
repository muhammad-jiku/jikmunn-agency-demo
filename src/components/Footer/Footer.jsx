import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '../../styles/footer.module.css';

const Footer = () => {
  const year = new Date()?.getFullYear();
  return (
    <div className={styles.container}>
      <div className={styles.cardL}>
        <h1 className={styles.title}>j!KMUNN CREATIVES.</h1>
        <h1 className={styles.linkTitle}>
          <Link href="/contact" className={styles.link} passHref>
            <>
              <span className={styles.linkText}>WORK WITH US</span>
              <Image
                // src={process.env.NEXT_PUBLIC_URL + '/img/link.png'}
                src={`/assets/images/link.png`}
                width={40}
                height={40}
                alt=""
              />
            </>
          </Link>
        </h1>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          NAZIR ROAD, FENI,
          <br /> BD
        </div>
        <div className={styles.cardItem}>
          CONTACT@JIKMUNN.DEV
          <br /> 855_127_6144
        </div>
      </div>
      <div className={styles.cardS}>
        <div className={styles.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div>
        <div className={styles.cardItem}>
          © {year} j!KMUNN CREATIVES,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  );
};

export default Footer;
