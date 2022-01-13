import { useRef, useEffect } from 'react';
import './style.css';

export const IndicateBlock = () => {
  const counter = useRef(0);
  const refBox = useRef(null);

  console.log('render');

  useEffect(() => {
    console.log(refBox.current);
    console.dir(refBox.current);
    console.log(refBox.current.clientHeight);
    console.log(refBox.current.clientWidth);
  }, [refBox]);

  return (
    <div>
      <button
        type='button'
        onClick={() => {
          counter.current += 1;
          console.log('counter = ', counter.current);
        }}
      >
        click me!
      </button>

      <div className='box' ref={refBox}></div>
    </div>
  );
};
