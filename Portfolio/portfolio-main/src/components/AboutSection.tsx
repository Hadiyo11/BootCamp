import React, { ReactElement } from 'react';
import styles from '../styles/components/AboutSection.module.scss';

import SectionHeader from './SectionHeader';
import ProfilePic from './ProfilePic';
import Button from './Button';
import ScrollingText from './ScrollingText';

interface Props {
  contactRef: any;
}

function AboutSection({ contactRef }: Props): ReactElement {
  return (
    <section className={styles.container}>
      <SectionHeader title="About" align="right" />

      <div className={styles.grid}>
        <div className={styles.imageWrapper}>
          <ProfilePic />
        </div>

        <div className={styles.aboutWrapper}>
          <p>
          As a MERN stack developer, I bring a strong foundation in full-stack web development using the MERN (MongoDB, Express.js, React.js, Node.js) technology stack. With a passion for creating efficient and scalable web applications, I have honed my skills in front-end and back-end development, database management, and API integration.
          </p>

          <div className={styles.scrollerContainer}>
            <h1>I am a</h1>

            <ScrollingText
              text="Full-stack JavaScript Developer &middot; "
              direction="left"
            />
            <ScrollingText
              text="Front-end Developer &middot; "
              direction="right"
            />
            <ScrollingText
              text="Cool Millenial Fella &middot; "
              direction="left"
            />
          </div>

          <Button
            onClick={() => {
              contactRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'start',
              });
            }}
            type="button"
            text="Say Hello"
            isPrimary
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
