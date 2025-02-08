import React, { useState, useEffect } from "react";
import "./styles/style.scss";
import Landing from "./pages/Landing";
import Stage from "./pages/Stage";
import Final from "./pages/Final";
import useAppScale from './hooks/useAppScale'

function App() {

  useAppScale()

  const [page, setPage] = useState(2);
  const [fade, setFade] = useState("fade-in");

  const handlePageChange = (newPage) => {
    setFade("fade-out");
    setTimeout(() => {
      setPage(newPage);
      setFade("fade-in");
    }, 500);
  };

  return (
    <div className={`app ${fade}`}>
      {page === 1 && <Landing onPageChange={() => handlePageChange(2)} />}
      {page === 2 && <Stage onPageChange={() => handlePageChange(3)} />}
      {page === 3 && <Final />}
    </div>
  );
}

export default App;
