import {all, call, fork} from 'redux-saga/effects';
import callHome from '../store/saga';


function* rootSaga() {
  yield all([
    callHome(),
   

  ]);
}
export default rootSaga;
