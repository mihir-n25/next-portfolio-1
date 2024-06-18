import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

function TypedComponent() {
  const typedRef = useRef(null);

  useEffect(() => {
    // Initialize Typed.js after the component mounts
    const options = {
      strings: ['Frontend Designer', 'Android/IOS App Developer', 'Backend Developer'], // An array of strings to be typed
      typeSpeed: 50, // Typing speed in milliseconds
      backSpeed: 25, // Backspacing speed in milliseconds
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    // Clean up on component unmount
    return () => {
      typed.destroy();
    };
  }, []); // The empty dependency array ensures that this effect runs only once

  return <span ref={typedRef}></span>;
}

export default TypedComponent;
