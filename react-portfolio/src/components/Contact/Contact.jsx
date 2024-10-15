import React from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.content}>
        <div className={styles.text}>
          <h2>Contact</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/emailIcon.png.png")}
              alt="Email icon"
            />
            <a href="mailto:myemail@email.com">pptevesantonio@gmail.com</a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/linkedinIcon.png.png")}
              alt="LinkedIn icon"
            />
            <a href="https://www.linkedin.com/in/peter-paul-antonio-a91b8726b/">
              linkedin.com/peterpaulantonio
            </a>
          </li>
          <li className={styles.link}>
            <img
              src={getImageUrl("contact/githubIcon.png.png")}
              alt="Github icon"
            />
            <a href="https://github.com/ChillPedro">github.com/ChillPedro</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
