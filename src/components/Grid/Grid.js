import React, { useEffect } from 'react'

import Img from 'gatsby-image'

import styles from './Grid.module.css'

const Grid = (props) => {
  useEffect(() => {
    console.log(`[Grid] ${props.title}`)
  })

  const mapImages = (category) => {
    const dataArray = []
    category[1].nodes.map(node => dataArray.push(node))

    return category[0].nodes.map((node, index) => (
      <Img 
        key={dataArray[index].id}
        style={{borderRadius: '5px'}} 
        fixed={{...node.foto.localFile.childImageSharp.fixed, height: 100, width: 100}} 
        name={dataArray[index].name}
        weight={dataArray[index].weight}
        price={dataArray[index].price}
        oldPrice={dataArray[index].oldPrice}
        alt={dataArray[index].alt}
        composition={dataArray[index].composition}
        id={dataArray[index].id}
      />
    ))
  }

  return (
    <div className={styles.grid}>
      <p id={props.id} className={styles.heading}>{props.title}</p>
      <div className={styles.container}>
        {mapImages(props.category).map(img => (
          <div key={img.props.name} className={styles.card} onClick={() => props.onClick(img.props.id, img.props.fixed, {name: img.props.name, weight: img.props.weight, composition: img.props.composition, alt: img.props.alt})}>
            {img}
            <p className={styles.name}>{img.props.name}</p>
            <p className={styles.price}>
              <span>{`${img.props.price}MDL`}</span>
              <span className={styles.oldPrice}>{img.props.oldPrice && `${img.props.oldPrice}MDL`}</span>
              </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Grid)
