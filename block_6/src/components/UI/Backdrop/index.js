import style from './Backdrop.module.scss'

/**
 * Компонент {Затемнение фона}
 * */
const Backdrop = props => {

  /**
   * Отрисовка
   **/
  return (
    <div className={style.Backdrop} onClick={props.onClick} />
  )
}

export default Backdrop
