import { Outlet } from 'react-router-dom';

const BaseLayout = () => {
  return (
    <div>
      base layout
      <Outlet />
    </div>
  );
};

export default BaseLayout;
