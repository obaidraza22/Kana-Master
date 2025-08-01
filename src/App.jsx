import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hiragana from "./Components/Hiragana";
import Katakana from "./Components/Katakana";
import Quiz from "./Components/Quiz";
import Homepage from "./Components/Homepage";
import Path from "./Components/Path";
import Questions from "./Components/Questions";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/hiragana" element={<Hiragana />} />
        <Route path="/hiragana/:kana" element={<Hiragana />} />
        <Route path="/katakana" element={<Katakana />} />
        <Route path="/katakana/:kana" element={<Katakana />} />
        <Route path="/path" element={<Path />} />
        <Route path="quiz" element={<Quiz />} />
        <Route path="questions" element={<Questions />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
