import React from 'react';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import About_me from './About_me';
import Contact from './Contact';
import Projects from './Projects';

const App=()=>{

  return(

    <>

    <Router>


    <Routes>



     <Route path='/' element={<Layout/>}>

     <Route index element={<Home/>}></Route>
     <Route path='/about_me' element={<About_me/>}></Route>
     <Route path='/projects' element={<Projects/>}></Route>
     <Route path='/contact' element={<Contact/>}></Route>





     </Route>



    </Routes>
   
    



    </Router>



    
    </>
  )
}

export default App;