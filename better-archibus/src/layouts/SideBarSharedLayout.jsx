import SideBar from "../components/SideBar"
import {Outlet} from 'react-router'

export default function SideBarSharedLayout() {
    return (
        <>
            <SideBar/>
            <Outlet/>
        </>
    )
}