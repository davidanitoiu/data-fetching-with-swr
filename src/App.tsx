import React, { useState } from 'react';
import './App.css';
import Todos from './components/Todos/Todos';
import { useTodos } from './utils/utils';

function App() {
  const [input, setInput] = useState(0);
  const { data, loading, error } = useTodos(input);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setInput(Number(e.target.value));

  if (error) return <p>Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <div className="App">
      <input type="number" value={input} onChange={handleChange} />
      <Todos data={data} />
    </div>
  );
}

export default App;
