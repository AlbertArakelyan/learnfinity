import AddEditLearningPathRelatedItemModal from './AddEditLearningPathRelatedItemModal';

import useAddEditLearningPathRelatedItemModalContainer from './useAddEditLearningPathRelatedItemModalContainer';

const AddEditLearningPathRelatedItemModalContainer = () => {
  const {
    register,
    control,
    errors,
    values,
    handleSubmit,
    handleFormSubmit,
    isLoadingCreateEditLearningPath,
    isEditingLearningPathItem,
  } = useAddEditLearningPathRelatedItemModalContainer();

  return (
    <AddEditLearningPathRelatedItemModal
      register={register}
      control={control}
      errors={errors}
      values={values}
      handleSubmit={handleSubmit}
      handleFormSubmit={handleFormSubmit}
      isLoadingCreateEditLearningPath={isLoadingCreateEditLearningPath}
      isEditingLearningPathItem={isEditingLearningPathItem}
    />
  );
};

export default AddEditLearningPathRelatedItemModalContainer;
