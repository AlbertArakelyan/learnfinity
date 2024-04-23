import { FC } from 'react';

// Components
import {
  Search,
  Terminal,
  UserAstronaut,
  Profile,
  Cogs,
  ChevronDown,
  Close,
  Folder,
  Delete,
  Edit,
  Chalkboard,
  UserGroup,
  ScrewdriverWrench,
  Logout,
  Lock,
  LaptopFile,
  Globe,
  Link,
  Plus,
} from './icons';

// Types
import { IIconProps } from './types';

export const icons = {
  search: Search,
  terminal: Terminal,
  'user-astronaut': UserAstronaut,
  profile: Profile,
  cogs: Cogs,
  'chevron-down': ChevronDown,
  close: Close,
  folder: Folder,
  delete: Delete,
  edit: Edit,
  chalkboard: Chalkboard,
  'user-group': UserGroup,
  'screwdriver-wrench': ScrewdriverWrench,
  logout: Logout,
  lock: Lock,
  'laptop-file': LaptopFile,
  globe: Globe,
  link: Link,
  plus: Plus,
};

const Icon: FC<IIconProps> = ({ name, ...props }) => {
  const IconComponent = icons[name];

  return <IconComponent {...props} />;
};

export default Icon;
