import React from 'react'
import Img from 'gatsby-image'

import useData from '../../hooks/useData'
import LangContext from '../../hooks/LangContext'
import Layout from '../../layout'
import styles from '../gallery.module.css'
import TopNavbar from '../../components/TopNavbar/'
import MenuNavbar from '../../components/MenuNavbar'

export default function Home() {
  const { gallery, site: {galleryTitle, galleryMetaDescription} } = useData()

  const mapFirstImages = () => {
    const firstImages = gallery.slice(0, 3)

    return firstImages.map(node => (
      <div key={node.contentful_id} className={styles.imageContainer}>
        <Img
          alt={node.alt}
          fluid={node.image.localFile.childImageSharp.fluid}
          style={{borderRadius: '5px'}}
        />
      </div>
    ))
  }

  const mapImages = (gallery) => {
    gallery = gallery.slice(3, )

    return gallery.map(node => (
      <div key={node.contentful_id} className={styles.imageContainer}>
        <Img
          alt={node.alt}
          fluid={node.image.localFile.childImageSharp.fluid}
          style={{borderRadius: '5px'}}
        />
      </div>
    ))
  }

  return (
    <LangContext.Provider value='ro'>
      <Layout title={galleryTitle} description={galleryMetaDescription}>
        <TopNavbar/>
        <MenuNavbar/>
        <div className={styles.container}>
          <div className={styles.firstImages}>
            {mapFirstImages(gallery)}
          </div>
          {mapImages(gallery)}
        </div>
      </Layout>
    </LangContext.Provider>
  )
}
