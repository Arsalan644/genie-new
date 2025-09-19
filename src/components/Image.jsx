import React from "react";
import styles from "./Image.module.css";
import { BsEnvelopeOpen } from "react-icons/bs";

const Image = () => {
  return (
    <div className={styles.container}>
      {/* Employers Group */}
      <div className={styles.employersGroup}>
        <div className={styles.avatarStack}>
          <div className={styles.avatar} />
          <div className={styles.avatar} />
          <div className={styles.avatar} />
        </div>
        <span className={styles.label}>Employers</span>
      </div>

      {/* Central Blue Circle */}
      <div className={styles.centralCircle} />

      {/* Recruiters Group */}
      <div className={styles.recruitersGroup}>
        <div className={styles.avatarStack}>
          <div className={styles.avatar} />
          <div className={styles.avatar} />
          <div className={styles.avatar} />
        </div>
        <span className={styles.label}>Recruiters</span>
      </div>

      {/* Qualified Candidates */}
      <div className={styles.candidatesGroup}>
        <div className={styles.avatarStack}>
          <div className={styles.avatar} />
          <div className={styles.avatar} />
          <div className={styles.avatar} />
        </div>
        <span className={styles.candidateLabel}>
          Qualified candidates (You!)
        </span>
      </div>
    </div>
  );
};

export default Image;
