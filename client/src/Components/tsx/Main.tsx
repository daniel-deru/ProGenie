import { useEffect } from "react"

import "../css/Main.css"

// Import Components
import Code from "./Code"
import Display from "./Display"

const Main = () => {
    return (
        <div id="main" >
            <Code/>
            <Display/>
        </div>
    )
}

export default Main
