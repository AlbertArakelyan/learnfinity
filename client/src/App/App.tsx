import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Button, Select, Option } from '../components';

import { IAppProps } from './types';

const App: FC<IAppProps> = ({ theme }) => {
  return (
    <div className={`App ${theme}`}>
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
                <h1>Hello world</h1>
              </div>
            }
          />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
