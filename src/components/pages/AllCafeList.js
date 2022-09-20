import { List } from "../list/List";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./AllCafeList.module.css";

export const AllCafeList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCafes, setLoadedCafes] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://udemy-react-course-ac235-default-rtdb.firebaseio.com/cafe.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const cafes = [];

        for (const key in data) {
          const cafe = {
            id: key,
            ...data[key],
          };
          cafes.push(cafe);
        }
        setIsLoading(false);
        setLoadedCafes(cafes);
      });
  }, []);

  /**json = promise를 반환 =>return해준 후 따로 출력해줘야함 */
  /**@params useState 사용 이유 = promise 체인에 올라가 있는 힘수 전체에
   * async, await를 사용하게 되면 함수 전체가 promise를 반환하게 되므로
   * 유효한 React 컴포넌트로 받아들여지지 않음.(JSX를 반환하지 않게되므로) */

  if (isLoading) {
    return (
      <AnimatePresence>
        <motion.div
          key="list1"
          className="smooth"
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: 0.2, y: 0.3 }}
        >
          <section>
            <p>Loading...</p>
          </section>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <AnimatePresence>
      <motion.div
        key="list1"
        className="smooth"
        initial={{ opacity: 0, y: "100px" }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ opacity: 0.2, y: 0.3 }}
      >
        <section className={styles.header}>
          <h1>Cafe(s)</h1>
          <p>What's New?</p>
        </section>

        <List cafes={loadedCafes} />
      </motion.div>
    </AnimatePresence>
  );
};
