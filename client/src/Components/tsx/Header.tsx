
// React Imports
import React, { ReactElement, useState } from 'react'
import "../css/Header.css"

// Node Imports
import { FaBars, FaTimes } from "react-icons/fa"

const Header = () => {
    const [modesContainerActive, setModesContainerActive] = useState(false)
    const [menuContainerActive, setMenuContainerActive] = useState(false)
    const [difficultyContainerActive, setDifficultyContainerActive] = useState(false)
    const [difficulty, setDifficulty] = useState("Difficulty")
    const [themeContainerActive, setThemeContainerActive] = useState(false)
    const [theme, setTheme] = useState("Theme")
    const [modeState, setModeState] = useState("mode")

    const displayMode = (e: any) => {
        setModesContainerActive(!modesContainerActive)
        console.log(e.target.innerText)
        setModeState(e.target.innerText)
    }

    // enum Modes {
    //     Challenge = "Challenge",
    //     Creative = "Creative"
    // }
    const displayTheme = (e: any) => {
        setThemeContainerActive(!themeContainerActive)
        setTheme(e.target.innerText)
    }
    const displayDifficulty = (e: any) => {
        setDifficultyContainerActive(!difficultyContainerActive)
        setDifficulty(e.target.innerText)
    }

    

    const showChallenge = (): ReactElement | void =>  {
        const themeList = ["Animals", "Nature", "Numbers", "Games", "Space", "Random"]
        const levelList = [1, 2, 3, 4, 5, "Random"]
        if(modeState === "Challenge"){
            return  <div id="header-middle-container">
                        <div id="difficulty-container">
                            <div onClick={() => setDifficultyContainerActive(!difficultyContainerActive)}>
                                {/* <span>Difficulty</span> */}
                                <span>{difficulty}</span>
                            </div>
                            <ul className={difficultyContainerActive ? "difficulty-container-open" : "difficulty-container-closed"}>
                                {levelList.map((level: string | number) => {
                                    if(level !== "Random"){
                                        return  <li onClick={(e) => displayDifficulty(e)}>
                                                    Level {level}
                                                </li>
                                    }
                                    else {
                                        return  <li onClick={(e) => displayDifficulty(e)}>
                                                    {level}
                                                </li>
                                    }
                                    
                                })}
                            </ul>
                        </div>
                        <div id="theme-container">
                            <div onClick={() => setThemeContainerActive(!themeContainerActive)}>
                                {/* <span>Theme</span> */}
                                <span>{theme}</span>
                            </div>
                            <ul className={ themeContainerActive ? "theme-container-open" : "theme-container-closed"}>
                                {themeList.map((theme: string) => {
                                    return  <li onClick={(e) => displayTheme(e)}>
                                                {theme}
                                            </li>
                                })}
                            </ul>
                        </div>
                    </div>
        } 
      
    }
    return (
        <div id="header">
            <div id="header-left-container">
                <h1 id="header-name">
                    <span id="name-pro">Pro</span>
                    <span id="name-genie">Genie</span>
                </h1>
                <div id="mode-container" >
                    <div onClick={() => setModesContainerActive(!modesContainerActive)}>{modeState}</div>
                    <ul className={ modesContainerActive ? "modes-container-open" : "modes-container-closed"}>
                        <li onClick={(e) => displayMode(e)}>Creative</li>
                        <li onClick={(e) => displayMode(e)}>Challenge</li>
                    </ul>
                </div>
            </div>

            {showChallenge()}
            
            <div id="header-right-container">
                <div id="menu-container">
                    <span onClick={() => { setMenuContainerActive(!menuContainerActive) }}>
                        {menuContainerActive ? <FaTimes className="menu-icon times"/> : <FaBars className="menu-icon bars" />}
                    </span>
                   
                    <ul className={ menuContainerActive ? "menu-container-open" : "menu-container-closed"}>
                        <li onClick={() => { setMenuContainerActive(!menuContainerActive) }}>Profile</li>
                        <li onClick={() => { setMenuContainerActive(!menuContainerActive) }}>Settings</li>
                        <li onClick={() => { setMenuContainerActive(!menuContainerActive) }}>Logout</li>
                        <li onClick={() => { setMenuContainerActive(!menuContainerActive) }}>Help</li>
                    </ul>
                </div>
            </div>
            

        </div>
    )
}

export default Header
