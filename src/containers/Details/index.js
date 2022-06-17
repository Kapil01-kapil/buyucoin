import React, { useState, useCallback, useEffect, useRef } from "react";
import {
    ScrollView,
    FlatList,
    Text,
    ImageBackground,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TextInput,
    NativeModules,
    RefreshControl,
    View,

} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { createStructuredSelector } from "reselect";

//selectors
import {
    fetchetDetailsDataSelector,
    fetchetDetailsFailureSelector
} from "../../store/selectors";
import Homes from "../../components/Home"
import { useNavigation, useFocusEffect } from "@react-navigation/core";
//selectors data store
const detailSel = createStructuredSelector({
    DetailsData: fetchetDetailsDataSelector,
    DetailsFailure: fetchetDetailsFailureSelector
});
const Details = () => {
         //navigation
  const navigation = useNavigation();
        // selector reducer
  const { DetailsData, DetailsFailure} = useSelector(detailSel);
  console.log("DetailsData",DetailsData);
    return (
        <View style={{flex:1, backgroundColor:'#fff'}}>
    {
       DetailsData.map((item)=>{
           return(
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
        currToName={item.currToName}
        buttonTitle= {"Back"}
        onPress={()=>{
            navigation.goBack()
        }}
        />)
       }) 
    }
        </View>
    )
}

export default Details