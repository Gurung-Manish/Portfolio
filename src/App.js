import React, { useState } from "react";
import { Splash, Home } from "./containers";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashFinish = () => {
    setShowSplash(false); // Hides the splash after animation completes
  };

  return (
    <div>
      {showSplash && <Splash onFinish={handleSplashFinish} />}
      <Home />
    </div>
  );
};

export default App;
