import style from './MenuToggle.module.scss'

/**
 * Компонент {Меню Бургер}
 * */
const MenuToggle = props => {
  const cls = [
    style.MenuToggle,
    'fa'
  ]

  if (props.isOpen) {
    cls.push('fa-times')
    cls.push(style.open)
  } else {
    cls.push('fa-bars')
  }

  /**
   * Отрисовка
   **/
  return (
    <i
      className={cls.join(' ')}
      onClick={props.onToggle}
    />
  )
}

export default MenuToggle
