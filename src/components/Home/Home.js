import React, {  useRef , useState, useEffect, useCallback} from 'react'
import { View, Text, FlatList, TouchableOpacity, Image, Touchable,  } from "react-native";
import styles from "./HomeStyle"

import { useDispatch, useSelector } from 'react-redux';


import PrimaryButton from "../PrimaryButton"
//mavigation 
import { useNavigation , useFocusEffect,} from '@react-navigation/core';



const HomeService = (props) => {
   //navigation
   const navigation = useNavigation();

    
   


    return (
        <View style={styles.container}>
            <View style={styles.serviceStyle}>
           

                    <View>
                        <Text style={styles.serviceTitle}>{props.LBRate}</Text>
                        <Text style={styles.digitalStyle}>{props.LBVol}</Text>
                        <Text style={styles.digitalStyle}>{props.LSRate}</Text>
                        <Text style={styles.digitalStyle}>{props.LSVol}</Text>
                        <Text style={styles.digitalStyle}>{props.LTVol}</Text>
                        <Text style={styles.digitalStyle}>{props.ask}</Text>
                        <Text style={styles.digitalStyle}>{props.baseCurrency}</Text>
                        <Text style={styles.digitalStyle}>{props.baseCurrencyId}</Text>
                        <Text style={styles.digitalStyle}>{props.bid}</Text>
                        <Text style={styles.digitalStyle}>{props.c24}</Text>
                        <Text style={styles.digitalStyle}>{props.c24p}</Text>
                        <Text style={styles.digitalStyle}>{props.currToName}</Text>
                        <Text style={styles.digitalStyle}>{props.h24}</Text>
                    </View>

                  

            
                        
                  
                    <PrimaryButton
          loading={props.loading}
          color={"#fff"}
          style={styles.buttonStyle}
          titleStyle={styles.buttonText}
          title={props.buttonTitle}
          onPress={props.onPress}
        />
            
            </View>

        </View>
    )
}

export default HomeService
