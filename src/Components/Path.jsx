import { useNavigate } from "react-router-dom";
import styles from "../Modules/Path.module.css";
import Navbar from "./Navbar";

function Path() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>What Do You Want To Learn</h1>
          <button className={styles.btn} onClick={() => navigate("/hiragana")}>
            HIRAGANA
          </button>
          <span>Or</span>
          <button className={styles.btn} onClick={() => navigate("/katakana")}>
            KATAKANA
          </button>
          <p>
            Tip💡: Start with Hiragana — it's the foundation of Japanese
            writing. Mastering it first will make learning Katakana and Kanji
            much easier!
          </p>
        </div>
      </div>
    </>
  );
}

export default Path;
