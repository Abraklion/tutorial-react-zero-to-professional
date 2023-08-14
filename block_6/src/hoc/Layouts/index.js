import {Component} from "react";
import style from './Layout.module.scss'

class Layouts extends Component {

  /**
  * Отрисовка
  **/
  render() {
    return (
      <>
        <main className={style.Layout}>
          {this.props.children}
        </main>
      </>
    )
  }
}

export default Layouts
