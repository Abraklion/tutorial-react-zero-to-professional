import style from './ActiveQuiz.module.scss'
import AnswersList from "./AnswersList";

/**
 * Компонент {Активный вопрос}
 * */
const ActiveQuiz = props => {

  /**
   * Отрисовка
   **/
  return (
    <div className={style.ActiveQuiz}>
      <p className={style.ActiveQuiz__header}>
        <span>
          <strong>{props.answerNumber}.</strong>&nbsp;
          {props.question}
        </span>

        <small>{props.answerNumber} из {props.quizLength}</small>
      </p>

      <AnswersList
        answers={props.answers}
        onAnswerClick={props.onAnswerClick}
      /> {/* -> Компонент список ответов на вопрос */}
    </div>
  )
}

export default ActiveQuiz
