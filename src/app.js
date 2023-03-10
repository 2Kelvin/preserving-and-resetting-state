function Counter() {
  const [count, setCount] = React.useState(0);

  return (
    <div className="counter">
      <div className="count_div">{count}</div>
      <button onClick={() => setCount(count + 1)} className="button-87">
        + 1
      </button>
    </div>
  );
}

export default function App() {
  const [secondCounter, setSecondCounter] = React.useState(true);

  return (
    <div className="app">
      <Counter />
      {secondCounter && <Counter />}
      <label>
        <input
          type="checkbox"
          checked={secondCounter}
          onChange={() => setSecondCounter(!secondCounter)}
        />
        Render the second Counter
      </label>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
