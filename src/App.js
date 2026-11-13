import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import FindSpecialist from "./pages/FindSpecialist";
import BookAppointment from "./pages/BookAppointment";

import SignUp from "./pages/SignUp";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/find-specialist"
          element={<FindSpecialist />}
        />
        <Route
          path="/book-appointment"
          element={<BookAppointment />}
        />
      
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;