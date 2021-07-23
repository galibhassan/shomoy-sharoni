import styles from "./registerForm.module.css";
import { useState, useEffect } from "react";
import { firebaseConfig } from "../../appConfig";

const API_KEY = firebaseConfig.apiKey;

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

  const registerUser = async () => {
    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`,
      {
        method: "POST",
        body: JSON.stringify({
          email: registerData.email,
          password: registerData.password,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).catch((err) => {
      console.log(err);
    });
    const responseData = await response.json().catch((err) => {
      console.log(err);
    });
    console.log(responseData);
    
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(registerData);

    // Here, post request should be sent
    registerUser();
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
