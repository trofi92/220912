import { Post } from "../pages/Post";

export const NewList = () => {
  function addCafeHandler(cafeData) {
    fetch(
      "https://udemy-react-course-ac235-default-rtdb.firebaseio.com/cafes.json",
      {
        method: "POST",
        body: JSON.stringify(cafeData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return (
    <section>
      <h1>Add New Meetup</h1>
      <Post onAddCafe={addCafeHandler} />
    </section>
  );
};
