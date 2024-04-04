import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div>
      auth layout
      <Outlet />
    </div>
  );
};

export default AuthLayout;
