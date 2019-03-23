import React from 'react';
import styles from '../styles/navigation.css';

const Navigation = ({ setEventView, setCreateView }) => {
  return (
    <div className={styles.navigation}>
      <div className={styles.schedulIt} onClick={() => setEventView()}>
        Schedulit
      </div>
      <div className={styles.buttons}>
        <div onClick={() => setEventView()} className={styles.myEvents}>
          My Events
        </div>
        <div onClick={() => setCreateView()} className={styles.create}>
          Create an event!
        </div>
      </div>
    </div>
  );
};

export default Navigation;
