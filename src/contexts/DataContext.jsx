import { createContext, useState, useEffect, useContext } from "react";

const DataContext = createContext()

function DataProvider({ children }) {
    const moviesUrl = "http://localhost:3000/api/movies"
    const [loading, setLoading] = useState(true)
    const [movies, setMovies] = useState([])

    useEffect(() => {
        setLoading(true);
        fetch(moviesUrl)
            .then(res => res.json())
            .then(data => {
                setMovies(data)
                setLoading(false)
            })
            .catch(err => {
                alert("Si è verificato un errore durante il caricamento dei dati")
                setLoading(false)
            })
    }, [moviesUrl])


    if (loading) {
        return (
            <div className="text-center p-5">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading data...</span>
                </div>
            </div>
        )
    }


    return (
        <DataContext.Provider
            value={{
                movies,
                setMovies,
                loading,
                setLoading
            }}
        >
            {children}
        </DataContext.Provider>

    )
}

function useData() {
    const context = useContext(DataContext)
    return context;
}

export { DataProvider, useData }