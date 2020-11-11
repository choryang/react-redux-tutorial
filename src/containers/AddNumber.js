import AddNumber from "../components/AddNumber";
import {connect} from "react-redux";
function mapReduxStateToReactProps() {
    
}
function mapReduxDispatchToReactProps(dispatch) {
    return {
        onClick:function(size){
            //인자로 주는 게 store.dispatch 함수와 같다
            dispatch({type:'INCREMENT', size: size});
        }
    }
}
export default connect(null, mapReduxDispatchToReactProps)(AddNumber);




// import React, {Component} from "react";
// import store from "../store";
// export default class extends Component { //이름 똑같은 거 쓰니까 에러 나더라
//     render() {
//         return <AddNumber onClick={function(size){
//             store.dispatch({type:'INCREMENT', size: size});
//         }}></AddNumber>;
//     }

// }