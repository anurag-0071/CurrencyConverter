import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "617492017458-5gbk6gu4kffbiti0m86akvgpdmo7ukj6.apps.googleusercontent.com";

class Login extends React.Component {
  constructor(props) {
    super(props);
  }

  onLogin() {
    this.props.login();
  }

  onLoginError() {
    alert("Login Failed");
  }

  render() {
    return (
      <div className="Modal">
        <div className="LoginModal">
          <GoogleLogin
            clientId={clientId}
            buttonText="Login using Gmail"
            onSuccess={this.onLogin.bind(this)}
            onFailure={this.onLoginError}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    )
  }

}


export default Login;