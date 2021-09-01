/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  SafeAreaView,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import data from './data';
import {RootStackParamList} from '../types';
import {StackNavigationProp} from '@react-navigation/stack';
type Item = typeof data[0];
import colors from '../../components/color';

type IntroProp = StackNavigationProp<RootStackParamList, 'Intro'>;
function Intro() {
  const navigation = useNavigation<IntroProp>();
  const _keyExtractor = (item: Item) => item.title;
  const _renderPagination = (activeIndex: number) => {
    return (
      <View style={styles.paginationContainer}>
        <SafeAreaView>
          <View style={styles.paginationDots}>
            {data.length > 1 &&
              data.map((_, i) => (
                <TouchableOpacity
                  key={i}
                  style={[
                    styles.dot,
                    i === activeIndex
                      ? {backgroundColor: colors.primary}
                      : {backgroundColor: 'rgba(0, 0, 0, .2)'},
                  ]}
                />
              ))}
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: colors.primary}]}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Log in</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </View>
    );
  };
  const _renderItem = ({item}: {item: Item}) => {
    return (
      <View
        style={[
          styles.slide,
          {
            backgroundColor: item.bg,
          },
        ]}>
        <Image source={item.image} style={styles.image} />
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };
  return (
    <View style={{flex: 1}}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={_keyExtractor}
        renderItem={_renderItem}
        renderPagination={_renderPagination}
        data={data}
      />
    </View>
  );
}
export default Intro;
const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
  },
  image: {
    marginVertical: 60,
  },
  title: {
    fontSize: 18,
    color: colors.black,
    textAlign: 'center',
    marginHorizontal: 60,
    fontWeight: 'bold',
  },
  text: {
    fontSize: 14,
    color: colors.gray,
    textAlign: 'center',
    marginHorizontal: 60,
    marginTop: 20,
  },
  paginationContainer: {
    position: 'absolute',
    bottom: 16,
    left: 16,
    right: 16,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  buttonContainer: {
    flexDirection: 'row',
    marginHorizontal: 24,
  },
  button: {
    flex: 1,
    paddingVertical: 20,
    marginHorizontal: 8,
    borderRadius: 24,
    backgroundColor: '#1cb278',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    textAlign: 'center',
  },
});
