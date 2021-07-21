import styles from "./registerForm.module.css";
import { FaFacebook, FaGooglePlus, FaGithub } from "react-icons/fa";

export const RegisterForm = (props) => {
  return (
    <form className={styles.loginForm}>
      <div className={styles.decoration}></div>
      <div className={styles.formHeader}>Register</div>
      
      <div className={styles.inputsContainer}>
        <div className={styles.inputsContainer_2}>
          <input
            className={styles.inputs}
            type="text"
            placeholder="First Name"
          />
          <input
            className={styles.inputs}
            type="text"
            placeholder="Last name"
          />
          <input
            className={styles.inputs}
            type="email"
            placeholder="Email"
          />
          <input
            className={styles.inputs}
            type="password"
            placeholder="Password"
          />
          <input
            className={styles.inputs}
            type="password"
            placeholder="Confirm password"
          />

          
        </div>

        <button type="submit" className={styles.loginButton}>
          Register
        </button>
        
      </div>
    </form>
  );
};
