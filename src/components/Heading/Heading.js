import React from 'react'
import styles from './Heading.module.css'

const Heading = (props) => {
  return <p id={props.id} className={styles.heading}>{props.title}</p>
}

export default Heading
