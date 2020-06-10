import React, { useEffect} from 'react'
import { document } from 'browser-monads'

import styles from './WelcomeScreen.module.css'
import logo from './../../assets/Logo_Pizza_house.svg'
import vensel from '../../../static/vensel_center.svg'

const WelcomeScreen = (props) => {
  useEffect(() => {
    document.querySelector(`.${styles.header}`).classList.add(`${styles.headerMounted}`)
    document.querySelector(`.${styles.address}`).classList.add(`${styles.addressMounted}`)
    document.querySelector(`.${styles.logo}`).style.opacity = 1
    const timer = setTimeout(() => {
      document.querySelector(`.${styles.order}`).style.backgroundColor = 'transparent'
      document.querySelector(`.${styles.order}`).style.color = '#FFD197'
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt='Логотип PizzaHouse'/>
      <div className={styles.textContainer}>
        <p className={styles.header}>Сделай заказ прямо сейчас!</p>
        <p className={styles.address}>Мы находимся на Московском проспекте 14/1</p>
        <a target="_blank" rel="noopener noreferrer" href='https://www.straus.md/ru/restaurant/pizza-house' className={styles.order}>Закажи!</a>
      </div>
    </div>
  )
}

export default WelcomeScreen
