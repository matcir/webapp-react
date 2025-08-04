import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import ReviewsAccordion from "../components/ReviewsAccordion"

export default function SingleMoviePage() {

    const [movie, setMovie] = useState()
    const { id } = useParams()
    const singleMovieUrl = `http://localhost:3000/api/movies/${id}`

    useEffect(() => {
        fetch(singleMovieUrl)
            .then(res => res.json())
            .then(data => {
                setMovie(data)
            })
    }, [singleMovieUrl])

    return (
        <>
            <div className="bg-info-subtle">
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

                    <button className="my-3 btn" style={{ backgroundColor: "#ff6b6b", color: "white" }}>Guarda ora</button>


                </div>

                <div className="container">
                    <div className=" py-4 mt-3 accordion accordion-flush" id="accordionFlushExample">
                        {movie?.reviews?.map(review => (
                            <ReviewsAccordion key={review.id} review={review} />
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}