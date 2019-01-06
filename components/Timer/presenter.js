import React, { Component } from "react";
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import Button from "../../Button";

function formatTime(time) {
    var minutes = Math.floor(time / 60);
    time -= minutes * 60;

    var seconds = parseInt(time % 60, 10);

    return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
        ? `0${seconds}`
        : seconds}`;

        
}

class Timer extends Component {

    componentWillReceiveProps(nextProps){
        const currentProps = this.props;
        if(!currentProps.isPlaying && nextProps.isPlaying){
            //console.log(`current is ${currentProps}, netxt is ${nextProps}`);
            // start the interval
            const timerInterval = setInterval(()=>{
                currentProps.addSecond()
            },1000)
            this.setState({
                timerInterval
            })
        } else if (currentProps.isPlaying && !nextProps.isPlaying){
            // stop the interval
            clearInterval(this.state.timerInterval) 
        }
    }

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
                <Text style={styles.timer}>{formatTime( timerDuration - elapsedTime )}</Text>
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