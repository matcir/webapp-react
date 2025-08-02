export default function AppFooter() {
    return (
        <>
            <footer className="bg-dark text-white">
                <div className="container p-4">
                    <div className="row">

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">MovieVerse</h5>
                            <p>
                                Esplora i migliori film, scopri gemme nascoste e resta aggiornato con le ultime uscite.
                            </p>
                        </div>

                        <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">About</h5>
                            <ul className="list-unstyled">
                                <li><a href="/about" className="text-white text-decoration-none">About Us</a></li>
                                <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
                                <li><a href="/privacy" className="text-white text-decoration-none">Privacy Policy</a></li>
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                            <h5 className="text-uppercase">Seguici</h5>
                            <div className="d-flex gap-3 mt-2">
                                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white">
                                    <i className="bi bi-facebook"></i>
                                </a>
                                <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white">
                                    <i className="bi bi-twitter"></i>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white">
                                    <i className="bi bi-instagram"></i>
                                </a>
                                <a href="https://youtube.com" target="_blank" rel="noreferrer" className="text-white">
                                    <i className="bi bi-youtube"></i>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="text-center p-3 bg-secondary">
                    &copy; {new Date().getFullYear()} MovieVerse. All rights reserved.
                </div>
            </footer>
        </>
    )
}