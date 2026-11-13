import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import pic1 from "../assets/Booking.jpg";
import pic2 from "../assets/find.jpg";

function Home() {
  return (
    <main className="home-page">
      <section className="home-hero">
        <h1>Your Mind Deserves Care</h1>

        <p>
         Mental Wellness & Support Platform
         <br></br>
         Find the right mental health specialist and book your appointment in just a few simple steps.
        </p>
      </section>

      <section className="home-cards">
       
        <Link
          to="/find-specialist"
          className="home-card"
        >
          <img
            src={pic2}
            alt="Calm consultation room surrounded by nature"
          />

          <div className="home-card-content">
            <h2>Find Specialist</h2>
            <p>→ Meet our specialists</p>
          </div>
        </Link>
        
         <Link
          to="/book-appointment"
          className="home-card"
        >
          <img
            src={pic1}
            alt="Comfortable therapy room for an appointment"
          />

          <div className="home-card-content">
            <h2>Book Appointment</h2>
            <p>→ Choose your session</p>
          </div>
        </Link>
      </section>
    </main>
  );
}

export default Home;