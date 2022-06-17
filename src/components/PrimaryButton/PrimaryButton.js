import * as React from "react"
import {
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
  Animated,
  ActivityIndicator,
  View,
  ImageStyle,
  Image,
} from "react-native"
import styles from "./PrimaryButtonStyle"


const PrimaryButton = (props) => {
  const showLoaderAndTitle = () => {
    const Bold = props => (
      <Text allowFontScaling={false} style={styles.boldText}>
        {props.children}
      </Text>
    )

    if (props.loading) {
      return <ActivityIndicator style={styles.loader} color={props.loaderColor ? props.loaderColor : 'blue'} />
    }

    return (
      <View
        style={styles.titleContainer}
        accessible={true}
        accessibilityLabel={props.title}
        accessibilityRole={"button"}
      >
        {props.icon && (
          <Image style={[styles.icon, props.iconStyle]} source={props.icon} />
        )}
        <Text allowFontScaling={false} style={[styles.buttonTitle, props.titleStyle]}>
          {props.title} <Bold>{props.boldTitle} </Bold>
        </Text>
      </View>
    )
  }
  return (
    <TouchableOpacity
   
      activeOpacity={0.7}
      style={[styles.container, props.style, { backgroundColor: props.color ? props.color : '#888' }]}
      onPress={props.onPress}
    >
      {showLoaderAndTitle()}
    </TouchableOpacity>
  )
}

export default PrimaryButton
