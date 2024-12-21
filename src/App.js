import React from 'react';
import { Routes, Route } from 'react-router-dom';
// import Navbar from './Component/Navbar'; 
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Header1 from './Component/header/Header1';
import Header2 from './Component/header/Header2';

 import { CssBaseline } from '@mui/material';

 import { ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./Pages/Theme";
import Footer from './Component/footer/Footer';
import './App.css'

function App() {
   const [theme, colorMode] = useMode();
  return (
    <>
       <ColorModeContext.Provider value={colorMode}> 
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {/* <Header1 /> */}
          <Header2 />
          {/* <Navbar /> */}
        

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
      <Footer/>
      </ThemeProvider>
       </ColorModeContext.Provider> 
    </>
  );
}

export default App;