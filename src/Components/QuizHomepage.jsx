import styles from "../Modules/QuizHomepage.module.css";
import { useNavigate } from "react-router-dom";

function QuizHomepage() {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.up}>
        <h1>🎉 Welcome to the Kana Quiz!</h1>
        <p>
          Ready to test your Hiragana skills? Let's go! This quiz will help you
          reinforce everything you've learned so far.
        </p>
      </div>
      <div className={styles.center}>
        <h2>📚 How It Works:</h2>
        <ul>
          <li>You’ll be shown one Hiragana character per question.</li>
          <li>
            Your task is to select the correct romaji (reading) from four
            options.
          </li>
          <li>
            Once you pick an answer, you'll know immediately if it’s right or
            wrong.
          </li>
          <li>Click "Next" to move to the next question.</li>
          <li>
            The questions appear in random order, so you’ll stay sharp and avoid
            memorizing patterns.
          </li>
          <li>Each character will only appear once per quiz session.</li>
        </ul>
      </div>
      <div className={styles.down}>
        <h2>🏁 Your Goal:</h2>
        <p>
          Get familiar with the characters, boost your recognition speed, and
          have fun! When you're ready, click Start Quiz to begin.
        </p>
      </div>
      <span className={styles.span}>Good luck! 💪</span>
      <button className={styles.btn} onClick={() => navigate("/questions")}>
        Start
      </button>
    </div>
  );
}

export default QuizHomepage;
