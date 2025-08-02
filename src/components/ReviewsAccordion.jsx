export default function ReviewsAccordion({ review }) {
    return (
        <>
            <div key={review.id} className="accordion-item mb-2">
                <h2 className="accordion-header" id={`flush-heading-${review.id}`}>
                    <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#flush-collapse-${review.id}`}
                        aria-expanded="true"
                        aria-controls={`flush-collapse-${review.id}`}
                    >
                        {`Recensione di ${review.name}`}
                    </button>
                </h2>
                <div
                    id={`flush-collapse-${review.id}`}
                    className="accordion-collapse collapse"
                    aria-labelledby={`flush-heading-${review.id}`}
                    data-bs-parent="#accordionFlushExample"
                >
                    <div className="accordion-body">
                        <p>{`${review.name} dice: "${review.text}"`}</p>
                        <span>Voto: {review.vote}</span>
                    </div>
                </div>
            </div>
        </>
    )
}