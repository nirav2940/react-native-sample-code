import React, {useState} from 'react';
import {StyleSheet, Image, View, TextInput} from 'react-native';
import Ripple from 'react-native-material-ripple';

const PasswordInput = props => {
  const {
    value,
    inputRef,
    onSubmit,
    onChangText,
    keyboardType,
    returnKeyType,
    placeholder,
  } = props;

  const [isSecure, toggleSecure] = useState(true);

  var eyeIcon = isSecure
    ? require('../assets/icons/eye.png')
    : require('../assets/icons/eye-off.png');
  return (
    <View style={styles.inputContainer}>
      <TextInput
        autoCapitalize="none"
        placeholder={placeholder}
        placeholderTextColor="#585a60"
        value={value}
        ref={input => {
          inputRef.current = input;
        }}
        style={styles.input}
        onSubmitEditing={() => {
          onSubmit();
        }}
        onChangeText={val => {
          onChangText(val);
        }}
        secureTextEntry={isSecure}
        blurOnSubmit={false}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
      />
      <Ripple style={styles.eyeBtn} onPress={() => toggleSecure(!isSecure)}>
        <Image source={eyeIcon} />
      </Ripple>
    </View>
  );
};

export default React.memo(PasswordInput);

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    width: '100%',
    height: 60,
    backgroundColor: '#262a34',
    marginBottom: 15,
    borderRadius: 15,
    justifyContent: 'center',
    flexWrap: 'nowrap',
    paddingHorizontal: 10,
  },
  placeHolfer: {
    color: '#585a60',
  },
  input: {
    color: '#ffffff',
    width: '90%',
    paddingHorizontal: 15,
  },
  eyeBtn: {
    width: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
