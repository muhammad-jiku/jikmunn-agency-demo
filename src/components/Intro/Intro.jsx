import Image from 'next/image';
import React from 'react';

import styles from '../../styles/intro.module.css';
import Circle from '../Circle/Circle';

const Intro = () => {
  return (
    <div className={styles.container}>
      {/* <div className={`${styles.circle} ${styles.circle1}`} />
      <div className={`${styles.circle} ${styles.circle2}`} /> */}
      <Circle backgroundColor="#01c686" top="-45vh" left="-45vh" />
      {/* <Circle backgroundColor="#01c686" right="-40vh" /> */}
      <div className={styles.card}>
        <h1 className={styles.title}>
          <span className={styles.brandName}>j!KMUNN</span> DIGITAL PRODUCT
          AGENCY
        </h1>
        <p className={styles.desc}>
          Create live segments and target the right people for messages based on
          their behaviors.
        </p>
        <button className={styles.button}>DISCOVER</button>
      </div>
      <div className={styles.card}>
        <Image
          //   src={process.env.NEXT_PUBLIC_URL + '/img/jikmunn.png'}
          src={'/assets/images/jikmunn.png'}
          style={{ objectFit: 'contain' }}
          layout="fill"
          alt=""
          loading="eager"
        />
      </div>
    </div>
  );
};

export default Intro;
