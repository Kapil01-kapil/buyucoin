import { createSelector } from 'reselect';

import { initialState } from './reducers';
import REDUCER_KEY from '../config/reducerKeys';

const selectLocationSubStore = (store) => store[REDUCER_KEY.APP_HOME] || initialState;






  const fetchGetHomeDataSelector = createSelector(selectLocationSubStore, (globalState) => {
   
    return globalState.getHomeData
  });
  
  const fetchGetHomeLoadingSelector = createSelector(selectLocationSubStore, (globalState) => {
    return globalState.getHomeLoading
  });
  const fetchGetHomeFailureSelector = createSelector(selectLocationSubStore, (globalState) => {
    return globalState.getHomeFailure
  });








  // Get all locations when user register first time

  const fetchetDetailsDataSelector = createSelector(selectLocationSubStore, (globalState) => {
    return globalState.getDetailsData
  });
  const fetchetDetailsLoadingSelector = createSelector(selectLocationSubStore, (globalState) => {
    return globalState.getDetailsLoadingLoading
  });
  const fetchetDetailsFailureSelector = createSelector(selectLocationSubStore, (globalState) => {
    return globalState.getDetailsDataFailure
  });




  export  {
    selectLocationSubStore,
   
    fetchGetHomeDataSelector,
    fetchGetHomeFailureSelector,
    fetchGetHomeLoadingSelector,




    // Get all details
    fetchetDetailsDataSelector,
    fetchetDetailsLoadingSelector,
    fetchetDetailsFailureSelector

   
 
    
  };
  