import React from 'react';
import styles from './HowItWorks.module.css';

const HowItWorks = () => {
  const stats = [
    { icon: '✓', text: '1,620 candidates conversations' },
    { icon: '✓', text: '348 candidates updated' },
    { icon: '✓', text: '240 introductions made' },
    { icon: '✓', text: '24 offer letters sent' }
  ];

  const steps = [
    {
      title: 'Call Pluto',
      description: 'Build your profile in 10 minutes'
    },
    {
      title: 'Pluto Reviews',
      description: 'Only the elite join our network'
    },
    {
      title: 'Employers Browse',
      description: 'Companies scout anonymous profiles'
    },
    {
      title: 'Pluto Introduces',
      description: 'We connect you with hiring teams'
    }
  ];

  return (
      <>
    <div className={styles.container}>
      {/* Left Side - Stats with Blue Orb */}
      <div className={styles.leftSection}>
        <div className={styles.orbContainer}>
          <div className={styles.blueOrb}></div>
        </div>
        
        <div className={styles.statsContainer}>
          <div className={styles.summaryBox}>
            <span className={styles.summaryText}>Summary for today</span>
          </div>
          
          <div className={styles.statsList}>
            {stats.map((stat, index) => (
              <div key={index} className={styles.statItem}>
                <span className={styles.checkmark}>{stat.icon}</span>
                <span className={styles.statText}>{stat.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - How it Works Content */}
      <div className={styles.rightSection}>
        <div className={styles.badge}>Fast & Easy</div>
        
        <h2 className={styles.title}>How it Works</h2>
        
        <p className={styles.description}>
          Pluto is your personal headhunter, bridging elite tech sales talent with the best job opportunities.
        </p>

        <div className={styles.stepsList}>
          {steps.map((step, index) => (
            <div key={index} className={styles.stepItem}>
              <div className={styles.stepIcon}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="10" fill="#2563eb"/>
                  <path d="M6 10l2 2 6-6" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <div className={styles.stepContent}>
                <span className={styles.stepTitle}>{step.title}</span>
                <span className={styles.stepDescription}> – {step.description}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
      </div>
    </div>
        <button className={styles.button}>Join in 10 minutes</button>
        </>
  );
};

export default HowItWorks;