type Movie = {
    budget: number;
    genres: string[];
    id: number;
    overview: string;
    poster_path: string;
    release_date: string;
    revenue: number;
    runtime: string | number;
    tagline: string;
    title: string;
    vote_average: number;
    vote_count: number;
}

type AddMovie = {
    title: string;
    release_date: string;
    poster_path: string;
    overview: string;
    runtime: string | number;
    genres: string[];
    vote_average: number;
}

type EditMovie = {
    id: string, 
    title: string, 
    release_date: string, 
    poster_path: string, 
    genres: string[], 
    overview: string, 
    runtime: number
}

type Genre = { label: string, value: string }

type MoviesState = {
    movies: Movie[],
    filteredMovies: Movie[],
    modal: boolean | string,
    isMovieOpened: boolean,
    movieOpened: Movie | null
}

type MoviesAction = {
    type: string,
    movies: Movie[],
    filteredMovies: Movie[],
    modal: boolean | string,
    isMovieOpened: boolean,
    movieOpened: Movie | null,
    movie: number,
    sortedMovies: Movie,
    modalType: string,
    editedMovie: Movie
}

type FilterAndSortState = {
    activeFilter: string,
    sortType: string
}

type FilterAndSortAction = {
    type: string,
    activeFilter: string,
    sortType: string
}

type AllState = { movies: MoviesState; filterAndSort: FilterAndSortState }

type InputType = React.ChangeEvent<HTMLInputElement>

type ButtonType = React.MouseEvent<HTMLButtonElement>
