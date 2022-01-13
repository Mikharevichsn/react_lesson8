import { useState, useEffect } from 'react';

export const useCharacters = () => {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const data = await response.json();
    setCharacters(data.results);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return { characters };
};
