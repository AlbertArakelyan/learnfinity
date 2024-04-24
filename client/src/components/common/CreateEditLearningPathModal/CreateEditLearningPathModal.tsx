import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { Select, Option, Input, Textarea, Button } from 'components';

import { ICreateLearningPathModalProps } from './types';

import styles from './CreateEditLearningPathModal.module.scss';

const CreateEditLearningPathModal: FC<ICreateLearningPathModalProps> = ({
  register,
  errors,
  handleSubmit,
  handleFormSubmit,
  control,
  getTagsInputValueArray,
  values,
  isLoading,
  isEdit,
}) => {
  return (
    <form className={styles['create-learning-path-modal']} onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        labelClassName={styles['create-learning-path-modal__input-label']}
        label="Name"
        error={errors.name?.message}
        isDirty={!!values.name}
        {...register('name')}
      />
      <Textarea
        className={styles['create-learning-path-modal__textarea']}
        labelClassName={styles['create-learning-path-modal__input-label']}
        label="Description"
        error={errors.description?.message}
        isDirty={!!values.description}
        {...register('description')}
      />
      <Controller
        render={({ field: { value, onChange } }) => {
          return (
            <Select
              labelClassName={styles['create-learning-path-modal__input-label']}
              selectedOption={Number(value)}
              onChange={(option) => {
                onChange(Boolean(option));
              }}
              label="Is Private?"
              error={errors.isPrivate?.message}
            >
              <Option value={1}>Yes</Option>
              <Option value={0}>No</Option>
            </Select>
          );
        }}
        control={control}
        name="isPrivate"
      />
      <Controller
        render={({ field: { value, onChange } }) => {
          return (
            <Input
              labelClassName={styles['create-learning-path-modal__input-label']}
              label="Tags"
              error={errors.tags?.message}
              value={value?.join(', ')}
              onChange={(e) => {
                const tagsArray = getTagsInputValueArray(e.target.value);
                onChange(tagsArray);
              }}
            />
          );
        }}
        name="tags"
        control={control}
      />

      <Button className={styles['create-learning-path-modal__button']} isLoading={isLoading}>
        {isEdit ? 'Edit' : 'Create'}
      </Button>
    </form>
  );
};

export default CreateEditLearningPathModal;
