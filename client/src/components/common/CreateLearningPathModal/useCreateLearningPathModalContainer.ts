import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { learningPathSchema } from 'utils';

import { ILearningPathCreateData } from 'types';

const useCreateLearningPathModalContainer = () => {
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
    console.log(data);
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
  };
};

export type UseCreateLearningPathModalContainerType = ReturnType<typeof useCreateLearningPathModalContainer>;

export default useCreateLearningPathModalContainer;
