import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { Auth, VerifyEmail, ForgotPassword, ResetPassword, LearningPaths, LearningPath, Name } from 'pages';

import { BaseLayout, AuthLayout, LearningPathsLayout, ProfileLayout } from 'components';

import { IAppProps } from './types';

const App: FC<IAppProps> = ({ theme, isUserAuth }) => {
  return (
    <div className={`App ${theme}`}>
      <Routes>
        {isUserAuth ? (
          <Route element={<BaseLayout />}>
            <Route path="/learning-paths" element={<LearningPathsLayout />}>
              <Route path="/learning-paths" element={<LearningPaths />} />
              <Route path="/learning-paths/shared" element={<LearningPaths />} />
              <Route path="/learning-paths/public" element={<LearningPaths />} />
              <Route path="/learning-paths/:learningPathId" element={<LearningPath />} />
            </Route>
            <Route path="/profile" element={<ProfileLayout />}>
              <Route path="/profile/name" element={<Name />} />
              <Route path="/profile/avatar" element={<div>avatar</div>} />
              <Route path="/profile/password" element={<div>password</div>} />
              <Route path="/profile/delete" element={<div>delete</div>} />
            </Route>
            <Route path="/*" element={<Navigate to="/learning-paths" replace />} />
          </Route>
        ) : (
          <Route element={<AuthLayout />}>
            <Route path="/auth" element={<Auth />} />
            <Route path="/verify/:token" element={<VerifyEmail />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password/:resetToken" element={<ResetPassword />} />
            <Route path="/*" element={<Navigate to="/auth" replace />} />
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
