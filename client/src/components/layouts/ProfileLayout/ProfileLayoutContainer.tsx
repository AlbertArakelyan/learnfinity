import ProfileLayout from './ProfileLayout';

import useProfileLayoutContainer from './useProfileLayoutContainer';

const ProfileLayoutContainer = () => {
  const { user } = useProfileLayoutContainer();

  return <ProfileLayout user={user} />;
};

export default ProfileLayoutContainer;
