import React, { Component } from 'react'


//高阶组件是强化一个比较弱智组件的能力




const withhello = Comp => {
    //获取name
    const name = '高阶组件';
    return class NewComp extends React.Component{
        componentDidMount() {
            console.log('do something')
        }
        render(){
            return <Comp {...this.props} name={name} />
        }
    };
}

const withLog = Comp => {
    console.log(Comp.name+ '渲染了');
    return props => <Comp {...props}/>
}

// @withLog
// @withhello
// @withLog
function hello(props) {
        return (
          <div>
              {props.stage}-{props.name}
          </div>
          );
        }
        const Newhello = withLog(withhello(withLog(hello)));
export default class Hoc extends Component {
    render() {
        return (
            <div>
                <Newhello stage="React"/>
            </div>
        )
    }
}