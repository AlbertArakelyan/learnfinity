import CreateLearningPathModal from './CreateLearningPathModal';

import useCreateLearningPathModalContainer from './useCreateLearningPathModalContainer';

const CreateLearningPathModalContainer = () => {
  const { register, errors, handleSubmit, handleFormSubmit, control, getTagsInputValueArray, values } =
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
    />
  );
};

export default CreateLearningPathModalContainer;
