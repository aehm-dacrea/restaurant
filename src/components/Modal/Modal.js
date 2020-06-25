import React from 'react'
import { Link } from 'gatsby'
import T from '../utils/i18n'

import styles from './Modal.module.css'
import Backdrop from '../Backdrop'

const Modal = (props) => {
  // document.querySelectorAll(`.${styles.link}`).forEach(link => link.addEventListener('click', props.closeMenu))
  const linkArray = [
    {id: `${T('', '/md')}/#gustari`, title: {ru: 'Закуски', ro: 'Gustări'}},
    {id: `${T('', '/md')}/#salate`, title: {ru: 'Салаты', ro: 'Salate'}},
    {id: `${T('', '/md')}/#supe`, title: {ru: 'Супы', ro: 'Supe'}},
    {id: `${T('', '/md')}/#pizza`, title: {ru: 'Пицца', ro: 'Pizza'}},
    {id: `${T('', '/md')}/#bucate-calde`, title: {ru: 'Горячие Блюда', ro: 'Bucate Calde'}},
    {id: `${T('', '/md')}/#pentru-companii`, title: {ru: 'Блюда для Компании', ro: 'Pentru Companii'}},
    {id: `${T('', '/md')}/#garnituri`, title: {ru: 'Гарниры', ro: 'Gărnituri'}},
    {id: `${T('', '/md')}/#clatite`, title: {ru: 'Блинчики', ro: 'Clătite'}},
    {id: `${T('', '/md')}/#deserte`, title: {ru: 'Десерты', ro: 'Deserte'}},
    {id: `${T('', '/md')}/#bauturi`, title: {ru: 'Напитки', ro: 'Băuturi'}}
  ]
  const backdropStyle = {
    height: '100vh', 
    width: '100vw', 
    position: 'absolute', 
    top: 0, 
    left: 0,
    zIndex: 5
  }

  return (
    <div>
      <div style={{ ...backdropStyle, ...(props.closed ? {display: 'none'} : {}) }}>
        <Backdrop onClose={props.closeMenu}/>
      </div>
      <div className={`${styles.container} ${props.className}`}>
        <div className={styles.topRaw}>
          <a className={styles.tel} href="tel:078 908-000">078 90-80-00</a>
          <Link className={styles.language} to={T('/md', '/')}>{T('Română', 'Русский')}</Link>
        </div>
        <div className={styles.menu}>
          {linkArray.map(link => (
            <Link key={link.id} className={styles.link} to={link.id} onClick={props.closeMenu}>{T(link.title.ru, link.title.ro)}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal
