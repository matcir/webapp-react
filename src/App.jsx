import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutDefault from "./layouts/LayoutDefault"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import SingleMoviePage from "./pages/SingleMoviePage"
import { DataProvider } from "./contexts/DataContext"
import { LoaderProvider } from "./contexts/LoaderContext"

export default function App() {


  return (
    <>
      <LoaderProvider>
        <DataProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<LayoutDefault />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<SingleMoviePage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DataProvider>
      </LoaderProvider>
    </>
  )
}
