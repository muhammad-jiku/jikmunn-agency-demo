import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import styles from '../../styles/services.module.css';

const Services = ({ services }) => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <h1 className={styles.title}>What We Can Do?</h1>
        <h1 className={styles.subtitle}>Services we can help you with</h1>
        <div className={styles.services}>
          {services.map((service) => (
            <Link key={service.id} href={`/products/${service.name}`} passHref>
              <div className={styles.service}>
                <div className={styles.catInfo}>{service.desc}</div>
                <span className={styles.cat}>{service.title}</span>
                <div className={styles.media}>
                  {service.video ? (
                    <video
                      className={styles.video}
                      src={`/assets/videos/${service.video}`}
                      autoPlay
                      loop
                    />
                  ) : (
                    <Image
                      //   src={`${process.env.NEXT_PUBLIC_URL}/img/${service.photo}`}
                      src={`/assets/images/${service.photo}`}
                      width="100%"
                      height="100%"
                      layout="responsive"
                      style={{ objectFit: 'cover' }}
                      alt=""
                    />
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
