import React from 'react'

class Timer extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            counter: 0,
            isMove: true,
            intervalID: 0
        }

        this.stop = this.stop.bind(this)
        this.start = this.start.bind(this)
        this.reset = this.reset.bind(this)
    }

    componentDidMount () {
        this.state.isMove ? this.tick() : false
    }

    start () {
        this.setState({isMove: true})
    }

    stop () {
        this.setState({isMove: false})
    }

    reset () {
        this.setState({counter: 0})
    }

    tick () {
        this.state.intervalID = setInterval(() => {
            this.state.isMove ?
            this.setState({counter: this.state.counter + 1}) :
            false
        }, 1000)
    }

    render () {
        return (
            <div>
                <h3>Вы находитесь на странице {this.state.counter} секунд</h3>
                {!this.state.isMove ?
                 <button onClick={this.start}>{this.props.start}</button> :
                 false}
                {this.state.isMove ?
                <button onClick={this.stop}>{this.props.pause}</button> :
                    false}
                <button onClick={this.reset}>{this.props.reset}</button>
            </div>
        )
    }
}

export default Timer
