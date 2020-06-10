import React, { useEffect } from 'react'
import Img from 'gatsby-image'
import useWindowWidth from '../../../hooks/useWindowWidth'
import { document } from 'browser-monads'

import Backdrop from '../../Backdrop'
import styles from './FullCard.module.css'

const FullCard = (props) => {
  // useEffect(() => {
  //   document.querySelector('html').style.overflow = 'hidden'
  //   return () => document.querySelector('html').style.overflow = 'auto'
  // })
  const width = useWindowWidth()
  const imgSize = {
    width: width < 500 ? 350 : 500,
    height: width < 500 ? 300 : 400
  }
  const content = (
    <div className={styles.Container}>
      <Backdrop style={props.style} onClose={props.onClose} />
      <div 
        className={styles.FullCard}
        style={props.style}
      >
        {props.img ? <Img className={styles.Img} fixed={{...props.img, ...imgSize}}/> : null}
        <p className={styles.name}>Баранина</p>
        <p className={styles.weight}>Вес: 300 г.</p>
        <p className={styles.composition}><span style={{borderBottom: '1px solid currentColor'}}>Состав:</span> корж, баранина, моццарелла, лук, корж, баранина, моццарелла, лук</p>
        <button className={styles.button} onClick={props.onClose}>Закрыть</button>
      </div>
    </div>
  )

  return content
}

export default FullCard
