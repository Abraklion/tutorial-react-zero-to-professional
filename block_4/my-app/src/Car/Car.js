import React from 'react'
import classes from './Car.css'

const Car = props => {
  const inputClasses = [classes.input]

  if (props.name !== '') {
    inputClasses.push(classes.green)
  } else {
    inputClasses.push(classes.red)
  }

  if (props.name.length > 4) {
    inputClasses.push(classes.bold)
  }

  return (
    <div className={classes.Car}>
      <h3>Сar name: {props.name}</h3>
      <p>Year: <strong>{props.year}</strong></p>
      <input
        className={inputClasses.join(' ')}
        type="text"
        onChange={props.onChangeName}
        value={props.name}
      />
      <button onClick={props.onDelete}>Delete</button>
    </div>
  )
}

export default Car
