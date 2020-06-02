import React from 'react'
import {Helmet} from 'react-helmet'
// import { useSiteMetadata } from "../hooks/use-site-metadata"
import styles from './layout.module.css'
import './layout.css'

const Layout = (props) => {
  // const {siteDescription} = useSiteMetadata()
  return (
    // <div className={styles.layout}>
    <div>
      <Helmet>
        {/* <meta name="description" content={siteDescription} /> */}
        <meta name="robots" content="noindex,follow"/>
        <html lang="ru" />
      </Helmet>
      {props.children}
    </div>
  )
}

export default Layout
