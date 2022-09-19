import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Layout } from "./components/Layout";
import { NewPost } from "./components/list/NewPost";

export default function App() {
  return (
    <>
      <Layout style={{ position: "absolute" }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
//https://devnm.tistory.com/m/10 transition group
