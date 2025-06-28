import styles from "../Modules/Navbar.module.css";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className={styles.navbar}>
      <h1 className={styles.heading} onClick={() => navigate("/")}>
        仮名
      </h1>
      <div className={styles.navlink}>
        <Link className={styles.link} to="/hiragana">
          Hiragana
        </Link>
        <Link className={styles.link} to="/katakana">
          Katakana
        </Link>
        <button className={styles.btn} onClick={() => navigate("/quiz")}>
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default Navbar;
