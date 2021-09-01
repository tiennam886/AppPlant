/* eslint-disable no-useless-escape */
import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import React from 'react';
import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {RootStackParamList} from './types';

type LoginProp = StackNavigationProp<RootStackParamList, 'Login'>;
function Login() {
  const navigation = useNavigation<LoginProp>();
  const [isValidGmail, setGmail] = React.useState(true);
  const [isValidPwd, setPwd] = React.useState(true);

  const checkGmailChange = (val: string) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (val.trim().length >= 6 && reg.test(val)) {
      setGmail(true);
    } else {
      setGmail(false);
    }
  };
  const handlePasswordChange = (val: {
    trim: () => {(): any; new (): any; length: number};
  }) => {
    if (val.trim().length >= 8) {
      setPwd(true);
    } else {
      setPwd(false);
    }
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.groundColor}>
        <Text style={styles.loginTitle}>Hello</Text>
        <Text style={styles.loginText}>Let's Learn More About Plants</Text>
        <View style={styles.formContainer}>
          <TextInput
            placeholder="Gmail"
            placeholderTextColor="#292929"
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            onChangeText={(text: any) => {
              checkGmailChange(text);
            }}
          />
          {isValidGmail ? null : <Text>Invalid gmail format</Text>}

          <TextInput
            placeholder="Password"
            placeholderTextColor="#292929"
            secureTextEntry={true}
            style={styles.textInput}
            underlineColorAndroid={'transparent'}
            onChangeText={(text: any) => {
              handlePasswordChange(text);
            }}
          />
          {isValidPwd ? null : <Text>Password must be more than 8 digits</Text>}
          <TouchableOpacity
            style={styles.button1}
            onPress={() => {
              if (isValidGmail && isValidPwd) {
                navigation.navigate('Home');
              }
            }}>
            <Text style={styles.btntext}>LOGIN</Text>
          </TouchableOpacity>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
export default Login;
const styles = StyleSheet.create({
  groundColor: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  btntext: {
    color: '#FFFFFF',
    fontSize: 18,
    fontFamily: 'FontsFree-Net-SFProText-Medium-1.ttf',
    padding: 10,
  },
  loginTitle: {
    position: 'absolute',
    left: 23,
    top: 100,
    fontSize: 30,
    lineHeight: 36,
  },
  loginText: {
    position: 'absolute',
    left: 23,
    top: 146,
    fontSize: 16,
    color: '#495566',
    opacity: 0.8,
  },
  textInput: {
    alignSelf: 'stretch',
    backgroundColor: 'rgba(255, 255,255,0.8)',
    marginBottom: 20,
    borderBottomColor: '#2DDA93',
    borderBottomWidth: 1,
    width: 350,
  },
  button1: {
    position: 'absolute',
    top: 400,
    left: 23,
    width: 330,
    height: 55,
    backgroundColor: '#2DDA93',
    alignItems: 'center',
  },
  formContainer: {
    position: 'absolute',
    marginTop: 190,
    marginLeft: 23,
    marginRight: 23,
  },
});
