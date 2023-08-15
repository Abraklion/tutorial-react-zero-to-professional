import style from './AnswerItem.module.scss'

/**
 * Компонент {Пункт списка с ответом}
 * */
const AnswerItem = props => {

  /**
   * Отрисовка
   **/
  return (
    <li
      className={style.ActiveQuiz__item}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem
