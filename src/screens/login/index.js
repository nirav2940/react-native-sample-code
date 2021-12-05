import React, {useRef, useState} from 'react';
import {View, Text, Keyboard, Alert} from 'react-native';
import Button from '../../components/button';
import GoogleButton from '../../components/googleButton';
import Input from '../../components/input';
import PasswordInput from '../../components/passwordInput';
import styles from './styles';
import LinkButton from '../../components/linkButton';
import Spacer from '../../components/spacer';
import Ripple from 'react-native-material-ripple';
import {connect} from 'react-redux';
import loginAccount from './action';

const LoginScreen = props => {
  const {navigation, loginAccount, isLoading} = props;
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.topContent}>
        <Text style={styles.header}>Welcome Back!</Text>
        <Text style={styles.subtitle}>Please sign in to your account</Text>
      </View>
      <View style={styles.middleContent}>
        <Input
          inputRef={emailRef}
          value={email}
          onSubmit={() => {
            passwordRef.current.focus();
          }}
          onChangText={setEmail}
          placeholder="Email Address"
          keyboardType="default"
          returnKeyType="next"
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
        <Ripple style={styles.forgotPassLink}>
          <Text style={styles.forgotPassText}>Forgot Password?</Text>
        </Ripple>
      </View>
      <View style={styles.bottomContent}>
        <Button
          title="Sign In"
          isLoading={isLoading}
          action={() => {
            loginAccount({email, password});
          }}
        />
        <Spacer mb={15} />
        <GoogleButton
          title="Sign In with Google"
          action={() => {
            Alert.alert('Hello..!', 'Sign In with Google not working yet');
          }}
        />
        <Spacer mb={50} />
        <LinkButton
          text="Don't have an Account?"
          linkText="Sign Up"
          action={() => navigation.navigate('registration')}
        />
      </View>
    </View>
  );
};

const mapStateToProps = state => ({
  isLoading: state.LoginReducer.isLoading,
});

const mapDispatchToProps = dispatch => ({
  loginAccount: data => dispatch(loginAccount(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
