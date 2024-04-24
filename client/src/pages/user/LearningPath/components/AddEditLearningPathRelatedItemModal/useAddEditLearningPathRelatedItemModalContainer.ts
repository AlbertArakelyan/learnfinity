import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAppDispatch, useAppSelector } from 'store/index';

import {
  createUserLearningPathItem,
  editUserLearningPathItem,
  resetEditingLearningPathItem,
  selectEditingLearningPathItem,
  selectIsLoadingCreateEditLearningPath,
} from 'store/learningPath';

import { useQuery } from 'hooks';

import { learningPathItemSchema } from 'utils';

import { Queries } from 'constants/global';

import { ILearningPathItemData } from 'types';

const useAddEditLearningPathRelatedItemModalContainer = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const query = useQuery();

  const { learningPathId } = useParams();

  const isLoadingCreateEditLearningPath = useAppSelector(selectIsLoadingCreateEditLearningPath);
  const editLearningPathItem = useAppSelector(selectEditingLearningPathItem);

  const editLearningPathItemId = query.get(Queries.editLearningPathItemId);

  const isEditingLearningPathItem = !!editLearningPathItemId && !!editLearningPathItem;

  const {
    register,
    control,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<ILearningPathItemData>({
    resolver: yupResolver(learningPathItemSchema),
    defaultValues: {
      name: editLearningPathItemId && editLearningPathItem ? editLearningPathItem.name : '',
      description: editLearningPathItemId && editLearningPathItem ? editLearningPathItem.description : '',
      instructions: editLearningPathItemId && editLearningPathItem ? editLearningPathItem.instructions : '',
      type: editLearningPathItemId && editLearningPathItem ? editLearningPathItem.type : '',
      sourceUrl: editLearningPathItemId && editLearningPathItem ? editLearningPathItem.sourceUrl : '',
    },
  });

  const values = watch();

  const handleFormSubmit = (data: ILearningPathItemData) => {
    // TODO if useParams(:groupId) then dispatch another action for creating learning path in group

    if (learningPathId) {
      if (editLearningPathItemId && editLearningPathItem) {
        dispatch(
          editUserLearningPathItem({
            learningPathId: learningPathId,
            learningPathItemId: editLearningPathItemId,
            learningPathItemData: data,
          })
        ).then((res: any) => {
          if (!res.error) {
            closeModal();
          }
        });
      } else {
        dispatch(
          createUserLearningPathItem({
            learningPathId: learningPathId,
            data,
          })
        ).then((res: any) => {
          if (!res.error) {
            closeModal();
          }
        });
      }
    }
  };

  const closeModal = () => {
    navigate({ search: '' });
  };

  useEffect(() => {
    return () => {
      dispatch(resetEditingLearningPathItem());
    };
  }, []);

  return {
    register,
    control,
    errors,
    values,
    handleSubmit,
    handleFormSubmit,
    isLoadingCreateEditLearningPath,
    isEditingLearningPathItem,
  };
};

export type UseAddEditLearningPathRelatedItemModalContainerType = ReturnType<
  typeof useAddEditLearningPathRelatedItemModalContainer
>;

export default useAddEditLearningPathRelatedItemModalContainer;
