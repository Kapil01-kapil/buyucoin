import {combineReducers} from 'redux';
import REDUCER_KEY from './reducerKeys';
import AppHome from '../store/reducers';

export default () =>
  combineReducers({
     [REDUCER_KEY.APP_HOME]: AppHome,
    
     
     
  });
