import './App.css';
import {BrowserRouter as Router, Route,  Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import  AddCusine  from './components/AddCusine';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      
      <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cusine' element={<AddCusine data={{cuisines:'',image:'',title:'',duration:'',serving:'' }} method='post'/>}/>
          </Routes>
          <Footer/>
        </Router>

    </div>
  );
}

export default App;
