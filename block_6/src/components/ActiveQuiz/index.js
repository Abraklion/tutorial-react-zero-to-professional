import React from 'react'
import style from './ActiveQuiz.module.scss'

/**
 * Активный вопрос
 * */
const ActiveQuiz = props => (
  <div className={style.ActiveQuiz}>
    <p className={style.ActiveQuiz__header}>
      <span>
        <strong>2.</strong>&nbsp;
        Как дела?
      </span>

      <small>4 из 12</small>
    </p>

    <ul>
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>
  </div>
)

export default ActiveQuiz
