import React from "react";
import "./App.css";
import StudentForm from "./StudentForm";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import StudentTable from "./StudentTable";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentTable />} />
        <Route path="/student-form" element={<StudentForm />} />
      </Routes>
    </Router>
  );
}

export default App;
