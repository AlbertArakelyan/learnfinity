import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'store/index';

import { createUserLearningPathItem, selectIsLoadingCreateEditLearningPath } from 'store/learningPath';

import { learningPathItemSchema } from 'utils';

import { ILearningPathItemData } from 'types';

const useAddEditLearningPathRelatedItemModalContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { learningPathId } = useParams();

  const isLoadingCreateEditLearningPath = useAppSelector(selectIsLoadingCreateEditLearningPath);

  const {
    register,
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<ILearningPathItemData>({
    resolver: yupResolver(learningPathItemSchema),
  });

  const values = watch();

  const handleFormSubmit = (data: ILearningPathItemData) => {
    // TODO if useParams(:groupId) then dispatch another action for creating learning path in group

    if (learningPathId) {
      dispatch(
        createUserLearningPathItem({
          learningPathId: learningPathId,
          data,
        })
      ).then((res: any) => {
        if (!res.error) {
          navigate({ search: '' });
        }
      });
    }
  };

  return {
    register,
    control,
    errors,
    values,
    handleSubmit,
    handleFormSubmit,
    isLoadingCreateEditLearningPath,
  };
};

export type UseAddEditLearningPathRelatedItemModalContainerType = ReturnType<
  typeof useAddEditLearningPathRelatedItemModalContainer
>;

export default useAddEditLearningPathRelatedItemModalContainer;
