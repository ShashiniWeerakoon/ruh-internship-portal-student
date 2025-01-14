import React from 'react';
import { FaUser, FaBook, FaBriefcase, FaClipboard, FaSortNumericDown, FaInfoCircle, FaJournalWhills, FaComments } from 'react-icons/fa';
import styles from '../styles/sidebar.module.css';
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
  const NavLinkStyles=({ isActive}) =>{
    return{
      fontWeight: isActive? 'bold' :'normal',
    }
  }
  return (
    <div className={styles.sidebar}>
      <div className={styles.header}>Dashboard</div>
      <nav className={styles.nav}>
        <NavLink style={NavLinkStyles} to ="/Userprofile" className={styles['nav-item']}>
          <FaUser className={styles['nav-icon']} /> User Profile
        </NavLink>
        <NavLink style={NavLinkStyles} to ="/Instruction" className={styles['nav-item']}>
          <FaBook className={styles['nav-icon']} /> Instructions
        </NavLink>
        <NavLink style={NavLinkStyles} to="/Internships" className={styles['nav-item']}>
          <FaBriefcase className={styles['nav-icon']} /> Internships
        </NavLink>
        <NavLink style={NavLinkStyles} to="/Applynow" className={styles['nav-item']}>
          <FaClipboard className={styles['nav-icon']} /> Apply Now
        </NavLink>
        <NavLink style={NavLinkStyles} to="/Currstatus" className={styles['nav-item']}>
          <FaSortNumericDown className={styles['nav-icon']} /> Current Status
        </NavLink>
        <NavLink style={NavLinkStyles} to="/About" className={styles['nav-item']}>
          <FaInfoCircle className={styles['nav-icon']} /> About Internship
        </NavLink>
        <NavLink style={NavLinkStyles} to="/Diary" className={styles['nav-item']}>
          <FaJournalWhills className={styles['nav-icon']} /> Diary Updates
        </NavLink>
        <NavLink style={NavLinkStyles} to="/Feedback" className={styles['nav-item']}>
          <FaComments className={styles['nav-icon']} /> Feedbacks
        </NavLink>
      </nav>
    </div>
  );
}
