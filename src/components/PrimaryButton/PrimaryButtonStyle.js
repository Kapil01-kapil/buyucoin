import { StyleSheet } from "react-native"


export default StyleSheet.create({
  container: {
    backgroundColor: '#888',
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",

    flexDirection: "row",
    padding: 14,
    alignSelf: "center",

    height: 53,
  },
  buttonTitle: {
 
    alignSelf: "center",
    textAlign: "center",
    color: '#fff',
    fontSize:15,
  },
  boldText: {
    fontWeight: "bold",
    
  },

  loader: {
    alignSelf: "center",
    flex: 1,
  },

  titleContainer: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },

  icon: {
    position: "absolute",
    left: 0,
  },
})
