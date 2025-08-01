import { Outlet } from "react-router-dom"
import AppHeader from "../components/AppHeader"
import AppFooter from "../components/AppFooter"

export default function LayoutDefault() {

    return (
        <>
            <AppHeader />
            <Outlet />
            <AppFooter />
        </>
    )
}