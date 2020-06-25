import React, { useState} from 'react'
import { Link } from 'gatsby'
import { Transition } from 'react-transition-group'

import styles from './TopNavbar.module.css'
import '../../fonts/flaticon.css'
import T from '../utils/i18n'
import Modal from '../Modal'
import { PhoneTooltip } from '../PhoneTooltip'

const TopNavbar = (props) => {
  const [menuClosed, setMenuClosed] = useState(true)
  const changeMenuState = () => {
    setMenuClosed(!menuClosed)
  }

  const [tooltipClosed, setTooltipClosed] = useState(true)
  const changeTooltipState = () => {
    setTooltipClosed(!tooltipClosed)
  }

  const transitionStyles = {
    entering: { opacity: 0 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.contacts}>
          <div className={`${styles.contact} ${styles.mobile}`}>
            <i className='flaticon-null'></i>
            <a href="tel:078 908-000">078 90-80-00</a>
          </div>
          <div className={`${styles.contact} ${styles.landline}`}>
            <i className='flaticon-null'></i>
            <a href="tel:022 90-80-80">022 90-80-80</a>
          </div>
          <div className={`${styles.contact} ${styles.tooltipLink}`}>
            <i className='flaticon-null'></i>
            <span onClick={changeTooltipState}>078 90-80-00</span>
          </div>
          <Transition in={!tooltipClosed} timeout={100} mountOnEnter unmountOnExit>
            {state => (
              <PhoneTooltip style={{...transitionStyles[state]}} closeTooltip={changeTooltipState}/>
            )}
          </Transition>
        </div>
        <div className={styles.hours}>
          <div className={styles.hour}>
            <i className='flaticon-placeholder'></i>{T('Кишинёв', 'Chișinău')} 10:00 - 23:00
          </div>
        </div>
        <div className={styles.language}>
          <div className={styles.dropdown}>
            <Link to={T('/md', '/')} className={[styles.dropbtn, styles.lang].join(' ')}>{T('Română', 'Русский')}</Link>
          </div> 
          <button onClick={() => changeMenuState()} className={styles.menu}>{T('Наше Меню', 'Meniu')}</button>
          <Modal className={menuClosed ? styles.closed : styles.opened} closed={menuClosed} closeMenu={changeMenuState}/>
        </div>
      </div>
    </>
  )
}

export default TopNavbar
