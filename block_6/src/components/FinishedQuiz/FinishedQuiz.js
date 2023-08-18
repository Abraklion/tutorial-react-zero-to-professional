import style from './FinishedQuiz.module.scss'

const FinishedQuiz = props => {
  // считаем количество правильных ответов
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++
    }
    return total
  }, 0)

  return (
    <div className={style.FinishedQuiz}>
      <ul className={style.FinishedQuiz__list}>

        {
          props.quiz.map((quizItem, index) => {
            const cls = [
              style.FinishedQuiz__icon,
              props.results[quizItem.id] === 'error' ? `${style['FinishedQuiz__icon--error']}`
                : `${style['FinishedQuiz__icon--success']}`,
              props.results[quizItem.id] === 'error' ? 'fa fa-times'
                : 'fa fa-check',
            ]

            return (
              <li key={index} >
                <strong>{index + 1}</strong>.&nbsp;
                {quizItem.question}
                <i className={cls.join(' ')}/>
              </li>
            )
          })

        }
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        <button onClick={props.onRetry}>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
