import React, { Component } from 'react'
import '../scss/main.scss';

class CreateEl extends Component{
    render() {
      return (
          <div>
              { React.createElement('h1', {className: 'qq'}, 'hello world') }
          </div>
      )
    }
}

export default CreateEl
