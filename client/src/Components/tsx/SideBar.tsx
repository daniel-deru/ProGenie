import { useEffect, useState } from "react"

import "../css/SideBar.css"

const SideBar = () => {
    const [sidebarWidth, setSidebarWidth] = useState(10)

    useEffect(() => {
        
        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", event_function)
        })
    })
 
    const mouse_down = (event1) => {
        // console.log(event1)
        console.log("mouse-down")
        window.addEventListener("mousemove", event_function)
       
    }

    function event_function (e) {
        // let width = parseInt((e.x / document.body.offsetWidth * 100).toFixed(3), 10)
        let width = e.x / document.body.offsetWidth * 100
        if(width >= 10 && width <= 40){
            setSidebarWidth(width)
        } 
        else if(width >= 40) {
            setSidebarWidth(40)
        } 
        else if(width <= 10) {
            setSidebarWidth(10)
        }
    }


    // console.log("sidebar width: "+sidebarWidth)
    return (
        <div id="sidebar" style={{width: `${sidebarWidth}vw`}}>
            <div id="sidebar-resize" onMouseDown={(event1) => mouse_down(event1)}></div>
        </div>
    )
}

export default SideBar
