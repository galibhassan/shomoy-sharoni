import styles from "./registerForm.module.css";

export const RegisterForm = (props) => {
  return (
    <form className={styles.registerForm}>
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

        <button type="submit" className={styles.registerButton}>
          Register
        </button>
        
      </div>
    </form>
  );
};
