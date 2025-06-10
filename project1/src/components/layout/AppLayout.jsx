import { Outlet } from "react-router-dom"
import { Footers } from "../Ui/Footers"
import { Headers } from "../Ui/Headers"

export const AppLayout = () => {
    return <>
        <Headers />
        <Outlet />
        <Footers />
    </>
}