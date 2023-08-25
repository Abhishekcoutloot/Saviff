import{Routes, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import About from './pages/About';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Register from './pages/Auth/Register.js'
import Login from './pages/Auth/Login.js';
function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/policy' element={<Policy/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
      <Route path="register" element={<Register/>}/>
      <Route path="login" element={<Login/>}/>

    </Routes>
    </>
  );
}

export default App;
