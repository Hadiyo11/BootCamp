import React, { ReactElement } from 'react';
import styles from '../styles/components/ProfilePic.module.scss';

interface Props {}

function ProfilePic({}: Props): ReactElement {
  return (
    <div className={styles.container}>
      <img
        src="./public/images/f36c7aaa-0a20-462d-b5bb-e0406bcba0b3.JPG"
        className={`${styles.secondary} ${styles.left}`}
      />
      <img
        src="/images/pk_draw.jpeg"
        className={`${styles.secondary} ${styles.right}`}
      />

      <img src="./public/images/f36c7aaa-0a20-462d-b5bb-e0406bcba0b3.JPG" alt="Small doodle of myself" />

      <img
        src="./public/images/f36c7aaa-0a20-462d-b5bb-e0406bcba0b3.JPGf myself"
        className={styles.easterEgg}
      />
    </div>
  );
}

export default ProfilePic;
