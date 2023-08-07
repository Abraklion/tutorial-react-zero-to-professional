import React from 'react'

const Car = props => (
  <div>
    <h3>Сar name: {props.name}</h3>
    <p>Year: <strong>{props.year}</strong></p>
    <button onClick={props.onChangeTitle}>Click</button>
  </div>
)

export default Car
