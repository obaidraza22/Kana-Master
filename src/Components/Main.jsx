import { useNavigate } from "react-router-dom";
import styles from "../Modules/Main.module.css";

function Main() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Master Hiragana & Katakana with Ease</h1>
        <div>
          <p className={styles.text}>
            This app is your personal guide to learning the Japanese writing
            system. Whether you're a complete beginner or brushing up, you'll
            find the essential kana characters presented in a clear, interactive
            format. Explore each character, test yourself with quizzes, and
            build a strong foundation for reading and writing Japanese. Designed
            to be simple, distraction-free, and effective — so you can focus on
            what matters: learning.
          </p>
        </div>
        <button className={styles.btn} onClick={() => navigate("/path")}>
          Begin Your Journey
        </button>
      </div>
    </div>
  );
}

export default Main;
