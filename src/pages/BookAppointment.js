import { useState } from "react";
import { useLocation  } from "react-router-dom";
import "../styles/BookAppointment.css";

const specialists = [
  {
    name: "Dr. Sara Ahmad",
    dates: ["Sun, Nov 15", "Tue, Nov 17", "Thu, Nov 19", "Sun, Nov 22"],
  },
  {
    name: "Dr. Noor Saleh",
    dates: ["Mon, Nov 16", "Wed, Nov 18", "Mon, Nov 23", "Wed, Nov 25"],
  },
  {
    name: "Dr. Khaled Mansour",
    dates: ["Sat, Nov 14", "Mon, Nov 16", "Wed, Nov 18", "Sat, Nov 21"],
  },
  {
    name: "Dr. Maya Nasser",
    dates: ["Fri, Nov 13", "Tue, Nov 17", "Thu, Nov 19", "Fri, Nov 20", "Tue, Nov 24", "Thu, Nov 26"],
  },
  {
    name: "Dr. Omar Khalil",
    dates: ["Mon, Nov 16", "Wed, Nov 18", "Mon, Nov 23", "Wed, Nov 25"],
  },
  {
    name: "Dr. Hana Youssef",
    dates: ["Mon, Nov 16", "Thu, Nov 19", "Mon, Nov 23", "Thu, Nov 26"],
  },
  {
    name: "Dr. Lina Haddad",
    dates: ["Sun, Nov 15", "Tue, Nov 17", "Sun, Nov 22", "Tue, Nov 24"],
  },
  {
    name: "Dr. Tariq Aziz",
    dates: ["Mon, Nov 16", "Wed, Nov 18", "Fri, Nov 20", "Mon, Nov 23"],
  },
  {
    name: "Dr. Rania Farouk",
    dates: ["Sat, Nov 14", "Tue, Nov 17", "Sat, Nov 21", "Tue, Nov 24"],
  },
  {
    name: "Dr. Yousef Bakir",
    dates: ["Sun, Nov 15", "Thu, Nov 19", "Sun, Nov 22", "Thu, Nov 26"],
  },
  {
    name: "Dr. Dina Samer",
    dates: ["Mon, Nov 16", "Fri, Nov 20", "Mon, Nov 23", "Fri, Nov 27"],
  },
  {
    name: "Dr. Adam Rahal",
    dates: ["Tue, Nov 17", "Wed, Nov 18", "Sat, Nov 21", "Tue, Nov 24"],
  },
];
const types = ["Online", "In-Clinic"];
const times = ["09:00", "10:00", "11:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

function BookAppointment() {
  const Location = useLocation();
  const selectedDoctor = Location.state?.doctorName || "";

  const [name, setName] = useState(selectedDoctor);
  const [type, setType] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const specialist = specialists.find((s) => s.name === name);

  const chooseSpecialist = (value) => {
    setName(value);
    setDate("");
    setTime("");
  };

  const confirm = () => {
    if (!name || !type || !date || !time) {
      alert("Please complete all steps!");
      return;
    }
    alert(`Booked: ${name}, ${type}, ${date} at ${time}`);
    setName("");
    setType("");
    setDate("");
    setTime("");
  };
  

  return (
    <div className="page">
      <h1>Book an Appointment</h1>
      <p>Three simple steps to book your session.</p>

      <div className="cards">
        <section className="card">
          <h2>1. Choose specialist</h2>
          <select value={name} onChange={(e) => chooseSpecialist(e.target.value)}>
            <option value="">Select a specialist</option>
            {specialists.map((s) => (
              <option key={s.name}>{s.name}</option>
            ))}
          </select>
          <select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Session type</option>
            {types.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </section>

        <section className="card">
          <h2>2. Pick date & time</h2>
          {!specialist ? (
            <p>Choose a specialist first.</p>
          ) : (
            <>
              <div className="grid dates">
                {specialist.dates.map((d) => (
                  <button key={d} className={date === d ? "chip active" : "chip"} onClick={() => setDate(d)}>
                    {d}
                  </button>
                ))}
              </div>
              <div className="grid times">
                {times.map((t) => (
                  <button key={t} className={time === t ? "chip active" : "chip"} onClick={() => setTime(t)}>
                    {t}
                  </button>
                ))}
              </div>
            </>
          )}
        </section>

        <section className="card">
          <h2>3. Confirm</h2>
          <p>Specialist: {name || "-"}</p>
          <p>Type: {type || "-"}</p>
          <p>Date: {date || "-"}</p>
          <p>Time: {time || "-"}</p>
          <button className="confirm" onClick={confirm}>Confirm booking</button>
        </section>
      </div>
    </div>
  );
}

export default BookAppointment;