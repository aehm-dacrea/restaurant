import React from 'react'
import styles from './TopNavbar.module.css'
import '../../fonts/flaticon.css'

const TopNavbar = (props) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <div className={styles.contact}>
            <i className='flaticon-null'></i>
            <a href="tel:078 908-000">078 90-80-00</a>
          </div>
          <div className={`${styles.contact} ${styles.landline}`}>
            <i className='flaticon-null'></i>
            <a href="tel:022 90-80-80">022 90-80-80</a>
          </div>
        </div>
        <div className={styles.hours}>
          <div className={styles.hour}>
            <i className='flaticon-placeholder'></i>Кишинёв 10:00 - 23:00
          </div>
        </div>
        <div className={styles.language}>
          <div className='dropdown'>
            <button className='dropbtn'>Русский
              {/* <i className={`${styles.fa} ${styles[fa-caret-down]}`}></i> */}
            </button>
            <div className='dropdown-content'>
              <a href="#">Русский</a>
              <a href="#">Română</a>
            </div>
          </div> 
        </div>
      </div>
    </>
  )
}

export default TopNavbar
