import React, { useEffect} from 'react'
import { document } from 'browser-monads'

import useWindowWidth from '../../hooks/useWindowWidth'
import T from '../utils/i18n'
import styles from './WelcomeScreen.module.css'
import logo from './../../assets/Logo_Pizza_house.svg'

const WelcomeScreen = (props) => {
  const width = useWindowWidth()
  useEffect(() => {
    document.querySelector(`.${styles.header}`).classList.add(`${styles.headerMounted}`)
    document.querySelector(`.${styles.address}`).classList.add(`${styles.addressMounted}`)
    document.querySelector(`.${styles.logo}`).style.opacity = 1
    const timer = setTimeout(() => {
      document.querySelector(`.${styles.order}`).style.opacity = 1
      document.querySelector(`.${styles.order}`).style.backgroundColor = 'transparent'
      document.querySelector(`.${styles.order}`).style.color = '#FFD197'
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logo} alt='Логотип PizzaHouse'/>
      <div className={styles.textContainer} style={width > 1300 ? T(null, {paddingLeft: '50px'}) : {paddingLeft: 0}}>
        <p className={styles.header}>{T('Сделай заказ прямо сейчас!', 'Faceți comandă acum!')}</p>
        <p className={styles.address}>{width > 650 ? T('Мы находимся на Московском проспекте 14/1', 'Noi suntem pe adresa Bulevardul Moscova 14/1') : T('Московский проспект 14/1', 'Bulevardul Moscova 14/1')}</p>
        <a target="_blank" rel="noopener noreferrer" href={`https://www.straus.md/${T('ru', 'ro')}/restaurant/pizza-house`} className={styles.order}>{T('Закажи!', 'Comandă!')}</a>
      </div>
    </div>
  )
}

export default WelcomeScreen
