import style from './button.module.scss'

/**
 * Компонент {Кнопка}
 * */
const Button = props => {
  const cls = [
    style.button,
    style[`button-${props.type}`]
  ]

  return (
    <button
      onClick={props.onClick}
      className={cls.join(' ')}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  )
}

export default Button
