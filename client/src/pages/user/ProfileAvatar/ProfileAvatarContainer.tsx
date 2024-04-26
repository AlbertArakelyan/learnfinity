import ProfileAvatar from './ProfileAvatar';

import useProfileAvatarContainer from './useProfileAvatarContainer';

const ProfileAvatarContainer = () => {
  const { userPhotoUrl, handleImageChange, showingImage, isLoading } = useProfileAvatarContainer();

  return (
    <ProfileAvatar
      userPhotoUrl={userPhotoUrl}
      handleImageChange={handleImageChange}
      showingImage={showingImage}
      isLoading={isLoading}
    />
  );
};
export default ProfileAvatarContainer;
