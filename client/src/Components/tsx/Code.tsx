import React, { useRef, useLayoutEffect, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { State } from "../../store/redusers/mainReduser"
import "../css/Code.css"


const Code = () => {
    const codeRef = useRef<any>(null)

    useEffect(() => {
        
    })

    const signal = useSelector((state: State) => state.run_button)
    console.log(signal)

    const getCode = (e) => {
        // console.log(codeRef.current.textContent)
        console.log(e.target.value)
    }
    return (
        <div id="code" >
            {/* <div id="code-container" contentEditable={true} spellCheck={false} ref={codeRef} tabIndex={0} onChange={(e) => getCode(e)}>

            </div> */}
            <input type="text" onChange={(e) => getCode(e)} />
        </div>
    )
}

export default Code
