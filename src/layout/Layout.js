import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet'
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
        {/* <meta name="robots" content="noindex,follow"/> */}
        <title>{T(props.title[0], props.title[1])}</title>
        <meta name="description" content={T(props.description[0], props.description[1])} />
        {/* <meta name="yandex-verification" content="34b4a99fc73d0917" /> */}
        {/* <link async href='favicon.ico' rel='icon'/>
        <link href='/static/Logo_Pizza_house-94a4bfd153ed2278af31ee8de3bf4585.svg' rel='preload' as='image'/> */}
      </Helmet>
      {props.children}
      <Footer/>
    </div>
  )
}

export default Layout