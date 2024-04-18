import { AvatarSizeType } from 'types';

export interface IAvatarProps {
  src?: string | null;
  size?: AvatarSizeType;
  imageSize?: number;
  className?: string;
}
