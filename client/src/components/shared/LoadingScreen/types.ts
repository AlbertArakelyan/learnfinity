import { PropsWithChildren } from 'react';

import { LoaderSizeType } from 'types';

export interface ILoadingScreenProps extends PropsWithChildren {
  className?: string;
  isLoading?: boolean;
  loaderSize?: LoaderSizeType;
}
