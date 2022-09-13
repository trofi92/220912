import styles from "./Home.module.css";
import { Layout } from "./Layout";

export const Home = (props) => {
  return (
    <>
      <Layout />
      <h1 className={styles.title}>
        <a href="#">{props.name}</a>
      </h1>

      <p className={styles.subtitle}>bitter, sweet</p>

      <div className={styles.box}>
        <span className={styles.span1}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span2}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span3}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span4}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1511920170033-f8396924c348?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=1400&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span5}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1482350325005-eda5e677279b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span6}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1534040385115-33dcb3acba5b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span7}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1508424757105-b6d5ad9329d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
              alt=""
            />
          </a>
        </span>
        <span className={styles.span8}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1453614512568-c4024d13c247?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60"
              alt=""
            />
          </a>
        </span>
        <span className={styles.span9}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1525480122447-64809d765ec4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span10}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1514066558159-fc8c737ef259?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span11}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1542372147193-a7aca54189cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span12}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1542372147193-a7aca54189cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjJ8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span13}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </a>
        </span>

        <span className={styles.span14}>
          <a href="#">
            <img
              src="https://images.unsplash.com/photo-1497636577773-f1231844b336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjV8fGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=1000&q=60"
              alt=""
            />
          </a>
        </span>
      </div>
    </>
  );
};
