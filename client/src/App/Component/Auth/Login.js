/** @format */

import React, { useState } from "react";
import { Link } from "react-router-dom";
// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"; // v1.x
// import { MuiThemeProvider as V0MuiThemeProvider } from "material-ui";
// import { AppBar, TextField } from "@material-ui/core";

// import Button from "@material-ui/core/Button";

const Login = () => {
  const [formData, setFormData] = useState({});

  const { email, password } = formData;
  return (
    // <div>
    //   <MuiThemeProvider>
    //     <div>
    //       <AppBar title='Login' />
    //       <TextField
    //         hintText='Enter your Username'
    //         floatingLabelText='Username'
    //         onChange={(event, newValue) =>
    //           this.setState({ username: newValue })
    //         }
    //       />
    //       <br />
    //       <TextField
    //         type='password'
    //         hintText='Enter your Password'
    //         floatingLabelText='Password'
    //         onChange={(event, newValue) =>
    //           this.setState({ password: newValue })
    //         }
    //       />
    //       <br />
    //       <Button
    //         label='Submit'
    //         primary={true}
    //         style={style}
    //         onClick={(event) => this.handleClick(event)}
    //       />
    //     </div>
    //   </MuiThemeProvider>
    // </div>

    <div id='signUpContainer'>
      <form className='form'>
        <div className='form-group'>
          <input
            type='email'
            placeholder='Email Address'
            name='email'
            value={email}
            required
          />
        </div>
        <div className='form-group'>
          <input
            type='password'
            placeholder='Password'
            value={password}
            name='password'
          />
        </div>
        <input type='submit' className='btn btn-primary' value='Login' />
      </form>
      <p className='my-1'>
        Don't have an account? <Link to='/register'>Sign Up</Link>
      </p>
    </div>
  );
};

export default Login;
