import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { Home } from "./components/Home";
import { Post } from "./components/Post";
// import {
//   TransitionGroup,
//   CSSTransition,
// } from "react-transition-group";
import { Layout } from "./components/Layout";
export default function App() {
  // const location = useLocation();
  return (
    <>
      <Layout />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<Post />} />
      </Routes>
    </>
  );
}
//https://devnm.tistory.com/m/10
