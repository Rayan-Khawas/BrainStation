import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/SignUp.css";

const SignUp = () => {
  const [values, setValues] = useState({
    fname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = [];

    if (!values.fname.trim()) {
      errors.push("Full name is required.");
    }

    if (!values.email.trim()) {
      errors.push("Email is required.");
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      errors.push("Email is not valid.");
    }

    if (!values.password) {
      errors.push("Password is required.");
    } else if (values.password.length < 6) {
      errors.push("Password must be at least 6 characters.");
    }

    if (values.password !== values.confirmPassword) {
      errors.push("Passwords do not match.");
    }

    if (errors.length > 0) {
      alert(errors.join("\n"));
      return;
    }

    alert(
      `Account created successfully!\nWelcome, ${values.fname}!`
    );

    setValues({
      fname: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="signup">
      <div className="signupLeft">
        <div className="signupWelcome">
          <h1>Welcome to MindStation</h1>
          <p>
            Start your journey toward better mental well-being.
          </p>
        </div>
      </div>

      <div className="signupRight">
        <form id="signup-form" onSubmit={handleSubmit}>
          <h2>Create Account</h2>
          <p className="signupDescription">
            Join MindStation and take the first step toward well-being.
          </p>

          <label htmlFor="fname">Full Name</label>
          <input
            id="fname"
            name="fname"
            type="text"
            placeholder="Enter full name..."
            value={values.fname}
            onChange={(e) =>
              setValues({ ...values, fname: e.target.value })
            }
            required
          />

          <label htmlFor="email">Email</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email..."
            value={values.email}
            onChange={(e) =>
              setValues({ ...values, email: e.target.value })
            }
            required
          />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            placeholder="Enter password..."
            value={values.password}
            onChange={(e) =>
              setValues({ ...values, password: e.target.value })
            }
            minLength={6}
            required
          />

          <label htmlFor="confirmPassword">
            Confirm Password
          </label>
          <input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            placeholder="Confirm password..."
            value={values.confirmPassword}
            onChange={(e) =>
              setValues({
                ...values,
                confirmPassword: e.target.value,
              })
            }
            required
          />

          <button type="submit">Create Account</button>

          <p className="signupLogin">
            Already have an account?{" "}
            <Link to="/sign-in">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUp;