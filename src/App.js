import './App.css';
import AddPole from './addPole/AddPole.jsx';
import Polling from './polling/Polling.jsx';

function App() {
  return (
    <div className="text-center">
      <Polling />
      <AddPole/>
    </div>
  );
}

export default App;
