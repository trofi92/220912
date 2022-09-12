import { Sidebar } from "./Sidebar";

export const Layout = (props) => {
  return (
    <ul>
      {props.children}
      <Sidebar />
    </ul>
  );
};
