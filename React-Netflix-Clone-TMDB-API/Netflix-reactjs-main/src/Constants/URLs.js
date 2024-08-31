import { API_KEY } from "../Constants/Constance";
export const TopRated = `/movie/top_rated?api_key=${API_KEY}&language=pt-BR`;
export const originals = `discover/tv?api_key=${API_KEY}&with_networks=213&sort_by=popularity.desc&language=pt-BR`;
export const action = `discover/movie?api_key=${API_KEY}&with_genres=28&language=pt-BR`;
export const comedy = `discover/movie?api_key=${API_KEY}&with_genres=35&language=pt-BR`;
export const horror = `discover/movie?api_key=${API_KEY}&with_genres=27&language=pt-BR`;
export const Adventure = `discover/movie?api_key=${API_KEY}&with_genres=12&language=pt-BR`;
export const SciFi = `discover/movie?api_key=${API_KEY}&with_genres=878&language=pt-BR`;
export const Animated = `discover/movie?api_key=${API_KEY}&with_genres=16&language=pt-BR`;
export const War = `discover/movie?api_key=${API_KEY}&with_genres=10752&language=pt-BR`;
export const trending = `trending/all/week?api_key=${API_KEY}&sort_by=popularity.desc&language=pt-BR`;
export const trendingSeries = `/trending/tv/week?api_key=${API_KEY}&sort_by=popularity.desc&language=pt-BR`;
export const UpcomingMovies = `/movie/upcoming?api_key=${API_KEY}&language=pt-BR`;
