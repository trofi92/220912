import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "./Post.module.css";
import { Card } from "../Card";

export const Post = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const cafeData = {
      title: enteredTitle,
      image: enteredImage,
      address: enteredAddress,
      description: enteredDescription,
    };
    props.onAddCafe(cafeData);
  }
  return (
    <Card>
      <AnimatePresence>
        <motion.div
          key="Post1"
          className="smooth"
          initial={{ opacity: 0, y: "100px" }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ opacity: 0.2, y: 0.3 }}
        >
          <p className={styles.title}>Post</p>
          <p className={styles.subtitle}>Share your experience!</p>
        </motion.div>
        <div className={styles.wrapper}>
          <motion.div
            className="smooth"
            initial={{ opacity: 0, y: "100px" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ opacity: 0.2, y: 0.3 }}
          >
            <form className={styles.form} onSubmit={submitHandler}>
              <div className={styles.control}>
                <label htmlFor="title">Title</label>
                <input
                  type="text"
                  required
                  id="title"
                  ref={titleInputRef}
                />
              </div>
              <div className={styles.control}>
                <label htmlFor="image">Image</label>
                <input
                  type="url"
                  required
                  id="image"
                  ref={imageInputRef}
                />
              </div>
              <div className={styles.control}>
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  required
                  id="address"
                  ref={addressInputRef}
                />
              </div>
              <div className={styles.control}>
                <label htmlFor="description">Description</label>
                <textarea
                  id="decription"
                  required
                  rows="5"
                  ref={descriptionInputRef}
                ></textarea>
              </div>
              <div className={styles.actions}>
                <button>Add Cafe</button>
              </div>
            </form>
          </motion.div>
        </div>
      </AnimatePresence>
    </Card>
  );
};
