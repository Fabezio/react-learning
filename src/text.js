import React from 'react'

class Text extends React.Component {
//   constructor (props) {
//     super(props)
//   }

  render () {
    return (
      <div>
        <p>text here</p>
        <MyText parag='my paragraph' />
      </div>
    )
  }
}

const MyText = props => <p>{props.parag}</p>

export default Text
