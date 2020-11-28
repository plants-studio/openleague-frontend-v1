import { combineReducers } from 'redux';
import counter from './counter';
import user from './userReducer';

const rootReducer = combineReducers({
  counter,
  user, // 여기에 리듀서들을 추가하세요!
});

export default rootReducer;

// 추후 컨테이너 컴포넌트를 만들게 될 때
// 스토어에서 관리하고 있는 상태를 조회하기 위해서
// useSelector를 사용 할 때 필요로 함
export type RootState = ReturnType<typeof rootReducer>;
