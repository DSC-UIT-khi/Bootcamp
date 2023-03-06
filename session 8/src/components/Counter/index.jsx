const Counter = ({ counter, setCounter, incrementVal }) => {
  const handleIncrement = () => {
    setCounter((counter += incrementVal));
  };

  return (
    <div>
      <button onClick={handleIncrement}>Increment</button>
      <p>{counter}</p>
      <button onClick={() => setCounter((counter -= 1))}>Decrement</button>
    </div>
  );
};

export default Counter;
