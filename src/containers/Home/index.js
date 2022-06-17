import React, { useState, useCallback, useEffect, useRef } from "react";
import {
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

//selectors
import {
    fetchGetHomeFailureSelector,
    fetchGetHomeDataSelector,
    fetchGetHomeLoadingSelector,
    fetchetDetailsLoadingSelector
  } from "../../store/selectors";
  import { getHomes, getDetails } from "../../store/actions";
  import Homes from "../../components/Home"
  import { useNavigation, useFocusEffect } from "@react-navigation/core";
import Loader from "../../components/loader/loader";
  //selectors data store
  const homeSel = createStructuredSelector({
    HomeData: fetchGetHomeDataSelector,
    HomeFailure: fetchGetHomeFailureSelector,
    HomeLoading: fetchGetHomeLoadingSelector,
    DetailsLoading:fetchetDetailsLoadingSelector
  });
const Home = (props) => {
     //navigation
  const navigation = useNavigation();
    // selector reducer
  const { HomeData, HomeFailure, HomeLoading ,DetailsLoading} = useSelector(homeSel);
   // dispatch
   const dispatch = useDispatch();
   // action call by callback fuction
   useFocusEffect(
     useCallback(() => {
       dispatch(getHomes.trigger());
     }, [])
   );
   useEffect(() => {

    if (HomeData) {
     console.log("HomeData",HomeData);
    }
    
  }, [HomeData]);
  return (
      <>
<Loader
loading={HomeLoading}
/>

    <FlatList
  data={HomeData}
  renderItem={ ({item}) => (
   <Homes
   LBRate={item.LBRate}
   LBVol={item.LBVol}
   LSVol={item.LSVol}
   LTVol={item.LTVol}
   ask={item.ask}
   baseCurrency={item.baseCurrency}
   baseCurrencyId={item.baseCurrencyId}
   bid={item.bid}
   c24={item.c24}
   c24p={item.c24p}
   loading={DetailsLoading}
   currToName={item.currToName}
   buttonTitle= {"View"}
   onPress={()=>{
       let payload  = item
    dispatch(getDetails.trigger(payload));  
   }}
   />
  )}
/>
</>
  )
}

export default Home