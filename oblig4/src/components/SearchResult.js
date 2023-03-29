import React, { useState } from 'react';
import SearchResults from './SearchResults';

export default function SearchResult() {
  const [searchTerm, setSearchTerm] = useState('');

  //Kilde: https://levelup.gitconnected.com/how-to-search-filter-through-data-in-react-26f1545fe3a1
  //Funksjonen kalles inn når det blir lagt inn verdi i inputfeltet. target.value henter inn verdien og lager variabelen searchTerm. 
  const handleSearch = (e) => {
    let searchTerm = e.target.value.toLowerCase();
    setSearchTerm(searchTerm); //Render komponentet med den nye verdien
  };

  return (
    <>
      <div className="inputfelt">
        <input type="text" placeholder="Søk etter andre filmer" onChange={handleSearch} />
      </div>
      <SearchResults searchTerm={searchTerm} searchType="movie" />
    </>
  );
}
