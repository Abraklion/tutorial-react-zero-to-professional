import style from './FinishedQuiz.module.scss'

const FinishedQuiz = props => {

  return (
    <div className={style.FinishedQuiz}>
      <ul className={style.FinishedQuiz__list}>
        <li>
          <strong>1. </strong>
          How are you
          <i className={`${style.FinishedQuiz__icon} ${style['FinishedQuiz__icon--error']} fa fa-times`}/>
        </li>
        <li>
          <strong>2. </strong>
          How are you
          <i className={`${style.FinishedQuiz__icon} ${style['FinishedQuiz__icon--success']} fa fa-check`}/>
        </li>
      </ul>

      <p>Правильно 4 из 10</p>

      <div>
        <button>Повторить</button>
      </div>
    </div>
  )
}

export default FinishedQuiz
