import style from './AnswersList.module.scss'

import AnswerItem from './AnswerItem'

/**
 * Компонент {Список ответов на вопрос}
 * */
const AnswersList = props => {

  /**
   * Отрисовка
   **/
  return (
    <ul className={style.ActiveQuiz__list}>
      {props.answers.map((answer, index) => {

        /* -> Компонент пункт списка с ответом */
        return (
          <AnswerItem
            key={index}
            answer={answer}
            onAnswerClick={props.onAnswerClick}
          />
        )

      })}
    </ul>
  )
}

export default AnswersList
