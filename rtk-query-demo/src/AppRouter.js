import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import TodoList from "./TodoList";
import Documentation from "./Documentation";

export default function AppRouter() {
  return (
    <>
    <Router>
      <div className="nav">
        <Link to={'/'}><p className="navItem">Home</p></Link>
        <Link to={'/docs'}><p className="navItem">Documentation</p></Link>
      </div>
      <Routes>
        <Route path="/" element={<TodoList />} />
        <Route path="/docs" element={<Documentation />} />
        <Route path="*" element={<p>ERROR</p>} />
      </Routes>
    </Router>
    </>
  );
}
