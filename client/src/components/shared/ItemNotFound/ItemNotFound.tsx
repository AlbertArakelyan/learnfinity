import { FC } from 'react';

import { IItemNotFoundProps } from './types';

const ItemNotFound: FC<IItemNotFoundProps> = ({
  title = 'Item Not Found',
  description = "Either item doesn't exist either you don't have permission to access it.",
}) => {
  return (
    <div className="item__not-found">
      <h4 className="item__not-found-title">{title}</h4>
      <p className="item__not-found-description">{description}</p>
    </div>
  );
};

export default ItemNotFound;
