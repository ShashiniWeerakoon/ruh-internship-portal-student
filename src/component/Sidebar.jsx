import React from 'react';
import { FaUser, FaBook, FaBriefcase, FaClipboard, FaSortNumericDown, FaInfoCircle, FaJournalWhills, FaComments } from 'react-icons/fa';
import styles from '../styles/sidebar.module.css';

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>Dashboard</div>
      <nav className={styles.nav}>
        <a href="/Userprofile" className={styles['nav-item']}>
          <FaUser className={styles['nav-icon']} /> User Profile
        </a>
        <a href="/Instruction" className={styles['nav-item']}>
          <FaBook className={styles['nav-icon']} /> Instructions
        </a>
        <a href="/Internships" className={styles['nav-item']}>
          <FaBriefcase className={styles['nav-icon']} /> Internships
        </a>
        <a href="/Applynow" className={styles['nav-item']}>
          <FaClipboard className={styles['nav-icon']} /> Apply Now
        </a>
        <a href="/Currstatus" className={styles['nav-item']}>
          <FaSortNumericDown className={styles['nav-icon']} /> Current Status
        </a>
        <a href="/About" className={styles['nav-item']}>
          <FaInfoCircle className={styles['nav-icon']} /> About Internship
        </a>
        <a href="/Dairy" className={styles['nav-item']}>
          <FaJournalWhills className={styles['nav-icon']} /> Diary Updates
        </a>
        <a href="/Feedback" className={styles['nav-item']}>
          <FaComments className={styles['nav-icon']} /> Feedbacks
        </a>
      </nav>
    </div>
  );
}
