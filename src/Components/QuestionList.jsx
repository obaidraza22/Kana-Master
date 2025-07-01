import styles from "../Modules/QuestionList.module.css";
import { useContext, useReducer } from "react";
import { QuizContext } from "../Context/QuizContext";

const initialState = {
  selectedOption: null,
  isCorrect: false,
  isSelected: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SELECTED_OPTION":
      return { ...state, selectedOption: action.payload };

    case "SELECTED":
      return { ...state, isSelected: true };

    case "CORRECT":
      return { ...state, isCorrect: true };

    case "NEXT_QUESTION":
      return { ...state, isCorrect: false };
  }
}

function QuestionList() {
  const { questions, index, setIndex } = useContext(QuizContext);
  const curQuestion = questions[index];

  const [state, dispatch] = useReducer(reducer, initialState);
  const { selectedOption, isCorrect, isSelected } = state;
  console.log(selectedOption);

  function optionCheck(e) {
    dispatch({ type: "SELECTED_OPTION", payload: e.target.textContent });
    dispatch({ type: "SELECTED" });

    if (e.target.textContent === curQuestion.answer) {
      dispatch({ type: "CORRECT" });
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <h1 className={styles.question}>
          {curQuestion.id}. {curQuestion.question}
        </h1>
        <span className={styles.kana}>{curQuestion.kana}</span>
        <ul className={styles.options}>
          {curQuestion.options.map((option, i) => (
            <li
              className={`${styles.option} ${
                isSelected
                  ? option === selectedOption
                    ? option === curQuestion.answer
                      ? styles.correct
                      : styles.wrong
                    : ""
                  : ""
              }`}
              onClick={(e) => optionCheck(e)}
              key={i}
            >
              {option}
            </li>
          ))}
        </ul>
        {isCorrect && (
          <button
            className={styles.btn}
            onClick={() => {
              setIndex(index + 1);
              dispatch({ type: "NEXT_QUESTION" });
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
}

export default QuestionList;
