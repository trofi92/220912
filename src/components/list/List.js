import { ListItem } from "./ListItem";
import styles from "./List.module.css";

export const List = (props) => {
  return (
    <ul className={styles.list}>
      {props.cafes.map((cafe) => (
        <ListItem
          key={cafe.id}
          id={cafe.id}
          image={cafe.image}
          title={cafe.title}
          address={cafe.address}
          description={cafe.description}
        />
      ))}
    </ul>
  );
};
