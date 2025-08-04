import { Link } from "react-router-dom"

export default function ({ movie }) {


    return (
        <>
            <div className="col">
                <Link to={`/movies/${movie?.id}`} className="card h-100 text-decoration-none">
                    <figure>
                        <img className="card-img-top img-fluid" src={movie.image} alt="img" />
                    </figure>
                    <div className="card-body">
                        <h4>{movie.title}</h4>
                        <h6>Plot</h6>
                        <p>{movie.abstract}</p>
                    </div>
                </Link>
            </div >
        </>
    )
}