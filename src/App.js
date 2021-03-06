import './App.css';
import Asyncawait from './components/AsyncAwait/Asyncawait';
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
      <h2>Async Await</h2>
      <Asyncawait />
    </div>
  );
}

export default App;
