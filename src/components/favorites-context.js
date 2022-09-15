import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favorite) => {},
  removeFavorite: (id) => {},
  itemIsFavorite: (id) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favorite) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.concat(favorite);
    });
  }
  function removeFavoriteHandler(id) {
    setUserFavorites((prevUserFavorites) => {
      return prevUserFavorites.filter((cafe) => cafe.id !== id);
    });
  }
  function itemIsFavoriteHandler(id) {
    return userFavorites.some((cafe) => cafe.id === id);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavoirte: itemIsFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
