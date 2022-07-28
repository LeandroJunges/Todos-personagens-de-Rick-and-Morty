import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Characters from "./components/Characters";
import { GiPlayerNext, GiPlayerPrevious } from "react-icons/gi";

function App() {
  const [characterList, setCharacterList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((json) => setCharacterList(json.results));
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  return (
    <div className="App">
      <div className="container-cloud">
        <img
          className="img_cloud"
          src="https://e7.pngegg.com/pngimages/453/539/png-clipart-black-background-and-smoke-smoke-effect-smoke.png"
          alt=""
        />
      </div>
      <div>
        <Characters characterList={characterList} />
      </div>
      <div className="container-btn">
        <button className="btn-next" onClick={prevPage}>
          <GiPlayerPrevious />
        </button>
        <button className="btn-next" onClick={nextPage}>
          <GiPlayerNext />
        </button>
      </div>
    </div>
  );
}

export default App;
