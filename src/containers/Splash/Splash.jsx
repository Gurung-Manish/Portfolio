import React, { useState, useEffect, useRef } from "react";
import "./Splash.css";
import { gsap } from "gsap";

const Splash = ({ onFinish }) => {
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
  const splashRef = useRef(null);

  useEffect(() => {
    if (currentGreeting < greetings.length - 1) {
      const interval = setTimeout(() => {
        setCurrentGreeting((prevGreeting) => prevGreeting + 1);
        setIntervalDuration((prevDuration) => prevDuration * 0.8); // Reduce the interval time by 20%
      }, intervalDuration); // Dynamic interval based on state

      return () => clearTimeout(interval); // Cleanup timeout
    } else {
      // Action after the last greeting
      // alert("All greetings have been shown!");
      gsap.to(splashRef.current, {
        y: "-100vh",
        // opacity: 0,
        duration: 1.5,
        ease: "power3.inOut",
        onComplete: onFinish, // Call onFinish to transition to Home
      });
    }
  }, [currentGreeting, intervalDuration, greetings.length, onFinish]);

  return (
    <div ref={splashRef} className="splash">
      <p className="splash_label">{greetings[currentGreeting]}</p>
    </div>
  );
};

export default Splash;
