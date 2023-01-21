import { users } from '@/db/data';
import Image from 'next/image';
import React from 'react';
import Circle from '../Circle/Circle';

import styles from '../../styles/testimonials.module.css';

const Testimonials = () => {
  return (
    <div className={styles.container}>
      <Circle top="-70vh" left="0" right="0" backgroundColor="darkblue" />
      <h1 className={styles.title}>Testimonials</h1>
      <div className={styles.wrapper}>
        {users.map((user) => (
          <div className={styles.card} key={user.id}>
            <Image
              // src={`${process.env.NEXT_PUBLIC_URL}/img/${user.logo}`}
              src={`/assets/images/${user.logo}`}
              width={30}
              height={30}
              alt=""
              loading="eager"
            />
            <p className={styles.comment}>&ldquo;{user.comment}&rdquo;</p>
            <div className={styles.person}>
              <Image
                className={styles.avatar}
                //   src={`${process.env.NEXT_PUBLIC_URL}/img/${user.avatar}`}
                src={`/assets/images/${user.avatar}`}
                width={45}
                height={45}
                style={{ objectFit: 'cover' }}
                alt=""
                loading="eager"
              />
              <div className={styles.info}>
                <span className={styles.username}>{user.name}</span>
                <span className={styles.jobTitle}>{user.title}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
