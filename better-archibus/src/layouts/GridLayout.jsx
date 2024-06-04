import Grid from "../components/Grid"
import {Outlet} from 'react-router'

export default function GridLayout() {
    return (
        <>
            <Grid/>
            <Outlet/>
        </>
    )
}