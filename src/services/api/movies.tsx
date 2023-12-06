import { getAll } from "../api";
export const getMovies = async () => {
	return getAll("movies");
};
