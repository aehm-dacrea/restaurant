import React from 'react'

import styles from './Footer.module.css'

const Footer = (props) => {


  return (
    <div className={styles.container}>
      <div className={styles.footer}>
        
      </div>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15267.068615898843!2d28.86083641272418!3d47.05162641975164!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97cfcae12ec9f%3A0x6e9da55f5032b263!2zQnVsZXZhcmR1bCBNb3Njb3ZhIDE0LzEsIENoaciZaW7Eg3UsINCc0L7Qu9C00LDQstC40Y8!5e0!3m2!1sru!2sus!4v1591880048163!5m2!1sru!2sus"
        width="600" 
        height="450" 
        frameBorder="0" 
        style={{border: 0, width: '70%', height: '100%', margin: 0}}
        allowFullScreen="" 
        aria-hidden="false" 
        tabIndex="0"
      ></iframe>
    </div>
  )
}

export default Footer
