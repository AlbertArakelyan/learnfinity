import { FC } from 'react';

import { Icon } from 'components';

import { ILearningPathRelatedItemProps } from './types';

import styles from './LearningPathRelatedItem.module.scss';

const LearningPathRelatedItem: FC<ILearningPathRelatedItemProps> = ({
  name,
  description,
  instructions,
  type,
  sourceUrl,
  number = 1,
}) => {
  return (
    <li className={styles['learning-path__related-item']}>
      <h3 className={styles['learning-path__related-item-title']}>
        {number}. {name}
      </h3>
      <p className={styles['learning-path__related-item-description']}>{description}</p>
      <p className={styles['learning-path__related-item-instructions']}>
        <span className={styles['learning-path__related-item-instructions-text']}>Instructions: </span> {instructions}
      </p>
      <p className={styles['learning-path__related-item-type']}>
        <span className={styles['learning-path__related-item-type-text']}>Type: </span> {type}
      </p>
      <p className={styles['learning-path__related-item-link']}>
        <span className={styles['learning-path__related-item-link-text']}>
          <Icon
            className={styles['learning-path__related-item-link-icon']}
            name="link"
            width="1.25rem"
            height="1.25rem"
          />{' '}
          Resource Link:
        </span>
        <a className={styles['learning-path__related-item-link-value']} href={sourceUrl} target="_blank">
          {sourceUrl}
        </a>
      </p>
    </li>
  );
};

export default LearningPathRelatedItem;
