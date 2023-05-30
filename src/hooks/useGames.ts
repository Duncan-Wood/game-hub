import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: Platform }[]
    metacritic: number;
}

// add an optional array of dependencies that causes the component to rerender whenever the selectedGames parameter is passed
const useGames =(selectedGenre: Genre | null) => useData<Game>('/games', { params: { genres: selectedGenre?.id}}, [selectedGenre?.id])

export default useGames