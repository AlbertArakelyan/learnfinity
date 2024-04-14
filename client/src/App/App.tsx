import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Auth, VerifyEmail, ForgotPassword, ResetPassword, LearningPaths } from 'pages';

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
            <Route path="/verify/:token" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
          </Route>
        )}
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
};

export default App;
