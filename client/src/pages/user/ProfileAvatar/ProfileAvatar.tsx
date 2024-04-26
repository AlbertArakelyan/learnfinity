import { FC } from 'react';

import { Button, Avatar } from 'components';

import { IProfileAvatarProps } from './types';

import styles from './ProfileAvatar.module.scss';

const ProfileAvatar: FC<IProfileAvatarProps> = ({ userPhotoUrl, handleImageChange, showingImage, isLoading }) => {
  return (
    <div className={styles['profile-avatar']}>
      <div className={styles['profile-avatar__actions']}>
        <Button icon="arrow-up-from-bracket" isLoading={isLoading}>
          <label className={styles['profile-avatar__upload-label']} htmlFor="avatar-upload-input"></label>
          <input
            className={styles['profile-avatar__upload-input']}
            id="avatar-upload-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
          Upload Avatar
        </Button>
        <Button btnColor="danger" icon="x-mark">
          Delete Avatar
        </Button>
      </div>
      {userPhotoUrl && (
        <div className={styles['profile-avatar__image-wrapper']}>
          <Avatar className={styles['profile-avatar__image']} src={showingImage || userPhotoUrl} />
        </div>
      )}
    </div>
  );
};

export default ProfileAvatar;
