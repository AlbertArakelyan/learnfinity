import CreateEditLearningPathModal from './CreateEditLearningPathModal';

import useCreateEditLearningPathModalContainer from './useCreateEditLearningPathModalContainer';

const CreateEditLearningPathModalContainer = () => {
  const {
    register,
    errors,
    handleSubmit,
    handleFormSubmit,
    control,
    getTagsInputValueArray,
    values,
    isLoading,
    isEdit,
  } = useCreateEditLearningPathModalContainer();

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
      isEdit={isEdit}
    />
  );
};

export default CreateEditLearningPathModalContainer;
