import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyPage from "./MyPage";
import QuestionPage from "./QuestionPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MyPage />} />
        <Route path="/quiz/:team" element={<QuestionPage />} />
      </Routes>
    </Router>
  );
}
