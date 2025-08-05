export default function AddReviewForm({ formData, setFormData, handleSubmit }) {
    return (
        <>
            <form className="container py-3" onSubmit={handleSubmit}>
                <div className="mb-2">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        name="name"
                        id="name"
                        aria-describedby="helpId"
                        placeholder="Inserisci il tuo nome"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="review" className="form-label">Recensione</label>
                    <input
                        type="text"
                        className="form-control"
                        name="review"
                        id="review"
                        aria-describedby="helpId"
                        placeholder="Inserisci la tua recensione"
                        value={formData.text}
                        onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="vote" className="form-label">Voto</label>
                    <input
                        type="number"
                        step="1"
                        min="1"
                        max="5"
                        className="form-control"
                        name="vote"
                        id="vote"
                        aria-describedby="helpId"
                        placeholder="Inserisci il tuo voto"
                        value={formData.vote}
                        onChange={(e) => setFormData({ ...formData, vote: Number(e.target.value) })}
                    />
                </div>

                <button type="submit" className="my-2 btn btn-primary">Submit</button>

            </form>

        </>
    )
}