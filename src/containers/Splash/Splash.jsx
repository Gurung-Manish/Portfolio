import React, { useState, useEffect } from "react";
import "./Splash.css";

const Splash = () => {
  const greetings = [
    "Hello", // English
    "Bonjour", // French
    "नमस्ते", // Nepali
    "Hola", // Spanish
    "你好", // Chinese (Nǐ hǎo)
    "こんにちは", // Japanese (Konnichiwa)
    "안녕하세요", // Korean (Annyeonghaseyo)
    "Hallo", // German
    "Ciao", // Italian
    "Olá", // Portuguese
    "Привет", // Russian (Privet)
    "Γειά σου", // Greek (Yia sou)
    "नमस्ते", // Hindi
    "مرحبا", // Arabic (Marhaban)
    "שלום", // Hebrew (Shalom)
    "Hej", // Swedish
    "Merhaba", // Turkish
  ];

  const [currentGreeting, setCurrentGreeting] = useState(0);
  const [intervalDuration, setIntervalDuration] = useState(1000);

  useEffect(() => {
    if (currentGreeting < greetings.length - 1) {
      const interval = setTimeout(() => {
        setCurrentGreeting((prevGreeting) => prevGreeting + 1);
        setIntervalDuration((prevDuration) => prevDuration * 0.8); // Reduce the interval time by 20%
      }, intervalDuration); // Dynamic interval based on state

      return () => clearTimeout(interval); // Cleanup timeout
    }
  }, [currentGreeting, intervalDuration, greetings.length]);

  return (
    <div class="splash">
      <p class="splash_label">{greetings[currentGreeting]}</p>
    </div>
  );
};

export default Splash;
