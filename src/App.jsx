import React, { useState, useEffect } from "react";
import "./styles/style.scss";
import Landing from "./pages/Landing";
import Stage from "./pages/Stage";

function App() {
  const [page, setPage] = useState(1);
  const [fade, setFade] = useState("fade-in");

  const handlePageChange = (newPage) => {
    setFade("fade-out");
    setTimeout(() => {
      setPage(newPage);
      setFade("fade-in");
    }, 500);
  };

  return (
    <div className={fade}>
      {page === 1 && <Landing onPageChange={() => handlePageChange(2)} />}
      {page === 2 && <Stage />}
    </div>
  );
}

export default App;
