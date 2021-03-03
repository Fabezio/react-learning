import React from 'react'

class Form extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      email: '',
      submit: {
        username: '',
        email: ''
      }
    }
    this.handleUsername = this.handleUsername.bind(this)
    this.handleEmail = this.handleEmail.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleUsername (event) {
    this.setState({
      username: event.target.value
    })
  }

  handleEmail (event) {
    this.setState({
      email: event.target.value
    })
  }

  handleSubmit (event) {
    event.preventDefault()
    this.setState({
      submit: {
        username: this.state.username,
        email: this.state.email

      }
    })
  }

  render () {
    const title = 'Formulaire'
    const { username, email, submit } = this.state
    return (
      <div>
        <h2>{title}</h2>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={username} onChange={this.handleUsername} placeholder='Votre identifiant ici' />
          <input type='email' value={email} onChange={this.handleEmail} placeholder='Votre adresse mail ici' />
          <button type='submit'>Valider</button>

          {submit.email === '' || submit.username === ''
            ? <p>Veuillez remplir le formulaire pour vous connecter</p>
            : <p>Salut, je m'appelle {submit.username} et mon adresse mail est {submit.email}</p>}

        </form>
      </div>
    )
  }
}

export default Form
