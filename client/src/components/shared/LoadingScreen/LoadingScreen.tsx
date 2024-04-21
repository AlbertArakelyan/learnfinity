import { FC } from 'react';

import { Loader } from 'components';

import { ILoadingScreenProps } from './types';

// eslint-disable-next-line
// @ts-ignore
const LoadingScreen: FC<ILoadingScreenProps> = ({ className = '', isLoading, loaderSize = 'normal', children }) => {
  return isLoading ? (
    <div className={`base-loading-screen ${className}`}>
      <Loader size={loaderSize} />
    </div>
  ) : (
    children
  );
};

export default LoadingScreen;
