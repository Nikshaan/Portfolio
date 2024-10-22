import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Clicks from "./pages/Clicks";
import ErrorPage from "./pages/ErrorPage";
import { useEffect, useState } from "react";
import PreLoader from "./components/PreLoader";
import "./App.css";

const App = () => {
  const [loader, upadateLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      upadateLoader(false);
    }, 10000);
  }, []);

  return (
    <>
      <PreLoader loader={loader} />
      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path='/Portfolio/' element={<Home />} />
        <Route path = "/projects" element = {<Projects />} />
        <Route path = "/clicks" element = {<Clicks />} />
        <Route path = "*" element = {<ErrorPage />} />
        </Routes>
    </>
  )
}

export default App