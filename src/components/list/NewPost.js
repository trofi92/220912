import { Post } from "../pages/Post";
import { useNavigate } from "react-router-dom";

export const NewPost = () => {
  const navigate = useNavigate();
  function addCafeHandler(cafeData) {
    fetch(
      "https://udemy-react-course-ac235-default-rtdb.firebaseio.com/cafe.json",
      {
        method: "POST",
        body: JSON.stringify(cafeData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navigate("/");
    });
  }
  return (
    <section>
      <Post onAddCafe={addCafeHandler} />
    </section>
  );
};
