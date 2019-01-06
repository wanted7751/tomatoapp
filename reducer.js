// import 필요한 것을 불러온다. 

// Actions 액션을 정의

const START_TIMER = "START_TIMER";
const RESTART_TIMER = "RESTART_TIMER";
const ADD_SECOND = "ADD_SECOND";


// Action Creators 액션 크리에이터 정의

function startTimer(){
    return {
        type: START_TIMER
    }
    
    
}
        //팁 객체 object 형태는 중괄호로 묶는다. 

function restartTimer(){
    return{
        type: RESTART_TIMER
    }
}

function addSecond(){
    return{
        type:ADD_SECOND
    }
}

// Reducer 리듀서 정의

const TIMER_DURATION = 1500;

const initialState = {
    isPlaying:false,
    elapsedTime:0,
    timerDuration: TIMER_DURATION
    
}

function reducer(state = initialState, action){
    // 여기서 initialState 는 state에 담고 있다. 
    switch(action.type){
        case START_TIMER:
            return applyStartTimer(state);
        case RESTART_TIMER:
            return applyRestartTimer(state); 
        case ADD_SECOND:
            return applyAddSecond(state);

            
    }
}
// Reducer Functions

function applyStartTimer(state){
    return {
        ...state,
        // ...state 의 의미는 현재상태를 두고 아래의 상태를 덮어쓴다는 의미이다. 
        isPlaying:true        
    }
}

function applyRestartTimer(state){
    return{
        ...state,
        isPlaying:false
    }
}

function applyAddSecond(state) {
    if (state.elapsedTime < TIMER_DURATION){
      return{
          ...state,
          elapsedTime: state.elapsedTime +1
      }
  }else{
      return{
          ...state,
          isPlaying: false
      }
  }
}

// Export Action Creators

const actionCreator={
    startTimer,
    restartTimer,
    addSecond
}

// Export Reducer

export default reducer;