import React, { Component } from 'react'

export default class Clock extends Component {
    //状态是固定的名字

    state = {
        data: new Date()
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            
            this.setState(({
                data: new Date()
            }))
        },1000);
    }

    componentWillMount(){
        clearInterval(this.timer);
    }

    render() {
        return (
            <div>
                <div>
                    {this.state.data.toLocaleDateString()}
                </div>
                <div>
                    {this.state.data.toLocaleTimeString()}
                </div>
            </div>
        )
    }
}