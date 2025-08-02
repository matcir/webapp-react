import { useData } from "../contexts/DataContext"
import MoviesCard from "../components/MoviesCard";

export default function () {

    const { loading, movies } = useData();

    return (
        <>
            <div className="bg-info-subtle">
                <h1 className="p-3 mb-3">Movies</h1>
                <div className="container">
                    <div className="py-5 row row-cols-1 row-cols-md-4 g-3">
                        {movies?.map(movie => (
                            <MoviesCard key={movie.id} movie={movie} />
                        ))}
                    </div>
                </div>
            </div>

        </>
    )
}