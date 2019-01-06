import {connect} from "react-redux";
import Timer from './presenter';

function mapStateToProps(state){
    //이 객체는 스토어에서 state를 복사해서 container props 에 붙여넣는 역할
    const {isPlaying, elapsedTime, timerDuration} = state
    // 이는 비구조할당에 대해서 익히기 js문법
    // 
    console.log(state)
    return {
        isPlaying, 
        //isPlaying: isPlaying,
        elapsedTime, 
        //elapsedTime: elapsedTime,
        timerDuration 
        //timerDuration: timerDuration
        // 여기선 각 state를 열고 각 prop들을  리턴하는것이지. 
        // 이 prop 들은 Timer에 presenter.js에서 활용이된다. 
    }

}

export default connect(mapStateToProps)(Timer);