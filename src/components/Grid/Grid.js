import React from 'react'

import styles from './Grid.module.css'

const Grid = (props) => {
  return (
    <div>
      <p className={styles.header}>Горячие Блюда</p>
      <div className={styles.container}>
        {React.Children.map(props.children, child => (
          <div className={styles.card} onClick={() => props.onClick(child.key, child.props.fixed)}>
            {child}
            <p className={styles.name}>Баранина</p>
            <p className={styles.price}>39MDL</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Grid
