import { Sidebar } from "./Sidebar";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";

export const Layout = (props) => {
  const isLoggedIn = true;
  function handlelogin(e) {
    console.log("clicked!");
    return isLoggedIn ? "??" : alert("회원만 열람 가능합니다");
  }

  return (
    <Sidebar width={320}>
      <div className={styles.menu}>
        <nav>
          <ul>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li>Home</li>
            </Link>
            <Link
              to="/post"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li onClick={handlelogin}>Post</li>
            </Link>
            <Link
              to="/cafe-list"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li onClick={handlelogin}>List</li>
            </Link>
            <Link
              to="<"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li onClick={handlelogin}>Favorite</li>
            </Link>
            <Link
              to="/"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <li onClick={handlelogin}>{props.name}</li>
            </Link>
            {/* props이용해서 유저 로그인 상태 감지하기, 로그인 일때 logout띄우기 */}
          </ul>
        </nav>
      </div>
    </Sidebar>
  );
};
