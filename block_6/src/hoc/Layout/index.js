import {Component} from "react";
import style from './Layout.module.scss'

import MenuToggle from "../../components/Navigation/MenuToggle";
import Drawer from "../../components/Navigation/Drawer";

/**
 * Компонент {Викторина}
 **/
class Layout extends Component {

  /**
   * Состояние компонента
   **/
  state = {

    // открывает / закрывает меню
    menu: false
  }


  /**
   * Обработчик клика по бургер меню
   * @param {Object=} e - обьект события
   *
   * @return {void}
   */
  toggleMenuHandler = (e) => {
    this.setState({
      menu: !this.state.menu
    })
  }

  /**
   * Отрисовка
   **/
  render() {
    return (
      <>
        <header>

          <Drawer
            isOpen={this.state.menu}
          /> {/* -> Компонент меню */}

          <MenuToggle
            onToggle={this.toggleMenuHandler}
            isOpen={this.state.menu}
          />{/* -> Бургер */}

        </header>

        <main className={style.Layout}>
          {this.props.children}
        </main>

        <footer>

        </footer>
      </>
    )
  }
}

export default Layout
