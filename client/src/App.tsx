// React Imports
import { useRef, FC } from "react"

// Stylesheet Imports
import './App.css';

// Component imports
import Header from "./Components/tsx/Header"
import Main from './Components/tsx/Main';
import SideBar from './Components/tsx/SideBar';
import Display from './Components/tsx/Display';
import Footer from './Components/tsx/Footer';

function App() {
  const headerRef = useRef(null)
  const header: HTMLElement | null = document.querySelector("#header")
  const headerHeight: number | undefined = header?.clientHeight
  return (
    <div className="App">
      <Header/>
      <Main/>
      {/* <Footer/> */}

    </div>
  );
}

export default App;
