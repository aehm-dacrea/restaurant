import React from 'react'
import { Link } from 'gatsby'

import styles from './Modal.module.css'
import Backdrop from '../Backdrop'

const Modal = (props) => {
  // document.querySelectorAll(`.${styles.link}`).forEach(link => link.addEventListener('click', props.closeMenu))
  const linkArray = [
    {id: '/#gustari', title: 'Закуски'},
    {id: '/#salate', title: 'Салаты'},
    {id: '/#supe', title: 'Супы'},
    {id: '/#pizza', title: 'Пицца'},
    {id: '/#bucate-calde', title: 'Горячие Блюда'},
    {id: '/#pentru-companii', title: 'Блюда для Компании'},
    {id: '/#garnituri', title: 'Гарниры'},
    {id: '/#clatite', title: 'Блинчики'},
    {id: '/#deserte', title: 'Десерты'},
    {id: '/#bauturi', title: 'Напитки'}
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
      <div style={{...backdropStyle, ...(props.closed ? {display: 'none'} : {})}}>
        <Backdrop onClose={props.closeMenu}/>
      </div>
      <div className={`${styles.container} ${props.className}`}>
        <div className={styles.topRaw}>
          <a className={styles.tel} href="tel:078 908-000">078 90-80-00</a>
          <Link className={styles.language} to='/md'>Română</Link>
        </div>
        <div className={styles.menu}>
          {linkArray.map(link => (
            <Link key={link.id} className={styles.link} to={link.id} onClick={props.closeMenu}>{link.title}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal
