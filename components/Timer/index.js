import React,{Component} from "react";
import {View, Text,StyleSheet} from 'react-native';



class Timer extends Component{
    render(){
        return(

            <View style={styles.container}>
                <View style={styles.upper}>
                    <Text style={styles.time}>25:00</Text>
                </View>
                <View style={styles.lower}>
                    <Text>BUTTONS HERE</Text>
                </View>
            </View>
            
        ) 
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    upper:{},
    lower:{},
    timer:{}
})

export default Timer;