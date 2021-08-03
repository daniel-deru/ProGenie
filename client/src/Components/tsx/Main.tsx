import { useEffect } from "react"

import "../css/Main.css"

// Import Components
import SideBar from "./SideBar"
import Display from "./Display"
import Footer from "./Footer"

const Main = () => {

    return (
        <div id="main" >
                <SideBar/>
                <Display/>
        </div>
    )
}

export default Main
