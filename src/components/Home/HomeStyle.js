import { StyleSheet, Dimensions } from "react-native"


export default StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    flexDirection: 'row',
  },
  serviceStyle: {
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor:  "#fff",
    padding: 15,
    paddingRight: 20,
    paddingLeft: 20,
    borderRadius: 10,
    margin: 20,
    width: "88%",
  },
  buttonStyle: {
    marginTop: 20,
    marginHorizontal:5,
    
    borderColor:"blue",
    
    width:"80%",
    
    borderWidth:1
},
buttonText: {
    color: "blue" 
  },
  imageContainer: {
    marginTop: 20,
    marginRight: 10,
    borderColor: "#888",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    height:90,
    justifyContent:'center',
    width:94
  },
  servicesImage:{
 height:90,
 width:90,
  alignSelf:'center'
  },
  // serviceView:{
  //   flexDirection: 'row', 
  // },
  serviceTitle: {
     fontSize: 15
  },
  digitalStyle: {
 fontSize: 13
  },

  parkingTitle: {
    color: "blue", fontSize: 15
  },
  vehicleButton: {
    borderWidth: 1, borderRadius: 8, borderColor: "blue",  width: '45%', padding: 10, marginTop: 20
  },
  vehicleTitle: {
 fontSize: 15, textAlign: 'center'
  },
  passView: {
    flexDirection: 'row', justifyContent: 'space-between'
  },
  passButton: {
    borderWidth: 1, borderRadius: 8, borderColor:"blue", width: '45%', padding: 10, marginTop: 20
  },
  passTitle: {
color:"blue", fontSize: 15, textAlign: 'center'
  },
  cancelView: {
    borderWidth: 1, borderRadius: 8, borderColor: 'red', width: '45%', padding: 10, marginTop: 20
  },
  cancelTitle: {
color: 'red', fontSize: 15, textAlign: 'center'
  },
  nameView: {
    marginTop: 30
  },
  nameTitle: {
 textAlign: "center"
  }
})