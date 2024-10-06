import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Discover } from './Discover';
import Sidebar from './Sidebar';

function App() {

  return (
    <div className="App">
    <Router>  
      <Sidebar />
      <Discover />
    </Router>
    </div>
  );
}

export default App;
