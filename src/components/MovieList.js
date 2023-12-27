import MovieCard from "./MovieCard"

const MovieList = ({title,movies}) => {

    return movies && (
        <div className="px-6 text-white">
            <h1 className="py-2 px-2 text-xl md:text-3xl">{title}</h1>
            <div className="flex overflow-x-scroll scrollbar-hide">
                <div className="flex">
                    {movies.map( movie => <MovieCard key={movie.id} posterPath={movie.poster_path}/> )}   
                </div>    
            </div>
        </div>
    )
}

export default MovieList
