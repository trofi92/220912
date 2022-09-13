import "./App.css";
import { Home } from "./components/Home";
import { DarkMode } from "./components/styled/DarkMode";
// import { Sidebar } from "./components/Sidebar";
export default function App() {
  return (
    <>
      <Home name="Home" />
      <DarkMode />
    </>
  );
}
