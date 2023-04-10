import {HashRouter, Routes, Route} from 'react-router-dom';
import Home from "./components/Home";
import './styles/style.css'
import './styles/icofont/icofont.min.css';

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="*" element={<h1>404 page not found.</h1>} />
        </Routes>
      </HashRouter>
     
    </div>
  );
}

export default App;
