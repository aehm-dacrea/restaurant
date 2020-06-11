import React from 'react'
import { Link } from 'gatsby'
import T from '../utils/i18n'

import styles from './MenuNavbar.module.css'

const MenuNavbar = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link className={styles.link} to='/#gustari'>{T('Закуски', 'Gustări')}</Link>
        <Link className={styles.link} to='/#salate'>{T('Салаты', 'Salate')}</Link>
        <Link className={styles.link} to='/#supe'>{T('Супы', 'Supe')}</Link>
        <Link className={styles.link} to='/#pizza'>{T('Пицца', 'Pizza')}</Link>
        <Link className={styles.link} to='/#bucate-calde'>{T('Горячие Блюда', 'Bucate Calde')}</Link>
      </div>
      <div className={styles.subContainer}>
      <Link className={styles.link} to='/#pentru-companii'>{T('Блюда для Компании', 'Pentru Companii')}</Link>
      <Link className={styles.link} to='/#garnituri'>{T('Гарниры', 'Gărnituri')}</Link>
      <Link className={styles.link} to='/#clatite'>{T('Блинчики', 'Clătite')}</Link>
      <Link className={styles.link} to='/#deserte'>{T('Десерты', 'Deserte')}</Link>
      <Link className={styles.link} to='/#bauturi'>{T('Напитки', 'Băuturi')}</Link>
      </div>
    </div>
  )
}

export default MenuNavbar
