import "./App.css";
import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import ProjectsPage from "./pages/ProjectsPage";


const SerramentoMainPage = lazy(() =>
  import("./pages/SerramentoMainPage")
);

function App() {
  return (
    <div className="font-lato">
      <Suspense
        fallback={
          <div className="bg-[#98B8DF] w-screen h-screen flex justify-center items-center text-[#FFFFFF] font-montserrat text-3xl">
            <FontAwesomeIcon icon={faSpinner} className="animate-spin mr-3" />
            Loading...
          </div>
        }
      >
        <Routes>
          <Route exact path="/" element={<SerramentoMainPage />} />
          <Route exact path="/projects" element={<ProjectsPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
