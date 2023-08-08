import React from 'react'
import './Car.css'

const Car = props => {
  const inputClasses = ['input']

  if (props.name !== '') {
    inputClasses.push('green')
  } else {
    inputClasses.push('red')
  }

  if (props.name.length > 4) {
    inputClasses.push('bold')
  }

  return (
    <div className="Car">
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
