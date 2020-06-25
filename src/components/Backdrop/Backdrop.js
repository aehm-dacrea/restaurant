import React from 'react'
import styles from './Backdrop.module.css'

const Backdrop = (props) => {
  return <div style={props.style} className={styles.Backdrop} onClick={props.onClose}>{props.children}</div> 
}

export default Backdrop