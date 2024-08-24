import React from "react";
import styles from "./styles.module.css";

type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
  return (
    <div className={styles.bodyTemplate}>
      <div className={styles.bgBanner}></div>
      <div className={styles.wrapperContent}>
        <div className={styles.headerWrapper}>
          <img src="/assets/logo.png" className={styles.logo} alt="" />
          <div className={styles.nameHeaderWrapper}>
            <p>Mini Project</p>
            <p>Dendy Juliano Juanda</p>
          </div>
        </div>
        <div className={styles.content}>{children}</div>
      </div>
      <img src="/assets/pikachu.png" className={styles.imagePikachu} alt="" />
    </div>
  );
}
