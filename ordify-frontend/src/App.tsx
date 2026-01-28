import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>🚀 Ordify Frontend is Running</h1>

      <p>
        If you can see this page, your React + Vite + TypeScript setup
        is working correctly.
      </p>

      <hr />

      <h3>Demo Interaction</h3>

      <p>Button clicked: <strong>{count}</strong> times</p>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "10px 16px",
          fontSize: "16px",
          cursor: "pointer",
        }}
      >
        Click Me
      </button>

      <hr />

      <p>Use <code>/demo</code> to view the demo page.</p>

      <small>
        Backend can run separately on <code>localhost:8080</code>
      </small>
    </div>
  );
}

export default App;
