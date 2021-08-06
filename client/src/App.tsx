// React Imports
import { useRef, FC } from "react"

// Stylesheet Imports
import './App.css';

// Component imports
import Header from "./Components/tsx/Header"
import Main from './Components/tsx/Main';
import Infobar from "./Components/tsx/Infobar";

function App() {
  const headerRef = useRef(null)
  const header: HTMLElement | null = document.querySelector("#header")
  const headerHeight: number | undefined = header?.clientHeight
  return (
    <div className="App">
      <Header/>
      <Infobar/>
      <Main/>
    </div>
  );
}

export default App;
