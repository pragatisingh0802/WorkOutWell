import React from "react";
import { Route, Routes } from "react-router-dom"; // to route bw home pg and exercise details page
import { Box } from '@mui/material'; //is a div with shading and colors
import './App.css';

import ExerciseDetail from "./pages/ExerciseDetail";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
    return(
        <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto"> 
        <Navbar/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/exercise/:id" element={<ExerciseDetail />} />
        </Routes>
        <Footer />
        </Box>  
    )
}
  
export default App
//sx for responsiveness, xl in large screen, m means margin
