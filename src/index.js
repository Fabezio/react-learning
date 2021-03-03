import React from 'react'
import ReactDOM from 'react-dom'
import './App.css'
// import './logo.svg'
import Text from './text'
import Form from './form'

class Main extends React.Component {
  render () {
    const title = 'Hello World!'
    return (
      <div>
        <h1>{title}</h1>
        <Text />
        <Form />
      </div>
    )
  }
}

ReactDOM.render(<Main />, document.getElementById('root'))
