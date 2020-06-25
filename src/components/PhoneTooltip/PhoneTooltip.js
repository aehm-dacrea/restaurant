import React from 'react'

import styles from './PhoneTooltip.module.css'
import Backdrop from '../Backdrop'

const PhoneTooltip = (props) => {
  
  return (
    <div style={props.style} className={styles.container}>
      <Backdrop onClose={props.closeTooltip}>
        <div className={styles.tooltip}>
            <a href="tel:078 908-000">078 90-80-00</a>
            <a href="tel:022 90-80-80">022 90-80-80</a>
        </div>
      </Backdrop>
    </div>
  )
}

export default PhoneTooltip
