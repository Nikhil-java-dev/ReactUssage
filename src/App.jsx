
import Controlled1 from "./Topic-18 Controlled and Uncontrolled/Controlled1";
import Hybrid from "./Topic-18 Controlled and Uncontrolled/Hybrid";
import Uncontrolled1 from "./Topic-18 Controlled and Uncontrolled/Uncontrolled2";
import About from "./Topic-21 React Router Part-1/About";
import Header from "./Topic-21 React Router Part-1/Header";
import Home from "./Topic-21 React Router Part-1/Home";
import "./Topic-21 React Router Part-1/style.css";
import {Outlet} from "react-router-dom"

const App = () => {
  return (
    <div id="app-component">
      {/* <Header/>
      <main>
      <Outlet/>
      </main>        */}
    <Hybrid/>
    </div>
  )
}

export default App