import React, { Component } from 'react';
import { Welcome1, Welcome2 } from './components/CompType';
import Clock from './components/Clock';
import StateTest from './components/StateTest';
import CartSample from './components/CartSample';
import Likecycle from './components/Likecycle'
import logo from './logo.svg';
import './App.css';
import AntdTest from './components/AntdTest';
import CommentList from './components/CartSample'
import Hoc from './components/Hoc'
import Composition from './components/Composition';
import HookTest from './components/HookTest';
import ContextTest from './components/ContextTest'
import WrappedNormalLoginForm from './components/AntdForm';
import KForm from './components/KForm'
import ReduxTest from './components/ReduxTest';
import { Provider } from "react-redux";
import store from "./store"

class App extends Component {
  state = {prop:'some prop'}
  componentDidMount(){
    this.setState({prop:'a new prop'})
    // setTimerout(() => {
    //   this.setState({prop:''})
    // },2000)
  }
  formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  render() {
    const name = "jerry"
    const user = { firstName: "xiao",lastName: "ming"}
    const jsx = <p>hello, xiaoming</p>
    return (
      <div>
        {/* 表达式 */}
        <h1>{name}</h1>
        <h1>{this.formatName(user)}</h1>
        {/* 属性 */}
        <img src={logo} style={{width:'100px'}} />
        {/* jsx也是表达式 */}
        {jsx}
        {/* 使用其它组件 */}
        <Welcome1 name="some content"></Welcome1>
        <Welcome2 name="some content"></Welcome2>

        {/* State和状态改变setState */}
        <Clock></Clock>
        <StateTest></StateTest>

        {/* 条件与循环 */}
        <CartSample title="购物车"></CartSample>

        {/* 生命周期 */}
        {this.state.prop && <Likecycle prop={this.state.prop}></Likecycle>}

        {/* antd */}
        <AntdTest></AntdTest>

        {/* 展示组件和容器组件 */}
        <CommentList></CommentList>

        {/* 高阶组件 */}
        <Hoc></Hoc>

        {/* 组件复合 */}
        <Composition></Composition>

        {/* Hook API */}
        <HookTest></HookTest>

        {/* Context */}
        <ContextTest></ContextTest>

        <WrappedNormalLoginForm></WrappedNormalLoginForm>

        <KForm></KForm>

        {/* Redux */}
        <Provider store={store}>
          <ReduxTest/>
        </Provider>
        
      </div>
    );
  }
}

export default App;
