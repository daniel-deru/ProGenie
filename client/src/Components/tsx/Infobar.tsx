import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import { runActionCreator } from "../../store/store" 
import { State } from "../../store/redusers/mainReduser"

import "../css/Infobar.css"

const Infobar = () => {
    const [infobarHeight, setInfobarHeight] = useState(15)
    const dispatch = useDispatch()

    // const code = useSelector((state: State) => state.run_button)
    // console.log(code)
    
    const { runCode } = bindActionCreators(runActionCreator, dispatch)

    useEffect(() => {
        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", handle_event)
        })
    })

    function handle_event(e){
        let height = ((e.y / window.innerHeight) * 100) - 10
        if(height >= 15 && height <= 30){
            setInfobarHeight(height)
        }
        else if(height <= 15){
            setInfobarHeight(15)
        }
        else if(height >= 30){
            setInfobarHeight(30)
        }
    }

    const resizeFooter = () => {
        window.addEventListener("mousemove", handle_event)
    }
    return (
        <div id="footer" style={{height: `${infobarHeight}vh`}}>
            <button type="button" id="run-button" onClick={() => runCode("button clicked")}>run</button>
            <div id="footer-resize" onMouseDown={() => resizeFooter()}></div>
        </div>
    )
}

export default Infobar
