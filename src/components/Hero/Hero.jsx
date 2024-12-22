import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm  khadar</h1>
        <p className={styles.description}>
I am a final-year full-stack development student with 3 years of hands-on experience in building dynamic and responsive web applications using React and Node.js. 
My expertise includes developing user-friendly interfaces, optimizing backend performance, and collaborating with teams to deliver scalable solutions.
I'm passionate about learning new technologies and applying innovative approaches to solve complex problems. Feel free to reach out if you'd like to connect or discuss opportunities!"
</p>
        <a href="khadarmohamed062@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/khadar.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
