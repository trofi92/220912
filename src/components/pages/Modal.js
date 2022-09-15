import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

//framer-motion practice
export const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div className="root">
      <button
        className="button"
        onClick={() => setIsModalOpen(!isModalOpen)}
      >
        Open Modal
      </button>
      <AnimatePresence>
        {isModalOpen && (
          <div key="modal" className="modal">
            <motion.button
              // key="modal1"
              aria-label="Close modal"
              className="modal-overlay"
              onClick={() => setIsModalOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: 0.15 }}
            />
            <motion.div
              key="modal2"
              className="modal-content"
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: 0.2, y: 0.3 }}
            >
              <p>Login Form(WIP)</p>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
