import { NavLink } from "react-router-dom"

export default function AppHeader() {
    return (
        <>
            <div className="bg-dark p-2">

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                    <NavLink className="navbar-brand" to="/">
                        MovieVerse
                    </NavLink>

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarContent"
                        aria-controls="navbarContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>

                    <div className="collapse navbar-collapse" id="navbarContent">
                        <ul className="navbar-nav ms-auto align-items-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/movies">
                                    Tutti i film
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <form className="d-flex">
                                    <input
                                        className="form-control form-control-sm"
                                        type="search"
                                        placeholder="Cerca"
                                        aria-label="Cerca"
                                    />
                                    <button className="btn btn-outline-primary btn-sm ms-2" type="submit">
                                        Cerca
                                    </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                </nav>

            </div>
        </>
    )
}