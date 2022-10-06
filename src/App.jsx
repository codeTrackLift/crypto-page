import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CryptoList from './components/CryptoList';
import Pagination from './components/Pagination';

const urlApi = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`;

function App() {
  const [coinsData, setCoinsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(urlApi);
      setCoinsData(response.data);
    }
    fetchData()
  }, [])
  console.log(coinsData);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = coinsData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="App">
      <h1>Crypto Gallery</h1>
      <CryptoList coinsData={currentPosts} />
      <Pagination
        totalPosts={coinsData.length}
        postsPerPage={postsPerPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default App;
