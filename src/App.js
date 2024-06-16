import React from "react";

import "./app.css";

// Component
import Profile from "./components/Profile";
import About from "./components/About";

function App() {
  return (
    <div className="app-main-div">
      <div className="profile-section">
        <Profile />
      </div>

      <div className="about-section">
        <About />
      </div>
    </div>
  );
}

export default App;
