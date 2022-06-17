import * as React from "react"
import { TouchableOpacity, Image, ViewStyle } from "react-native"
import styles from "./BackHeaderButtonStyle"
import { Images } from "../../themes"
import {useNavigation,} from '@react-navigation/core';

const BackHeaderButton = (props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={props.onPress ? props.onPress : () =>  navigation.goBack()}
      style={[styles.button, props.style]}
    >
      <Image source={ props.icon } />
    </TouchableOpacity>
  )
}

export default BackHeaderButton
