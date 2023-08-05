import React from 'react'

/**
 *  Урок 4.  Создание простого компонента
 **/

/** Вариант 1 **/
// function car() {
//   return (
//     <div>This is car component</div>
//   )
// }

/** Вариант 2 **/
// const car = () => {
//   return (
//     <div>This is car component</div>
//   )
// }

/** Вариант 3 **/
// const car = () => (
//   <div>
//     This is car component
//     <strong>test</strong>
//   </div>
// )

/** Вариант 4 **/
export default () => (
  <div>
    This is car component <strong>test</strong>
  </div>
)
