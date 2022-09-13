import { Sidebar } from "./Sidebar";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <Sidebar width={320}>
      <div>
        <nav>
          {/* Router 사용, title = component name */}
          <ul className={styles.menu}>
            <li>Home</li>
            <li>Posts</li>
            <li>Favorite</li>
            <li>Contact</li>
            <li>Logout(in progress)</li>
            {/* props이용해서 유저 로그인 상태 감지하기 */}
          </ul>
        </nav>
      </div>
    </Sidebar>
  );
};
