import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { learningPathItemSchema } from 'utils';

import { ILearningPathItemData } from 'types';

const useAddEditLearningPathRelatedItemModalContainer = () => {
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
