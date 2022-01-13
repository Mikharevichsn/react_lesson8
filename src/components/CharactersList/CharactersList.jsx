import React from 'react';
import { useRandomNumber } from '../../hooks/useRandomNumber';
import { useCharacters } from '../../hooks/useCharacters';

export const CharactersList = () => {
  const { value: random } = useRandomNumber(5);
  // const random = obj.value;
  // const { value: random } = obj;

  const { characters } = useCharacters();

  return (
    <div>
      Рандом число: {random}
      <ul>
        {characters.map((character) => (
          <li key={character.id}>{character.name}</li>
        ))}
      </ul>
    </div>
  );
};
