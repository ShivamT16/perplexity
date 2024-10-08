import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Discover } from './Page/Discover';
import Sidebar from './Page/Sidebar';
import { ArticlePage } from './Page/ArticlePage';
import { Home } from './Page/Home';
import LoginModal from './Page/LoginModal';

function App() {
  return (
    <div className="App">
    <Router>  
      <Sidebar />
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/discover" element={<Discover />} />
      <Route path="/page/:heading" element={< ArticlePage/>} />
      <Route path="/login" element={<LoginModal />} />
     </Routes>
    </Router>
    </div>
  );
}

export default App;
