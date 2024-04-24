import { FC } from 'react';
import { Controller } from 'react-hook-form';

import { LearningPathItemOption } from './components';
import { Input, Textarea, Select, Option, Button } from 'components';

import { IAddEditLearningPathRelatedItemModalProps } from './types';

import styles from './AddEditLearningPathRelatedItemModal.tsx.module.scss';

const AddEditLearningPathRelatedItemModal: FC<IAddEditLearningPathRelatedItemModalProps> = ({
  register,
  control,
  errors,
  values,
  handleSubmit,
  handleFormSubmit,
  isLoadingCreateEditLearningPath,
}) => {
  return (
    <form className={styles['add-edit-learning-path-related-item-modal']} onSubmit={handleSubmit(handleFormSubmit)}>
      <Input
        labelClassName={styles['add-edit-learning-path-related-item-modal__label']}
        label="Name"
        {...register('name')}
        error={errors.name?.message}
        isDirty={!!values.name}
      />
      <Textarea
        className={styles['add-edit-learning-path-related-item-modal__textarea']}
        labelClassName={styles['add-edit-learning-path-related-item-modal__label']}
        label="Description"
        {...register('description')}
        error={errors.description?.message}
        isDirty={!!values.description}
      />
      <Textarea
        className={styles['add-edit-learning-path-related-item-modal__textarea']}
        labelClassName={styles['add-edit-learning-path-related-item-modal__label']}
        label="Instructions"
        {...register('instructions')}
        error={errors.instructions?.message}
        isDirty={!!values.instructions}
      />
      <Controller
        render={({ field: { onChange, value } }) => {
          return (
            <Select
              labelClassName={styles['add-edit-learning-path-related-item-modal__label']}
              selectedOption={value}
              onChange={onChange}
              label="Type"
              error={errors.type?.message}
            >
              {/*TODO move Options to a constant and map over them in container*/}
              <Option value="Documentation">
                <LearningPathItemOption label="Documentation" icon="file-lines" />
              </Option>
              <Option value="Course">
                <LearningPathItemOption label="Course" icon="circle-play-solid" />
              </Option>
              <Option value="Crach Course">
                <LearningPathItemOption label="Crach Course" icon="circle-play" />
              </Option>
              <Option value="Video">
                <LearningPathItemOption label="Video" icon="youtube" />
              </Option>
              <Option value="Article">
                <LearningPathItemOption label="Article" icon="newspaper" />
              </Option>
              <Option value="Book">
                <LearningPathItemOption label="Book" icon="book" />
              </Option>
              <Option value="Podcast">
                <LearningPathItemOption label="Podcast" icon="microphone-lines" />
              </Option>
              <Option value="Other">
                <LearningPathItemOption label="Other" icon="ellipsis" />
              </Option>
            </Select>
          );
        }}
        name="type"
        control={control}
      />
      <Input
        labelClassName={styles['add-edit-learning-path-related-item-modal__label']}
        label="Resource Link"
        {...register('sourceUrl')}
        error={errors.sourceUrl?.message}
        isDirty={!!values.sourceUrl}
      />
      <Button
        className={styles['add-edit-learning-path-related-item-modal__button']}
        isLoading={isLoadingCreateEditLearningPath}
      >
        Create
      </Button>
    </form>
  );
};

export default AddEditLearningPathRelatedItemModal;
