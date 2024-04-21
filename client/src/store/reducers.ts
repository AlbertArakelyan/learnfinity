import uiReducer from './ui/ui.reducer';
import userReducer from './user/user.reducer';
import learningPathReducer from './learningPath/learningPath.reducer';

const reducers = {
  ui: uiReducer,
  user: userReducer,
  learningPath: learningPathReducer,
};

export default reducers;
