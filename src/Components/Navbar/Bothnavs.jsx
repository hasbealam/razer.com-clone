import React from 'react';
import { useState, useEffect } from 'react';
import { HamBurger } from './HamBurger';
import { Navbar } from './Navbar';

function Bothnavs(props) {
    const [showHamBurger, setShowHamBurger] = useState(window.innerWidth < 1280);

  useEffect(() => {
    function handleResize() {
      setShowHamBurger(window.innerWidth < 1280);
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
    return (
        <div>
            {showHamBurger ? <HamBurger /> : <Navbar />}
        </div>
    );
}

export default Bothnavs;