import Header from './Header';

import useHeaderContainer from './useHeaderContainer';

const HeaderContainer = () => {
  const { user, handleLogOut } = useHeaderContainer();

  return <Header user={user} handleLogOut={handleLogOut} />;
};

export default HeaderContainer;
