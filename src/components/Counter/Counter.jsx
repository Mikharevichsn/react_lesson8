import { useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return {
        value: state.value + action.payload,
      };

    case 'decrement':
      return {
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export const Counter = () => {
  const [counterData, dispatch] = useReducer(reducer, { value: 7 });

  return (
    <div>
      <h1>Счетчик: {counterData.value}</h1>
      <button
        type='button'
        onClick={() => dispatch({ type: 'decrement', payload: 1 })}
      >
        -
      </button>
      <button
        type='button'
        onClick={() => dispatch({ type: 'increment', payload: 1 })}
      >
        +
      </button>
    </div>
  );
};
