import Layouts from './hoc/Layouts';
import Quiz from './containers/Quiz';

function App() {
  return (
    <Layouts>
      <Quiz/> {/* -> Компонент викторина */}
    </Layouts>
  );
}

export default App;
