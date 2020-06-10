import React from 'react'
import BackgroundImage from 'gatsby-background-image'

import useImage from '../../hooks/useImage'
import styles from './BackgroundSection.module.css'

const BackgroundSection = (props) => {
  const {desktop} = useImage()

  return (
    <div className={styles.container}>
      <BackgroundImage
        fluid={desktop.childImageSharp.fluid}
        className={styles.bg}
      >
        {props.children}
      </BackgroundImage>
    </div>
  )
}

export default BackgroundSection
