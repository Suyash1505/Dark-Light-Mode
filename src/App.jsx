import Header from "./header"
import MainContent from "./facts"
import { useState } from "react"

export default function App(){

    const [darkMode, setDarkMode] = useState(false);

    function toggleMode(){
        setDarkMode(prevMode => !prevMode)
    }

    return (
         <div className={`container ${darkMode ? "dark" : "light"}`}>
            <Header darkMode = {darkMode} toggleMode = {toggleMode} />
            <MainContent darkMode = {darkMode} />
        </div>
    )
}