import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import ReviewsAccordion from "../components/ReviewsAccordion"
import SingleMovieCard from "../components/SingleMovieCard"
import AddReviewForm from "../components/AddReviewForm"

export default function SingleMoviePage() {

    const navigate = useNavigate()
    const [movie, setMovie] = useState()
    const [formData, setFormData] = useState({
        name: "",
        text: "",
        vote: 1
    })
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

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`${singleMovieUrl}/reviews`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        })
            .then(res => res.json())
            .then(data => {

                if (data.error) {
                    console.error("failed to fetch data")
                    return
                }

                setMovie(prevState => ({
                    ...prevState,
                    reviews: [...prevState.reviews, data.review]
                }))

                setFormData({
                    name: "",
                    text: "",
                    vote: 1,
                })
            })
            .catch(err => {
                console.error("Errore durante l'invio della recensione:", err)
            })
    }

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

                <AddReviewForm formData={formData} setFormData={setFormData} handleSubmit={handleSubmit} />
            </div>
        </>
    )
}