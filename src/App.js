
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Specialities from './Pages/Specialities/Specialities';
import About from './Pages/About/About';

function App() {
  return (
    <>
    <BrowserRouter>
       <Routes>
       <Route path="/" Component={Home} />
       <Route path="/About" Component={About} />
        <Route path="/Specialities" Component={Specialities} />
       </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
