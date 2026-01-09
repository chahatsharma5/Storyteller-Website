import Home from './pages/Home';
import Blog from './pages/Blog';
import About from './pages/About/';
import Contact from './pages/Contact/';
import LogIn from './pages/LogIn/';

import './App.css';
import {Route, Routes } from 'react-router-dom';

const App = () => {
  return(
    <div className='container'>
  
      <Routes>
    
    <Route path ='/'element={<Home></Home>}/>
    <Route path ='/Blog/:id'element={<Blog></Blog>}/>
    <Route path ='/About'element={<About></About>}/>
    <Route path ='/Contact'element={<Contact></Contact>}/>
    <Route path ='/LogIn'element={<LogIn></LogIn>}/>
    </Routes>

    </div>
  ); 
}
      
export default App;
