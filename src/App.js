import React from 'react';
import Navbar from "./components/Navbar/Navbar.jsx";
import Slider from "./components/Slider/Slider.js";
import Edmsg from "./components/ED Msg/Edmsg.jsx";
import UpcomingTraining from "./components/Upcoming Training/UpcomingTraining.jsx";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Slider/>
      <Edmsg/>
      <UpcomingTraining/>
    </div>
  );
}

export default App;
