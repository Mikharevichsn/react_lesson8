import { useState, useEffect } from 'react';

export const useRandomNumber = (num) => {
  const [rnd, setRnd] = useState(0);

  useEffect(() => {
    setRnd(Math.round(Math.random() * 10 ** num));
  }, []);

  return {
    value: rnd,
  };
};
