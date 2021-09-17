import axios from 'axios'

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const myApiKey = 'ba2cf18bbe1204a4fb037c7b17de7636';

const get = async (endpoint) => {
	const response = await axios.get(endpoint);
	return response.data;
};

// Takes in either 'now_playing', 'popular' or 'top_rated' as parameter
export const getMoviesByCategory = async (category) => {
	return await get(`/movie/${category}?api_key=${myApiKey}&language=en-US&region=US`);
};

// To get details of one movie with credits included, takes in movie id
export const getMovieById = async (id) => {
	return await get(`/movie/${id}?api_key=${myApiKey}&language=en-US&append_to_response=credits`);
};

// To get a list of the existing movie genres
export const getMovieGenres = async () => {
	return await get(`/genre/movie/list?api_key=${myApiKey}&language=en-US`);
};

// To get details of one actor, takes in person id
export const getActorById = async (id) => {
	return await get(`/person/${id}?api_key=${myApiKey}&language=en-US`);
};

// To get list of one actor's movie apparences, takes in actor id
export const getActorMovies = async (actorId) => {
	return await get(`/discover/movie?api_key=${myApiKey}&language=en-US&with_cast=${actorId}`);
};

// To get list of movies within a specific genre on a specific page, takes in genre id and page number
export const getMoviesByGenre = async (genreId, page) => {
	return await get(`/discover/movie?api_key=${myApiKey}&language=en-US&with_genres=${genreId}&page=${page}`);
};

export default {
	getMoviesByCategory,
	getMovieGenres,
	getMovieById,
	getActorById,
	getActorMovies,
	getMoviesByGenre
}