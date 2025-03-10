import React from "react";
import HalfImage from "../Assets/catc.jpg"; // Use a sleek image for half-page
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaw } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "../Styles/Hero.module.css"; // Import CSS module

function Hero() {
  const navigate = useNavigate();

  const handleSignUp = () => {
    navigate("/signup");
  };

  return (
    <div className={styles.container}>
      {/* Half-Page Image */}
      <div className={styles.imageHalf}>
        <img
          src={HalfImage}
          alt="Modern Pet Care"
          className={styles.imageHalfscreen}
        />
      </div>

      {/* Content Section */}
      <div className={styles.content}>
        <p className={styles.subtitle}>❤️ Welcome to CuePets</p>
        <h1 className={styles.title}>A New Era of Pet Care & Wellness</h1>
        <p className={styles.description}>
          Simplify your pet's health management with personalized care plans,
          vaccination reminders, and adoption support—all in one place.
        </p>
        <button className={styles.button} onClick={handleSignUp}>
          <FontAwesomeIcon icon={faPaw} /> Get Started
        </button>
      </div>
    </div>
  );
}

export default Hero;
