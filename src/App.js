import React, { useState, useEffect } from 'react'

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap"


import Filters from "./components/Filters/Filters";
import Cards from "./components/Cards/Cards";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';


function App() {
// Data Variables
  let [pageNum, updatePageNum] = useState(1);  
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setSearch] = useState("");
  // Break to send to the components info
  //    info -> pagination
  //    results -> cards
  let { info, results } = fetchedData; 
  
// Template URL to insert variables
  let api = `https://rickandmortyapi.com/api/character/?page=${pageNum}&name=${search}`;
  
  // When page is "request" this func runs and gets the data
  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <h1 className="text-center tahoma my-2"> Ricky & Morty</h1>
      <p className="text-center tahoma"> by <span className="text-primary">Lua Trevín</span></p>
      <h1 className="text-center mb-3">Characters</h1>
      <Search setSearch={setSearch} updatePageNum={updatePageNum} />
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <Cards results={results}/>
            </div>
          </div>
          </div>
        </div>
        <Pagination updatePageNum={updatePageNum}/>
      </div>
  );
}

export default App;
