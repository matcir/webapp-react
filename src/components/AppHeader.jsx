import { NavLink } from "react-router-dom"

export default function AppHeader() {
    return (
        <>
            <div className="bg-light p-2">

                <h1>Benvenuto sul tuo database di film</h1>

                <nav className="nav justify-content-center">
                    <NavLink className="nav-link" to="/">Home</NavLink>
                    <NavLink className="nav-link" to="/movies">Tutti i film</NavLink>
                </nav>

            </div>
        </>
    )
}