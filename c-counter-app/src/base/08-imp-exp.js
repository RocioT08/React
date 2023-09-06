import heroes from "../data/heroes";

export const getHeroeById = (id) => heroes.find((hero) => hero.id === id);
export const getHeroesByOwner = (owner) =>
  heroes.filter((heroe) => heroe.owner === owner);
