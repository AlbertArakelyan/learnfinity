import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'store/index';

import { createLearningPath, selectIsLoadingCreateLearningPath } from 'store/learningPath';

import { learningPathSchema } from 'utils';

import { ILearningPathCreateData, ILearningPathSendData } from 'types';

const useCreateEditLearningPathModalContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectIsLoadingCreateLearningPath);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<ILearningPathCreateData>({
    resolver: yupResolver(learningPathSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: ILearningPathCreateData) => {
    // TODO if useParams(:groupId) then dispatch another action for creating learning path in group
    const sendData: ILearningPathSendData = {
      ...data,
      groupId: null,
      isCreatedInGroup: false,
      sharedUserIds: [],
    };

    dispatch(createLearningPath(sendData)).then((res: any) => {
      if (!res.error) {
        navigate({
          search: '',
        });
      }
    });
  };

  const getTagsInputValueArray = (value: string) => {
    return value.split(',').map((tag) => tag.trim());
  };

  return {
    register,
    errors,
    handleSubmit,
    handleFormSubmit,
    control,
    getTagsInputValueArray,
    values,
    isLoading,
  };
};

export type UseCreateEditLearningPathModalContainerType = ReturnType<typeof useCreateEditLearningPathModalContainer>;

export default useCreateEditLearningPathModalContainer;
