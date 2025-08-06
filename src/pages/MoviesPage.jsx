import { useData } from "../contexts/DataContext"
import { useLoader } from "../contexts/LoaderContext";
import MoviesCard from "../components/MoviesCard";
import AppLoader from "../components/AppLoader";

export default function () {

    const { movies } = useData();
    const { loading } = useLoader();

    return (
        <>
            <div className="bg-info-subtle">
                <h1 className="p-3 mb-3">Movies</h1>
                <div className="container">
                    {loading ? (
                        <AppLoader />
                    ) : (
                        <div className="py-5 row row-cols-1 row-cols-md-4 g-3">
                            {movies?.map(movie => (
                                <MoviesCard key={movie.id} movie={movie} />
                            ))}
                        </div>
                    )}
                </div>
            </div>

        </>
    )
}