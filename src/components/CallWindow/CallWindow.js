import React, {useEffect} from 'react'
import { document } from 'browser-monads'

import styles from './CallWindow.module.css'
import Backdrop from '../Backdrop'

const CallWindow = (props) => {
  useEffect(() => {
    document.querySelector('html').classList.add(styles.overflowHidden)
  }, [])

  const showOverflow = () => {
    document.querySelector('html').classList.remove(styles.overflowHidden)
  }
  
  return (
    <div onClick={() => {props.close(); showOverflow();}} style={props.style} className={styles.container}>
      <Backdrop/>
      <div className={styles.numberContainer}>
        <a href="tel:078 908-000">078 90-80-00</a>
        <a href="tel:022 90-80-80">022 90-80-80</a>
      </div>
    </div>
  )
}

export default CallWindow
