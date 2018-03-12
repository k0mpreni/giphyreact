
export const  saveFavorites = (favoritedGifs) => {
  localStorage.setItem("favorites", JSON.stringify(favoritedGifs));
};

export const loadFavorites = () => {
  const favoritesStr = localStorage.getItem("favorites");
  if (favoritesStr) {
    return JSON.parse(favoritesStr);
  }
  return [];
}

