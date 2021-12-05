import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = props => {
  const {
    value,
    inputRef,
    onSubmit,
    onChangText,
    keyboardType,
    returnKeyType,
    placeholder,
    isPhone,
  } = props;
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
        blurOnSubmit={false}
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        maxLength={isPhone ? 10 : null}
      />
    </View>
  );
};

export default React.memo(Input);

const styles = StyleSheet.create({
  inputContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#262a34',
    marginBottom: 15,
    borderRadius: 15,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  placeHolfer: {
    color: '#585a60',
  },
  input: {
    color: '#ffffff',
    width: '100%',
    paddingHorizontal: 15,
  },
});
