import { Link } from "react-router-dom"
export default function SingleMovieCard({ movie }) {
    return (
        <>
            <div className="col-3 container">
                <h3 className="p-3">{`Informazioni su: ${movie?.title}`}</h3>
                <div className="card">
                    <figure>
                        <img className="img-fluid card-img-top" src={movie?.image} alt="movie_img" />
                    </figure>
                    <div className="card-body">
                        <ul className="list-unstyled">
                            <li>Director: {movie?.director}</li>
                            <li>Genre: {movie?.genre}</li>
                            <li>Release date: {movie?.release_year}</li>
                            <li>Plot: {movie?.abstract}</li>
                        </ul>
                    </div>
                </div>

                <div className="d-flex justify-content-between">
                    <button className="my-3 btn" style={{ backgroundColor: "#ff6b6b", color: "white" }}>
                        Guarda ora
                    </button>
                    <button className="my-3 btn" style={{ backgroundColor: "#ff6b6b", color: "white" }}>
                        <Link className="text-decoration-none text-white" to="/movies">
                            Torna al catalogo
                        </Link>
                    </button>
                </div>


            </div>
        </>
    )
}