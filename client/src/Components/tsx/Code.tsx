import React, { useRef, useLayoutEffect, useEffect } from 'react'

import "../css/Code.css"


const Code = () => {
    const codeRef = useRef<any>(null)

    useEffect(() => {
        
    })

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
