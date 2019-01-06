import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../../Button";



class Timer extends Component {
    render() {
        console.log(this.props);
        const { 
            isPlaying, 
            elapsedTime, 
            timerDuration,
            startTimer,
            restartTimer,
            addSecond
         } = this.props
        return <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.upper}>
                <Text style={styles.timer}>25:00</Text>
            </View>
            <View style={styles.lower}>
                {!isPlaying ? (
                    <Button iconName={"play-circle"} onPress={startTimer} />
                ) : (
                <Button iconName={"stop-circle"} onPress={restartTimer} />
                ) }
                
            </View>
        </View>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#CE0B24"
    },
    upper: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center',
    },
    lower: {
        flex: 2,
        justifyContent: "center",
        alignItems: 'center',
    },
    timer: {
        color: "white",
        fontSize: 120,
        fontWeight: '300',
    }
});

export default Timer;