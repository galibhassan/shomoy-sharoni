import styles from "./loginForm.module.css";
import { FaFacebook, FaGooglePlus, FaGithub } from "react-icons/fa";

export const LoginForm = (props) => {
  return (
    <form className={styles.loginForm}>
      <div className={styles.decoration}></div>
      <div className={styles.formHeader}>Log in</div>
      <div className={styles.inputsContainer}>
        <div className={styles.inputsContainer_2}>
          <input
            className={styles.inputEmail}
            type="email"
            placeholder="Email"
          />
          <input
            className={styles.inputPassword}
            type="password"
            placeholder="Password"
          />

          <div className={styles.additionals}>
            <div className={styles.forgotPassword}>
              <a>Forgot password?</a>
            </div>
            <div className={styles.rememberMe}>
              <input type="checkbox" />
              <div>Rembmer me?</div>
            </div>
          </div>
        </div>

        <button type="submit" className={styles.loginButton}>
          Log in
        </button>
        <div className={styles.socialLogin}>
          <div className={styles.socialLoginHeader}>
            Or login with social credentials
          </div>
          <div className={styles.socialIconsContainer}>
            <div className={styles.socialIcons}>
              <FaGooglePlus fontSize="large" />
              <FaFacebook fontSize="large" />
              <FaGithub fontSize="large" />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};
