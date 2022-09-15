import { useNavigate } from "react-router-dom";
import { Post } from "./Post";

export const PostPage = () => {
  const navgate = useNavigate();
  function addCafeHandler(cafeData) {
    fetch(
      "https://udemy-react-course-ac235-default-rtdb.firebaseio.com/meetups.json",
      {
        method: "POST",
        body: JSON.stringify(cafeData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then(() => {
      navgate.replace("/");
    });
  }
  return (
    <>
      <Post onAddCafe={addCafeHandler} />
    </>
  );
};
