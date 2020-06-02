import React from 'react'

import classes from './Card.module.css'

const Card = (props) => {

  return (
    <div className={classes.card}>
      {props.children}
      <p className={classes.name}>Баранина</p>
      <p className={classes.weight}>Вес: 300 г.</p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <span className={classes.price}>36MDL</span>
        <span className={classes.oldPrice}>45MDL</span>
      </div>
      <button className={classes.details}>Детали</button>
    </div>
  )
}

export default Card
