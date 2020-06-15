import React from 'react'

import T from '../utils/i18n'
import styles from './Footer.module.css'

const Footer = (props) => {


  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        <p>{T('Наш Адрес: ', 'Adresa: ')}</p>
        <p>{T('г. Кишинев ', 'or. Chișinău')}</p>
        <p>{T('Московский Проспект 14/1 ', 'Bulevardul Moscova 14/1')}</p>
        <p>{T('Доставка осуществляется в пределах мун. Кишинёв', 'Livrarea se efectuează în raza orașului Chișinău')}</p>
        <p>{T('Стоимость доставки узнавайте у наших партнёров Straus.md', 'Costul livrării vă descoperiți la partenerii noștre - Straus.md')}</p>
        <a className={styles.facebook} target="_blank" rel="noopener noreferrer" href={'https://www.facebook.com/Pizzahouse.md'}></a>
        <a className={styles.instagram} target="_blank" rel="noopener noreferrer" href={'https://www.instagram.com/pizza_house_md'}></a>
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15267.068615898843!2d28.86083641272418!3d47.05162641975164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cfcae12ec9f%3A0x6e9da55f5032b263!2zQnVsZXZhcmR1bCBNb3Njb3ZhIDE0LzEsIENoaciZaW7Eg3UsINCc0L7Qu9C00LDQstC40Y8!5e0!3m2!1sru!2sus!4v1591880048163!5m2!1sru!2sus"
        // width="600" 
        // height="450" 
        frameBorder="0" 
        title={T('наш адрес', 'adresa noastră')}
        className={styles.map}
        allowFullScreen="" 
        aria-hidden="false" 
        tabIndex="0"
      ></iframe>
    </div>
  )
}

export default Footer
