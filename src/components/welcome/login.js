import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import Button from '../basic/button';


class WelcomeLogin extends Component {
  render() {
    return <form>
      <Field placeholder='testing' name='testing' type='email' title='testing'/>
      <Button color='white' to='/'>Back</Button>
    </form>;
  }
}

WelcomeLogin = reduxForm({
  form: 'login'
})(WelcomeLogin);

export default WelcomeLogin;
