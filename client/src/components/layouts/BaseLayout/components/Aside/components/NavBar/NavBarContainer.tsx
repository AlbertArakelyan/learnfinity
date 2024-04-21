import NavBar from './NavBar';
import { NavBarLink } from './components';

import useNavBarContainer from './useNavBarContainer';

import { navLinks } from 'constants/navLinks';

const NavBarContainer = () => {
  const { isCreateLearningPathModalOpen, handleCreateButtonClick, handleClose } = useNavBarContainer();

  const navLinksContent = navLinks.map((navLink) => {
    return (
      <NavBarLink
        key={navLink.href}
        href={navLink.href}
        label={navLink.label}
        icon={navLink.icon}
        isComingSoon={navLink.isComingSoon}
      />
    );
  });

  return (
    <NavBar
      navLinksContent={navLinksContent}
      isCreateLearningPathModalOpen={isCreateLearningPathModalOpen}
      handleCreateButtonClick={handleCreateButtonClick}
      handleClose={handleClose}
    />
  );
};

export default NavBarContainer;
