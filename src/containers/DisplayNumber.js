import DisplayNumber from "../components/DisplayNumber"
import {connect} from "react-redux";
//redux의 state 값이 바뀔 때마다 호출
function mapReduxStateToReactProps(state) {
    return {
      //react의 props: redux의 store의 state값(store.getState())
      number:state.number
    }
}
function mapReduxDispatchToReactProps() {
    return {}
}
export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNumber);




// import React, { Component } from "react";
// import store from "../store";
// export default class extends Component{
//     state = {number:store.getState().number}
//   constructor(props){
//     super(props);
//     store.subscribe(function(){//변화가 일어났을 때 호출
//       this.setState({number:store.getState().number});
//     }.bind(this))
//   }
//     render(){
//         return <DisplayNumber number={this.state.number}></DisplayNumber>;
//     }
// }