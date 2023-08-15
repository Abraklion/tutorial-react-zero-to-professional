import style from './AnswerItem.module.scss'

/**
 * Компонент {Пункт списка с ответом}
 * */
const AnswerItem = props => {
  const cls = [style.ActiveQuiz__item]

  if (props.state) {
    cls.push(style[props.state])
  }

  /**
   * Отрисовка
   **/
  return (
    <li
      className={cls.join(' ')}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  )
}

export default AnswerItem
