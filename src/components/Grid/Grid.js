import React from 'react'

import styles from './Grid.module.css'

const Grid = (props) => {
  return (
    <div>
      <p id={props.id} className={styles.heading}>{props.title}</p>
      <div className={styles.container}>
        {React.Children.map(props.children, child => (
          <div className={styles.card} onClick={() => props.onClick(child.props.id, child.props.fixed, {name: child.props.name, weight: child.props.weight, composition: child.props.composition, alt: child.props.alt})}>
            {child}
            <p className={styles.name}>{child.props.name}</p>
            <p className={styles.price}>{`${child.props.price}MDL`}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
