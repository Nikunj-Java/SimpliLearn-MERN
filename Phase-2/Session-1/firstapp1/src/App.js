import logo from './logo.svg';
import './App.css';
import HelloWorld from './components/helloworld';
import Greeting from './components/greeting';
import StyleComponent from './components/stylecomponent';
import ActionButton from './components/actionbutton';
import NumberList from './components/numberlist';

function App() {
  return (
    <div className="App">
      <HelloWorld/>
      <Greeting/>
      <StyleComponent/>
      <ActionButton/>
      <NumberList/>
    </div>
  );
}

export default App;
