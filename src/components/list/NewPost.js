import { Post } from "../pages/Post";
import { useNavigate } from "react-router-dom";

export const NewPost = () => {
  const navigate = useNavigate();
  function addCafeHandler(cafeData) {
    try {
      fetch(
        "https://react-cafe-app-project-default-rtdb.firebaseio.com/cafe.json",
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
    } catch (err) {
      console.log(err, "fuck that");
    }
  }
  return (
    <section>
      <Post onAddCafe={addCafeHandler} />
    </section>
  );
};
