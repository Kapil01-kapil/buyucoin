

import { StyleSheet } from "react-native"
export default StyleSheet.create({
  container: {
 
  },
  titleContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    alignSelf: "flex-start",


  },
  
  inputStyle:{
    marginLeft: 12,
    marginRight: 12,
    borderBottomWidth: 1,
    paddingLeft:10,
    paddingRight:10,
    flexDirection:'row'
    
  },

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: '#00000040'
  },
  activityIndicatorWrapper: {
    // backgroundColor: "#FF5C22",
    height: 100,
    width: 100,
    borderRadius: 10,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around'
  }
})
