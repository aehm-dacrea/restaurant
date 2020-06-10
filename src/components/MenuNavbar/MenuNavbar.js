import React from 'react'
import { Link } from 'gatsby'

import styles from './MenuNavbar.module.css'

const MenuNavbar = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link className={styles.link} to='/#gustari'>Закуски</Link>
        <Link className={styles.link} to='/#salate'>Салаты</Link>
        <Link className={styles.link} to='/#supe'>Супы</Link>
        <Link className={styles.link} to='/#pizza'>Пицца</Link>
        <Link className={styles.link} to='/#bucate-calde'>Горячие Блюда</Link>
      </div>
      <div className={styles.subContainer}>
      <Link className={styles.link} to='/#pentru-companii'>Блюда для Компании</Link>
      <Link className={styles.link} to='/#garnituri'>Гарниры</Link>
      <Link className={styles.link} to='/#clatite'>Блинчики</Link>
      <Link className={styles.link} to='/#deserte'>Десерты</Link>
      <Link className={styles.link} to='/#bauturi'>Напитки</Link>
      </div>
    </div>
  )
}

export default MenuNavbar
