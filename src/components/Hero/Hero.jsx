import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dhruv </h1>
        <p className={styles.description}>
          I'm a full-stack developer with expertise in Next.js,
          Express.js, and MySQL, along with experience in machine learning using TensorFlow and PyTorch.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:dhruvkejri9@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
