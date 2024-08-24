import React from "react";
import styles from "./styles.module.css";
import useBreakpoint from "../../hooks/useBreakpoint";

type TemplateProps = {
  children: React.ReactNode;
};

export default function Template({ children }: TemplateProps) {
  const { isDekstop } = useBreakpoint();
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
      {isDekstop && (
        <img src="/assets/pikachu.png" className={styles.imagePikachu} alt="" />
      )}
    </div>
  );
}
