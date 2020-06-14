import React from 'react'

import T from '../utils/i18n'
import classes from './Card.module.css'

const Card = (props) => {
  
  return (
    <div className={classes.card}>
      {props.children}
      <p className={classes.name}>{props.name}</p>
      <p className={classes.weight}>{`${props.weight}`}</p>
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <span className={classes.price}>{`${props.price}MDL`}</span>
        <span className={classes.oldPrice}></span>
      </div>
      <button 
        id={props.id} 
        onClick={() => props.onClick(props.id, props.img, {name: props.name, weight: props.weight, composition: props.composition, alt: props.alt})} className={classes.details}
      >
        {T('Детали', 'Detalii')}
      </button>
    </div>
  )
}

export default Card
