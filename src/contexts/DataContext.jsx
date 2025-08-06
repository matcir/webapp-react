import { createContext, useState, useEffect, useContext } from "react";
import { useLoader } from "./LoaderContext";

const DataContext = createContext()

function DataProvider({ children }) {
    const moviesUrl = "http://localhost:3000/api/movies"
    const { setLoading } = useLoader()
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


    return (
        <DataContext.Provider
            value={{
                movies,
                setMovies,
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