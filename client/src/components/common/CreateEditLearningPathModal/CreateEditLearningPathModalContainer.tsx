import CreateEditLearningPathModal from './CreateEditLearningPathModal';

import useCreateEditLearningPathModalContainer from './useCreateEditLearningPathModalContainer';

const CreateEditLearningPathModalContainer = () => {
  const { register, errors, handleSubmit, handleFormSubmit, control, getTagsInputValueArray, values, isLoading } =
    useCreateEditLearningPathModalContainer();

  return (
    <CreateEditLearningPathModal
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

export default CreateEditLearningPathModalContainer;
