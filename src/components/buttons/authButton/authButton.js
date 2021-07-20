import { FaUserAlt, FaUserPlus } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./authButton.module.css";

export const AuthButton = (props) => {
  const { buttonType } = props;

  const renderIcon = (buttonType) => {
    if (buttonType === "BUTTON_LOGIN") return <FaUserAlt fontSize="x-large" />;
    else if (buttonType === "BUTTON_REGESTER")
      return <FaUserPlus fontSize="xx-large" />;
    else return "click me";
  };

  return (
    <button className={styles.authButton}>{renderIcon(buttonType)}</button>
  );
};
