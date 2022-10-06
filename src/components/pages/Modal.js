import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Join from "./Join";

//framer-motion practice
export const Modal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="root">
      {/* <button
        className="button"
        onClick={() => setIsModalOpen(!isModalOpen)}
      ></button> */}
      <AnimatePresence>
        {isModalOpen && (
          <div key="modal" className="modal">
            <motion.button
              // key="modal1"
              aria-label="Close modal"
              className="modal-overlay"
              onClick={() =>
                setIsModalOpen(
                  false,
                  navigate("/", { replace: true })
                )
              }
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: 0.15 }}
            >
              다음에 할래요!
            </motion.button>
            <motion.div
              key="modal2"
              className="modal-content"
              initial={{ opacity: 0, y: "50px" }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ opacity: 0.2, y: 0.3 }}
            >
              <div>
                <Join />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
