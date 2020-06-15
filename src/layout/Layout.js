import React, { useContext, useEffect } from 'react'
import {Helmet} from 'react-helmet'
import LangContext from '../hooks/LangContext'

import T from '../components/utils/i18n'
import Footer from '../components/Footer'
import styles from './layout.module.css'
import './layout.css'

const Layout = (props) => {
  const lang = useContext(LangContext)
  useEffect(() => {
    document.querySelectorAll('.slick-slide').forEach(slide => slide.setAttribute('aria-hidden', 'false'))
  }, [])

  return (
    <div className={styles.layout}>
      <Helmet htmlAttributes={{lang: `${lang}-MD`}}>
        <meta name="robots" content="noindex,follow"/>
        <title>{T('Ресторан Pizzahouse', 'Restaurant Pizzahouse')}</title>
        <meta name="description" content={T(
          'Меню Pizzahouse - семейный ресторан в Кишинёве с доставкой еды по городу', 
          'Meniu Pizzahouse - restaurant de familie cu livrarea bucatelor în raza orașului')}></meta>
      </Helmet>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout