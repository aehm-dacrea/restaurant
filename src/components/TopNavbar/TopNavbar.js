import React, { useState } from 'react'
import { Link } from 'gatsby'
import styles from './TopNavbar.module.css'
import '../../fonts/flaticon.css'

import Modal from '../Modal'

const TopNavbar = (props) => {
  const [menuClosed, setMenuClosed] = useState(true)
  const changeMenuState = () => {
    setMenuClosed(!menuClosed)
  }

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
          <div className={styles.dropdown}>
            <Link to='/md' className={[styles.dropbtn, styles.lang].join(' ')}>Română</Link>
            {/* <div className={styles.dropdownContent}>
              <a href="#">Русский</a>
              <a href="#">Română</a>
            </div> */}
          </div> 
          <button onClick={() => changeMenuState()} className={styles.menu}>Наше Меню</button>
          <Modal className={menuClosed ? styles.closed : styles.opened} closed={menuClosed} closeMenu={changeMenuState}/>
        </div>
      </div>
    </>
  )
}

export default TopNavbar
