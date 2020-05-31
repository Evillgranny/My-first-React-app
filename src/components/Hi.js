import React, { PureComponent } from 'react'

class Hi extends React.PureComponent {
    constructor (props) {
        super(props)

    }
    render() {
        return <h2>Привет, {this.props.name}</h2>;
    }
}

export default Hi
