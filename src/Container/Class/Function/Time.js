import React, { Component } from 'react'

export default class Time extends Component {
    constructor(props) {
        super(props)

        this.state = {
          time: new Date()
        }
    }

    tick = () => {
        this.setState({
             time: new Date()
        });
    }

    componentWillUnmount = () => {
        clearInterval(this.timeref )
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (this.state.time !== prevState.time) {
            console.log("Time update");
        }
    }

    componentDidMount = () => {
       this.timeref = setInterval(this.tick, 1000);
    }

    render() {
        return (
            <div>
                <h1>{this.state.time.toLocaleTimeString()}</h1>
            </div>
        )
    }
}
