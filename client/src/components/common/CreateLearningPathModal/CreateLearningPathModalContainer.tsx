import CreateLearningPathModal from './CreateLearningPathModal';

import useCreateLearningPathModalContainer from './useCreateLearningPathModalContainer';

const CreateLearningPathModalContainer = () => {
  const { register, errors, handleSubmit, handleFormSubmit, control, getTagsInputValueArray, values, isLoading } =
    useCreateLearningPathModalContainer();

  return (
    <CreateLearningPathModal
      register={register}
      errors={errors}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      control={control}
      getTagsInputValueArray={getTagsInputValueArray}
      values={values}
      isLoading={isLoading}
    />
  );
};

export default CreateLearningPathModalContainer;
