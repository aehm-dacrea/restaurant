import React from 'react'

import T from '../utils/i18n'
import styles from './Advertisement.module.css'

const Advertisement = (props) => {

  return (
    <div style={props.style} className={`${styles.container} ${T(null, styles.ro)}`}>
      <a onClick={props.close} className={styles.close}></a>
      <p>{T('Закажи с доставкой по специальным ценам на напитки', 'La livrare - prețuri speciale pe băuturi')}</p>
    </div>
  )
}
export default Advertisement
