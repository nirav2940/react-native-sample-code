import React, {useRef, useState} from 'react';
import {View, Text, Keyboard} from 'react-native';
import {connect} from 'react-redux';
import Button from '../../components/button';
import Input from '../../components/input';
import Spacer from '../../components/spacer';
import PasswordInput from '../../components/passwordInput';
import styles from './styles';
import LinkButton from '../../components/linkButton';
import registerAccount  from './action';

const RegistrationScreen = props => {
  
  const {navigation, registerAccount, isLoading} = props;

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const passwordRef = useRef(null);

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.header}>Create new account</Text>
        <Text style={styles.subtitle}>Please fill in the form to continue</Text>
      </View>
      <View style={styles.middleContent}>
        <Input
          inputRef={fullNameRef}
          value={fullName}
          onSubmit={() => {
            emailRef.current.focus();
          }}
          onChangText={setFullName}
          placeholder="Full Name"
          keyboardType="default"
          returnKeyType="next"
        />
        <Input
          inputRef={emailRef}
          value={email}
          onSubmit={() => {
            phoneRef.current.focus();
          }}
          onChangText={setEmail}
          placeholder="Email Address"
          keyboardType="default"
          returnKeyType="next"
        />
        <Input
          inputRef={phoneRef}
          value={phone}
          onSubmit={() => {
            passwordRef.current.focus();
          }}
          onChangText={setPhone}
          placeholder="Phone Number"
          keyboardType="numeric"
          returnKeyType="next"
          isPhone={true}
        />
        <PasswordInput
          inputRef={passwordRef}
          value={password}
          onSubmit={() => {
            Keyboard.dismiss();
          }}
          onChangText={setPassword}
          placeholder="Password"
          keyboardType="default"
          returnKeyType="done"
        />
      </View>
      <View style={styles.bottomContent}>
        <Button
          title="Sign Up"
          isLoading={isLoading}
          action={() => {
            registerAccount({fullName, email, phone, password});
          }}
        />
        <Spacer mb={50} />
        <LinkButton
          text="Have an Account?"
          linkText="Sign In"
          action={() => navigation.navigate('login')}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  isLoading: state.RegistrationReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  registerAccount: data => dispatch(registerAccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationScreen);
