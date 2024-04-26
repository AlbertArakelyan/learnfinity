import React, { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from 'store/index';

import { changeAvatar, selectUserPhotoUrl, selectIsLoading } from 'store/user';

import { getImageBase64 } from 'helpers';

const useProfileAvatarContainer = () => {
  const dispatch = useAppDispatch();

  const userPhotoUrl = useAppSelector(selectUserPhotoUrl);
  const isLoading = useAppSelector(selectIsLoading);

  const [image, setImage] = useState<string | null>(null);
  const [showingImage, setShowingImage] = useState<string | null>(null);

  const handleImageChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files && event.target.files[0]) {
        const image = event.target.files[0];
        const imageFile = await getImageBase64(image);
        setImage(imageFile);
      }
    } catch (error: any) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (image) {
      dispatch(changeAvatar({ image })).then((res: any) => {
        if (!res.error) {
          setShowingImage(image);
        }
      });
    }
  }, [image]);

  return {
    userPhotoUrl,
    handleImageChange,
    showingImage,
    isLoading,
  };
};

export type UseProfileAvatarContainerType = ReturnType<typeof useProfileAvatarContainer>;

export default useProfileAvatarContainer;
