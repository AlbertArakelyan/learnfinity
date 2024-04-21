import { Select, Option, Input, Textarea, Button } from 'components';

import styles from './CreateLearningPathModal.module.scss';

const CreateLearningPathModal = () => {
  return (
    <form className={styles['create-learning-path-modal']}>
      <Input labelClassName={styles['create-learning-path-modal__input-label']} name="name" label="Name" />
      <Textarea
        className={styles['create-learning-path-modal__textarea']}
        labelClassName={styles['create-learning-path-modal__input-label']}
        name="description"
        label="Description"
      />
      <Select
        labelClassName={styles['create-learning-path-modal__input-label']}
        selectedOption={1}
        onChange={() => console.log('change')}
        label="Is Private?"
      >
        <Option value={1}>Yes</Option>
        <Option value={0}>No</Option>
      </Select>
      <Input labelClassName={styles['create-learning-path-modal__input-label']} name="tags" label="Tags" />
      <Button className={styles['create-learning-path-modal__button']}>Create</Button>
    </form>
  );
};

export default CreateLearningPathModal;
