import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm PAO!</h1>
        <p className={styles.description}>
          I’m a full-stack web developer with a passion for creating dynamic and
          engaging web applications. I have experience with technologies like
          HTML, CSS, JavaScript, Node.js, and frameworks like React and Express.
          I'm excited to tackle new challenges and build user-centric solutions.
          If you're interested in collaborating or discussing web development,
          I'd love to connect!
        </p>

        <a
          href="#contact"
          className={styles.contactBtn} // Ensure this is correctly set in your styles
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/hero2.jpg")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
