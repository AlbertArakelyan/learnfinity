import { LearningPathItemOption } from './components';
import { Input, Select, Option, Button } from 'components';

import styles from './AddEditLearningPathRelatedItemModal.tsx.module.scss';

const AddEditLearningPathRelatedItemModal = () => {
  return (
    <form className={styles['add-edit-learning-path-related-item-modal']}>
      <Input label="Name" labelClassName={styles['add-edit-learning-path-related-item-modal__label']} />
      <Input label="Description" labelClassName={styles['add-edit-learning-path-related-item-modal__label']} />
      <Input label="Instructions" labelClassName={styles['add-edit-learning-path-related-item-modal__label']} />
      <Select selectedOption={null} onChange={(option) => console.log(option)} label="Type">
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
      <Input label="Resource Link" labelClassName={styles['add-edit-learning-path-related-item-modal__label']} />
      <Button className={styles['add-edit-learning-path-related-item-modal__button']}>Create</Button>
    </form>
  );
};

export default AddEditLearningPathRelatedItemModal;
