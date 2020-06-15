import React from 'react'
import { Link } from 'gatsby'
import T from '../utils/i18n'

import styles from './MenuNavbar.module.css'

const MenuNavbar = (props) => {

  return (
    <div className={styles.container}>
      <div className={styles.subContainer}>
        <Link className={styles.link} to={T('/#gustari', '/md#gustari')}>{T('Закуски', 'Gustări')}</Link>
        <Link className={styles.link} to={T('/#salate', '/md#salate')}>{T('Салаты', 'Salate')}</Link>
        <Link className={styles.link} to={T('/#supe', '/md#supe')}>{T('Супы', 'Supe')}</Link>
        <Link className={styles.link} to={T('/#pizza', '/md#pizza')}>{T('Пицца', 'Pizza')}</Link>
        <Link className={styles.link} to={T('/#bucate-calde', '/md#bucate-calde')}>{T('Горячие Блюда', 'Bucate Calde')}</Link>
      </div>
      <div className={styles.subContainer}>
      <Link className={styles.link} to={T('/#pentru-companii', '/md#pentru-companii')}>{T('Блюда для Компании', 'Pentru Companii')}</Link>
      <Link className={styles.link} to={T('/#garnituri', '/md#garnituri')}>{T('Гарниры', 'Gărnituri')}</Link>
      <Link className={styles.link} to={T('/#clatite', '/md#clatite')}>{T('Блинчики', 'Clătite')}</Link>
      <Link className={styles.link} to={T('/#deserte', '/md#deserte')}>{T('Десерты', 'Deserte')}</Link>
      <Link className={styles.link} to={T('/#bauturi', '/md#bauturi')}>{T('Напитки', 'Băuturi')}</Link>
      </div>
    </div>
  )
}

export default MenuNavbar
