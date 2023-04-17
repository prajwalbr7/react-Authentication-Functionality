// Write your JS code here

import {Component} from 'react'
import './index.css'

class Login extends Component {
  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClicking = async () => {
    const url = 'https://apis.ccbp.in/login'

    const userDetails = {
      username: 'rahul',
      passoword: 'rahul@2021',
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)
    console.log(response)
    if (response === true) {
      this.onSubmitSuccess()
    }
  }

  render() {
    return (
      <div className="conatiner">
        <h1 className="">Please Login</h1>
        <button className="" type="button" onClick={this.onClicking}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}
export default Login
