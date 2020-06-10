import React from 'react'
import styles from './Backdrop.module.css'

const backdrop = (props) => {
  return <div style={props.style} className={styles.Backdrop} onClick={props.onClose}></div> 
}

export default backdrop