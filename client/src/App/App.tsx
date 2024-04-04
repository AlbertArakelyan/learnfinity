import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Auth, LearningPaths } from 'pages';

import { BaseLayout, AuthLayout } from 'components';

import { IAppProps } from './types';

const App: FC<IAppProps> = ({ theme, isUserAuth }) => {
  return (
    <div className={`App ${theme}`}>
      <Routes>
        {isUserAuth ? (
          <Route element={<BaseLayout />}>
            <Route path="/" element={<LearningPaths />} />
          </Route>
        ) : (
          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<Auth />} />
          </Route>
        )}
      </Routes>
    </div>
  );
};

export default App;
