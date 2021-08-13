import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './SignUpForm.module.scss';

export default class index extends Component {
  constructor (props) {
    super(props);

    this.state = {
      nameValue: '',
      isNameValid: false,
      emailValue: '',
      isEmailValid: false,
      passwordValue: '',
      isPasswordValid: false,
    };
  }

  submitHandler = e => {
    e.preventDefault();
  };

  handleNameChange = ({ target: { value } }) => {
    this.setState({ nameValue: value, isNameValid: /^\w+$/.test(value) });
  };

  handleEmailChange = ({ target: { value } }) => {
    this.setState({
      emailValue: value,
      isEmailValid: /(\w.{1,30})\@([a-z]{1,6})\.([a-z]{2,4})/.test(value),
    });
  };

  handlePasswordChange = ({ target: { value } }) => {
    this.setState({
      passwordValue: value,
      isPasswordValid: /^.{6,30}$/.test(value),
    });
  };

  render () {
    const {
      nameValue,
      passwordValue,
      emailValue,
      isEmailValid,
      isNameValid,
      isPasswordValid,
    } = this.state;
    const nameInput = classNames(styles.input, {
      [isNameValid ? styles.valid : styles.invalid]: nameValue,
    });

    const passwordInput = classNames(styles.input, {
      [isPasswordValid ? styles.valid : styles.invalid]: passwordValue,
    });

    const emailInput = classNames(styles.input, {
      [isEmailValid ? styles.valid : styles.invalid]: emailValue,
    });

    return (
      <form className={styles.container} onSubmit={this.submitHandler}>
        <label className={styles.inputLabel}>
          Name
          <input
            className={nameInput}
            type='text'
            placeholder='name'
            value={nameValue}
            onChange={this.handleNameChange}
          />
        </label>

        <label className={styles.inputLabel}>
          Email
          <input
            className={emailInput}
            type='email'
            placeholder='email'
            value={emailValue}
            onChange={this.handleEmailChange}
          />
        </label>

        <label className={styles.inputLabel}>
          Password
          <input
            className={passwordInput}
            type='password'
            name='passwordValue'
            placeholder='password'
            value={passwordValue}
            onChange={this.handlePasswordChange}
          />
        </label>

        <button type='submit'>Sign up</button>
      </form>
    );
  }
}
