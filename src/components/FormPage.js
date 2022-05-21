import React from 'react';
import { Link } from 'react-router-dom';


class LoginForm extends React.Component{
    render(){
      return(
        <div id="loginform">
          <div className='back'><Link to='/'>X</Link></div>
          <div className='login'>
            <div className='heading'>
            <h1>Login</h1>
            <h2>to</h2>
            <h1>Mad Masquerade</h1></div>
            <div className='inputs'><FormInput description="Registration Number" placeholder="Enter your reg no." type="text" />
     <FormInput description="Password" placeholder="Enter your password" type="password"/></div>
     </div>
        </div>
      )
    }
  }

  const FormInput = props => (
    <div className="row">
      <label>{props.description}</label>
      <input type={props.type} placeholder={props.placeholder}/>
    </div>  
  );

  export default LoginForm;