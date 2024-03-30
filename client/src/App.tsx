import { Routes, Route } from 'react-router-dom';

import { Button, Select, Option } from './components';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route>
          <Route
            path="/"
            element={
              <div>
                <Button>Love ya</Button>
                <Button isLoading>Love ya</Button>
                <Button btnColor="danger" variant="rounded">
                  Love ya
                </Button>
                <Select selectedOption={'test'} onChange={(val) => console.log(val)}>
                  <Option value="test">Love ya</Option>
                </Select>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
