
// import React from 'react'
// import Navbar from './Componenents/Navbar'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }

// export default App
import React from "react";
import Navbar from "./Componenents/Navbar";
import Home from "./Componenents/Home";
import About from "./Componenents/About";
import Menu from "./Componenents/Menu";
import Footer from "./Componenents/Footer";
import Dishes from "./Componenents/Dishes";
import Reviews from "./Componenents/Review";
import Review from "./Componenents/Review";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Navbar />

      
<Routes>
  <Route path="/" element={<Home/>}/>

<Route path="/menu" element={<Menu/>}/>

</Routes>
      <Footer />
    </div>
  );
};

export default App;