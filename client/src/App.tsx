import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route path="/" element={<div>Home</div>} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
