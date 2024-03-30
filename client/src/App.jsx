import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./components/Dashboard";
import Quiz from "./components/Quiz";
import PlayQuiz from "./components/PlayQuiz";
import Results from "./components/Results";
import { Toaster } from "react-hot-toast";

function App() {

  return (
    <>
    <Toaster />
      <Routes>
        <Route path="/" element={<Dashboard />}/>
        <Route path="/quiz" element={<Quiz />}/>
        <Route path="/playquiz/:quizId" element={<PlayQuiz />}/>
        <Route path="/results/:quizId" element={<Results />}/>
      </Routes>
    </>
  );
}

export default App;
