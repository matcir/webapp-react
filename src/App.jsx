import { BrowserRouter, Routes, Route } from "react-router-dom"
import LayoutDefault from "./layouts/LayoutDefault"
import HomePage from "./pages/HomePage"
import MoviesPage from "./pages/MoviesPage"
import { DataProvider } from "./contexts/DataContext"

export default function App() {


  return (
    <>
      <DataProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<LayoutDefault />}>
              <Route path="/" element={<HomePage />} />
              <Route path="/movies" element={<MoviesPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </DataProvider>
    </>
  )
}
