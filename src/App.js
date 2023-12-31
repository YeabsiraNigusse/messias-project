import {Routes, Route } from 'react-router-dom';

import HomePage from './Pages/Home';
import About from './Pages/About';
import BlogPage from './Pages/Blog';
import Contact from './Pages/Contact';
import Ministry from './Pages/Ministries';
import Donate from './Pages/Donate';



function App() {
  return (
     <Routes>

     <Route path='/' element={<HomePage/>}/>

     <Route path='/about' element={<About/>}/>

     <Route path='/blog' element={<BlogPage/>}/>

     <Route path='/contact' element={<Contact/>}/>

     <Route path='/ministry' element={<Ministry/>}/>

     <Route path='/donate' element={<Donate/>}/>


     </Routes>
    
  );
}

export default App;
