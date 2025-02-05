import { useState } from "react";

function useFadeTransition(initialPage = 1) {
  const [page, setPage] = useState(initialPage);
  const [fadeClassName, setFadeClassName] = useState("fade-in");

  const handlePageChange = (newPage) => {
    setFadeClassName("fade-out");
    setTimeout(() => {
      setPage(newPage);
      setFadeClassName("fade-in");
    }, 500);
  };

  return { page, fadeClassName, handlePageChange };
}

export default useFadeTransition;
