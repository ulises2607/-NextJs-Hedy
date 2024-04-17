'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const SearchComponent = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [searched, setSearched] = useState(false); // Estado para controlar si se ha realizado una búsqueda

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async () => {
    setSearched(true); // Marca que se ha realizado una búsqueda

    if (query.trim() === '') {
      setResults([]); // Si la consulta está vacía, restablece los resultados
      return;
    }

    const url = `https://jsearch.p.rapidapi.com/search?query=${encodeURIComponent(query)}&page=1&num_pages=1`;
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '76c15d5592msh7d1dbb73e2120e1p167086jsn626178b77f95',
        'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
      }
    };

    try {
      const response = await fetch(url, options);
      const jobs = await response.json();
      setResults(jobs.data);
      console.log("API CONSULTADA");
      
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div>
        <Link href={"/"}>Back</Link>
      </div>
      <div className='flex justify-center'>
        <input
          type="text"
          value={query}
          placeholder="Search for jobs..."
          onChange={handleInputChange}
        />
        <button className='m-2 bg-gray-400 p-3 rounded-lg hover:bg-gray-300' onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className='flex m-20'>
        {searched && results.length === 0 ? (
          <p>Type the technology you are interested in</p>
        ) : (
          <ul>
            {results.map((result, index) => (
              <li key={index}>{result.job_title}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default SearchComponent;
