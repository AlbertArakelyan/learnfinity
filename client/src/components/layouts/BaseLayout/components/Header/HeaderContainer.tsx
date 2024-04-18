import Header from './Header';

import useHeaderContainer from './useHeaderContainer';

const HeaderContainer = () => {
  const { user } = useHeaderContainer();

  return <Header user={user} />;
};

export default HeaderContainer;
