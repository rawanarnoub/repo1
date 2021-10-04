// import logo from './logo.svg';
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavMenu from './components/NavMenu';
// import Header from './components/Header';
// import FirstSection from './components/FirstSection';
// import SecondSection from './components/SecondSection';
import { BrowserRouter , Route, Switch } from 'react-router-dom';

// App components 
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Footer from './components/Footer';

function App() {
  return (
  
    <div>
       <BrowserRouter>
        <NavMenu />
        <Switch>
         
          <Route path="/about">
            <About />
          </Route>
        
          <Route path="/projects">
            <Projects />
          </Route>
       
          <Route path="/contacts">
            <Contact />
          </Route>
       
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
