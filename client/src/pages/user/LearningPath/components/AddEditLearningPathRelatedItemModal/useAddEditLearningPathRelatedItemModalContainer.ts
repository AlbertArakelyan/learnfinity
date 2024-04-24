import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { learningPathItemSchema } from 'utils';

import { ILearningPathItemData } from 'types';

const useAddEditLearningPathRelatedItemModalContainer = () => {
  const { learningPathId } = useParams();

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
    console.log(data);
  };

  return {
    register,
    control,
    errors,
    values,
    handleSubmit,
    handleFormSubmit,
  };
};

export type UseAddEditLearningPathRelatedItemModalContainerType = ReturnType<
  typeof useAddEditLearningPathRelatedItemModalContainer
>;

export default useAddEditLearningPathRelatedItemModalContainer;
