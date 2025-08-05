import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReviewsAccordion from "../components/ReviewsAccordion"
import SingleMovieCard from "../components/SingleMovieCard"

export default function SingleMoviePage() {

    const navigate = useNavigate()
    const [movie, setMovie] = useState()
    const { id } = useParams()
    const singleMovieUrl = `http://localhost:3000/api/movies/${id}`

    useEffect(() => {
        fetch(singleMovieUrl)
            .then(res => res.json())
            .then(data => {

                if (data.error) {
                    if (data.message === "Not found") {
                        return navigate("/not-found")
                    }
                }
                setMovie(data)
            })
    }, [singleMovieUrl])

    return (
        <>
            <div className="bg-info-subtle">
                {movie ? (
                    <>
                        <SingleMovieCard key={movie.id} movie={movie} />

                        <div className="container">
                            <div className="py-4 mt-3 accordion accordion-flush" id="accordionFlushExample">
                                {movie.reviews?.map(review => (
                                    <ReviewsAccordion key={review.id} review={review} />
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <p>Caricamento film...</p>
                )}
            </div>
        </>
    )
}