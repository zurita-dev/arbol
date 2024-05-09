import "./App.css";

function App() {
  const generateRow = (numZeros) => {
    const zeros = Array(numZeros).fill(0);
    return zeros;
  };

  const treeRows = [];

  treeRows.push(generateRow(1));
  treeRows.push(generateRow(2));

  for (let i = 3; i <= 10; i++) {
    const numZeros = 2 * (i - 1) - 1;
    treeRows.push(generateRow(numZeros));
  }

  return (
    <div>
      <h2>Christmas Tree</h2>
      <div style={{ whiteSpace: "pre" }}>
        {treeRows.map((row, index) => (
          <div key={index}>
            {row.map((element, i) => (
              <span key={i}>{element}</span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
