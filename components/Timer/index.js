import React,{Component} from "react";
import {View, Text,StyleSheet, StatusBar} from 'react-native';



class Timer extends Component{
    render(){
        return(

            <View style={styles.container}>
                <StatusBar barStyle="light-content" />
                <View style={styles.upper}>
                    <Text style={styles.timer}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text>BUTTONS HERE</Text>
                </View>
            </View>
            
        ) 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#CE0B24"
  },
  upper: {
    flex: 2,
    justifyContent:"center",
    alignItems: 'center',
  },
  lower: {
    flex: 2,
    justifyContent: "center",
    alignItems: 'center',
  },
  timer: {
      color:"white",
      fontSize: 120,
      fontWeight: '300',
  }
});

export default Timer;