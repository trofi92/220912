import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home";
import { Layout } from "./components/Layout";
import { NewPost } from "./components/list/NewPost";
import { AllCafeList } from "./components/pages/AllCafeList";
import { Login } from "./components/Login";
import { Modal } from "./components/pages/Modal";
export default function App() {
  return (
    <>
      <Layout style={{ position: "absolute" }} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/post" element={<NewPost />} />
        <Route path="/cafe-list" element={<AllCafeList />} />
        <Route path="/join" element={<Modal />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}
//https://devnm.tistory.com/m/10 transition group
