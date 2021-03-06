import './App.css';
import LiveQuestions from './components/Livecoding/LiveQuestions';
import Promise from './components/Promises/Promise';

function App() {
  return (
    <div className="App">
      <h1>Async Exercise</h1>
      <h2>Callbacks Questions</h2>
      <LiveQuestions />
      <hr />
      <h2>Promises Questions</h2>
      <Promise />
    </div>
  );
}

export default App;
