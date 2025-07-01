import { createContext, useState } from "react";
import HiraganaQuestions from "../../Data/quizHiragana.json";

export const QuizContext = createContext();

export function QuizProvider({ children }) {
  const questions = HiraganaQuestions;
  const [index, setIndex] = useState(0);

  return (
    <QuizContext.Provider value={{ questions, index, setIndex }}>
      {children}
    </QuizContext.Provider>
  );
}
