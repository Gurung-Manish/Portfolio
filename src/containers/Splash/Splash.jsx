import React, { useState, useEffect } from "react";
import "./Splash.css";

const Splash = () => {
  const greetings = [
    "Hello", // English
    "Bonjour", // French
    "Namaste", // Nepali
    "Hola", // Spanish
    "你好", // Chinese (Nǐ hǎo)
    "こんにちは", // Japanese (Konnichiwa)
    "안녕하세요", // Korean (Annyeonghaseyo)
    "Hallo", // German
    "Ciao", // Italian
    "Olá", // Portuguese
    "Привет", // Russian (Privet)
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreeting(
        (prevGreeting) => (prevGreeting + 1) % greetings.length
      );
    }, 1000); // change every 1 second
    return () => clearInterval(interval); // cleanup on unmount
  }, [greetings.length]);

  return (
    <div class="splash">
      <p class="splash_label">{greetings[currentGreeting]}</p>
    </div>
  );
};

export default Splash;
