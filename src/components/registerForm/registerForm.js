import styles from "./registerForm.module.css";
import { useState, useEffect } from "react";

export const RegisterForm = (props) => {
  const [registerData, setRegisterData] = useState({});

  useEffect(() => {
    console.log(registerData);
  }, [registerData]);

  const handleInputs = (event) => {
    const inputKey = event.target.name;
    setRegisterData((prevRegisterData) => {
      return {
        ...prevRegisterData,
        [inputKey]: event.target.value,
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registerData);
    // Here, post request should be sent
  };

  return (
    <form className={styles.registerForm} onSubmit={handleSubmit}>
      <div className={styles.decoration}></div>
      <div className={styles.formHeader}>Register</div>

      <div className={styles.inputsContainer}>
        <div className={styles.inputsContainer_2}>
          <input
            className={styles.inputs}
            type="text"
            placeholder="First Name"
            onChange={handleInputs}
            name="firstName"
          />
          <input
            className={styles.inputs}
            type="text"
            placeholder="Last name"
            onChange={handleInputs}
            name="lastName"
          />
          <input
            className={styles.inputs}
            type="email"
            placeholder="Email"
            onChange={handleInputs}
            name="email"
          />
          <input
            className={styles.inputs}
            type="password"
            placeholder="Password"
            onChange={handleInputs}
            name="password"
          />
          <input
            className={styles.inputs}
            type="password"
            placeholder="Confirm password"
            onChange={handleInputs}
            name="passwordConfirmed"
          />
        </div>

        <button type="submit" className={styles.registerButton}>
          Register
        </button>
      </div>
    </form>
  );
};
