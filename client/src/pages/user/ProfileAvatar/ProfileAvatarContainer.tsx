import ProfileAvatar from './ProfileAvatar';

import useProfileAvatarContainer from './useProfileAvatarContainer';

const ProfileAvatarContainer = () => {
  const { userPhotoUrl, handleImageChange, showingImage } = useProfileAvatarContainer();

  return (
    <ProfileAvatar userPhotoUrl={userPhotoUrl} handleImageChange={handleImageChange} showingImage={showingImage} />
  );
};
export default ProfileAvatarContainer;
