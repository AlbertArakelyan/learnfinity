import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'store/index';

import {
  createLearningPath,
  selectIsLoadingCreateEditLearningPath,
  updateUserLearningPath,
  selectEntry,
} from 'store/learningPath';

import { Queries } from 'constants/global';

import { useQuery } from 'hooks';

import { learningPathSchema } from 'utils';

import { ILearningPathCreateData, ILearningPathSendData } from 'types';

const useCreateEditLearningPathModalContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const query = useQuery();

  const learningPath = useAppSelector(selectEntry);
  const isLoading = useAppSelector(selectIsLoadingCreateEditLearningPath);

  const editLearningPathId = query.get(Queries.editLearningPathId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
  } = useForm<ILearningPathCreateData>({
    resolver: yupResolver(learningPathSchema),
    defaultValues: {
      name: editLearningPathId && learningPath ? learningPath.name : '',
      description: editLearningPathId && learningPath ? learningPath.description : '',
      tags: editLearningPathId && learningPath ? learningPath.tags : [],
      isPrivate: editLearningPathId && learningPath ? learningPath.isPrivate : false,
    },
  });

  const values = watch();

  const isEdit = !!editLearningPathId && !!learningPath;

  const handleFormSubmit = (data: ILearningPathCreateData) => {
    // TODO if useParams(:groupId) then dispatch another action for creating learning path in group
    const sendData: ILearningPathSendData = {
      ...data,
      groupId: null,
      isCreatedInGroup: false,
      sharedUserIds: [],
    };

    if (editLearningPathId) {
      dispatch(updateUserLearningPath({ id: editLearningPathId, data: sendData })).then((res: any) => {
        if (!res.error) {
          closeModal();
        }
      });
    } else {
      dispatch(createLearningPath(sendData)).then((res: any) => {
        if (!res.error) {
          closeModal();
        }
      });
    }
  };

  const closeModal = () => {
    navigate({ search: '' });
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
    isEdit,
  };
};

export type UseCreateEditLearningPathModalContainerType = ReturnType<typeof useCreateEditLearningPathModalContainer>;

export default useCreateEditLearningPathModalContainer;
