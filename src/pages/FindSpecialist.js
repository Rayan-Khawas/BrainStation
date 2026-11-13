import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/FindSpecialist.css';

const specialties = [
  { name: 'Anxiety', desc: 'Panic, stress and worry' },
  { name: 'Depression', desc: 'Low mood, burnout and grief' },
  { name: 'Family Therapy', desc: 'Couples, parents and families' },
];

const specialists = [
  // Anxiety
  { id: 1, name: 'Dr. Sara Ahmad', specialty: 'Anxiety', years: 8, price: 40, bio: 'Helps clients manage anxiety, panic attacks and daily stress using CBT.', focus: ['Panic attacks', 'Social anxiety', 'Stress management'], days: ['Sun', 'Tue', 'Thu'] },
  { id: 2, name: 'Dr. Noor Saleh', specialty: 'Anxiety', years: 5, price: 35, bio: 'Focuses on building calm, practical coping tools for work and study stress.', focus: ['Generalized anxiety', 'Exam stress', 'Mindfulness'], days: ['Mon', 'Wed'] },
  { id: 3, name: 'Dr. Khaled Mansour', specialty: 'Anxiety', years: 10, price: 45, bio: 'Experienced in treating phobias and obsessive thoughts.', focus: ['Phobias', 'OCD', 'Sleep problems'], days: ['Sat', 'Mon', 'Wed'] },
  { id: 4, name: 'Dr. Maya Nasser', specialty: 'Anxiety', years: 7, price: 40, bio: 'Supports young adults dealing with anxiety and life transitions.', focus: ['Young adults', 'Life transitions', 'Self-esteem'], days: ['Tue', 'Thu', 'Fri'] },

  // Depression
  { id: 5, name: 'Dr. Omar Khalil', specialty: 'Depression', years: 12, price: 50, bio: 'Long experience helping people recover from depression and burnout.', focus: ['Depression', 'Burnout', 'Grief'], days: ['Sun', 'Wed'] },
  { id: 6, name: 'Dr. Hana Youssef', specialty: 'Depression', years: 9, price: 45, bio: 'Provides a warm, supportive space to rebuild motivation and hope.', focus: ['Low mood', 'Loss and grief', 'Motivation'], days: ['Mon', 'Thu'] },

  // Family Therapy
  { id: 7, name: 'Dr. Lina Haddad', specialty: 'Family Therapy', years: 6, price: 40, bio: 'Works with families to improve communication and resolve conflict.', focus: ['Family conflict', 'Communication', 'Parenting'], days: ['Sun', 'Tue'] },
  { id: 8, name: 'Dr. Tariq Aziz', specialty: 'Family Therapy', years: 11, price: 55, bio: 'Specializes in couples therapy and relationship repair.', focus: ['Couples therapy', 'Trust issues', 'Separation'], days: ['Mon', 'Wed', 'Fri'] },
  { id: 9, name: 'Dr. Rania Farouk', specialty: 'Family Therapy', years: 8, price: 45, bio: 'Supports parents and teenagers through difficult stages.', focus: ['Teen issues', 'Parenting', 'School stress'], days: ['Sat', 'Tue'] },
  { id: 10, name: 'Dr. Yousef Bakir', specialty: 'Family Therapy', years: 14, price: 55, bio: 'Helps families go through major changes and loss together.', focus: ['Family changes', 'Loss', 'Blended families'], days: ['Sun', 'Thu'] },
  { id: 11, name: 'Dr. Dina Samer', specialty: 'Family Therapy', years: 4, price: 35, bio: 'Offers gentle guidance for newlyweds and new parents.', focus: ['Newlyweds', 'New parents', 'Boundaries'], days: ['Mon', 'Fri'] },
  { id: 12, name: 'Dr. Adam Rahal', specialty: 'Family Therapy', years: 9, price: 50, bio: 'Focuses on healthy communication between siblings and parents.', focus: ['Siblings', 'Communication', 'Conflict resolution'], days: ['Tue', 'Wed', 'Sat'] },
];

const toId = (name) =>
  name.toLowerCase().replace(/\s+/g, '-');

const FindSpecialist = () => {
  const goTo = (name) => {
    const section = document.getElementById(toId(name));

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <main className="findSpecialist">
      <div className="findContainer">

        <section className="findHero">
          <h1>Find a Specialist</h1>
          <p>
            Browse licensed professionals and find the right fit for you.
          </p>
        </section>

        <section className="findSpecialties">
          <h2>Specialties</h2>

          <div className="findSpecialtyCards">
            {specialties.map((item) => {
              return (
                <button
                  type="button"
                  key={item.name}
                  className="findSpecialtyCard"
                  onClick={() => goTo(item.name)}
                >
                  <h3>{item.name}</h3>
                  <p>{item.desc}</p>

                </button>
              );
            })}
          </div>
        </section>

        {specialties.map((item) => (
          <section
            className="findGroup"
            id={toId(item.name)}
            key={item.name}
          >
            <h2>{item.name}</h2>

            {specialists
              .filter(
                (doctor) => doctor.specialty === item.name
              )
              .map((doctor) => (
                <div className="findRow" key={doctor.id}>
                  <div className="findRowInfo">
                    <h3>{doctor.name}</h3>
                    <p>
                      {doctor.years} years · {doctor.language}
                    </p>
                  </div>

                  <Link
                    to="/book-appointment"
                    state={{doctorName: doctor.name}}
                    className="findBtnOutline"
                  >
                    Book Appointment
                  </Link>
                </div>
              ))}
          </section>
        ))}

      </div>
    </main>
  );
};

export default FindSpecialist;