import React from 'react';
// import store from '../store';
import {connect} from 'react-redux'

const mapStateToProps = state => ({num: state});
const mapDispatchToProps = {
    add: () => ({type:'add'}),
    minus: () => ({type: "minus"}),
    anyncAdd: () => dispatch => {
        //做异步操作
        setTimeout(() => {
            dispatch({type:"add"});
        },1500);
    }
}

function ReduxTest({num,add,minus}) {
    
    return (
        <div>
            <p>{num}</p>
            <div>
                <button onClick={minus}>-</button>
                <button onClick={add}>+</button>
                {/* <button onClick={asyncAdd}>AsyncAdd</button> */}
            </div>
        </div>
    )
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReduxTest);