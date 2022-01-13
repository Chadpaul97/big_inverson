
import './App.css';
import PersonComponent from './components/PersonComponent';
function App() {
  return (
    <div className="App">
      <PersonComponent firstName="John" lastName="Smith" age={ 8 } hairColor="Brown" />
      <PersonComponent firstName="Brian" lastName="Smith" age ={28} hairColor = "Yellow"/>
      <PersonComponent firstName="Hailey" lastName="Ryan" age ={34} hairColor = "Green"/>
      <PersonComponent firstName="Jessica" lastName="Win" age ={91} hairColor = "Blue"/>
    </div>
  );
}

export default App;
