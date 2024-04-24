import AddEditLearningPathRelatedItemModal from './AddEditLearningPathRelatedItemModal';

import useAddEditLearningPathRelatedItemModalContainer from './useAddEditLearningPathRelatedItemModalContainer';

const AddEditLearningPathRelatedItemModalContainer = () => {
  const { register, control, errors, values, handleSubmit, handleFormSubmit, isLoadingCreateEditLearningPath } =
    useAddEditLearningPathRelatedItemModalContainer();

  return (
    <AddEditLearningPathRelatedItemModal
      register={register}
      control={control}
      errors={errors}
      values={values}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      isLoadingCreateEditLearningPath={isLoadingCreateEditLearningPath}
    />
  );
};

export default AddEditLearningPathRelatedItemModalContainer;
