import './App.css';
import './styles/reset.scss';
import './styles/mixin.scss';
import Header from './components/Header.js';
import Chat from './components/Chat.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <Chat/>
    </div>
  );
}

export default App;
