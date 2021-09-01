/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  FlatList,
  Image,
  Keyboard,
  SectionList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {Button} from 'react-native-paper';
import {Btn} from './BtnList';
import colors from '../../components/color';
import styled from 'styled-components';
import {SECTIONS} from './SECTIONS';
const HomeRoute = () => {
  type btn = typeof Btn[0];
  const ListBtn = ({item}: {item: btn}) => {
    return (
      <Button
        icon={item.icon}
        contentStyle={{
          height: 120,
          width: 120,
          flexDirection: 'column',
          backgroundColor: colors.white,
          alignContent: 'center',
          marginHorizontal: 8,
        }}
        labelStyle={{color: colors.primary}}
        onPress={() => console.log('Pressed')}>
        {item.title}
      </Button>
    );
  };
  type Item = typeof SECTIONS[0]['data'][0];
  const ListItem = ({item}: {item: Item}) => {
    return (
      <View style={styles.item}>
        <Image
          source={{
            uri: item.uri,
          }}
          style={styles.itemPhoto}
          resizeMode="cover"
        />
      </View>
    );
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{flex: 1}}>
        <View style={{backgroundColor: colors.primary, height: 190}}>
          <Text style={styles.titleText}>Hello Taylor,</Text>
          <Text style={styles.descriptionText}>
            Let's Learn More About Plants
          </Text>
        </View>
        <Wrapper
          onChangeText={() => {
            console.log('search');
          }}
          underlineColorAndroid="transparent"
          placeholder="    Search Here"
        />
        <View>
          <FlatList
            horizontal
            data={Btn}
            renderItem={ListBtn}
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View style={{flex: 1}}>
          <SectionList
            contentContainerStyle={{paddingHorizontal: 10}}
            stickySectionHeadersEnabled={false}
            sections={SECTIONS}
            renderSectionHeader={({section}) => (
              <>
                <Text style={styles.sectionHeader}>{section.title}</Text>
                {section.horizontal ? (
                  <FlatList
                    horizontal
                    data={section.data}
                    renderItem={({item}) => <ListItem item={item} />}
                    showsHorizontalScrollIndicator={false}
                  />
                ) : null}
              </>
            )}
            renderItem={({item, section}) => {
              if (section.horizontal) {
                return null;
              }
              return <ListItem item={item} />;
            }}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default HomeRoute;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    color: '#FFFFFF',
    fontSize: 24,
    top: '40%',
    left: 23,
    fontWeight: 'bold',
  },
  descriptionText: {
    color: '#FFFFFF',
    fontSize: 17,
    top: '45%',
    left: 23,
    opacity: 0.8,
  },
  sectionHeader: {
    fontWeight: '400',
    fontSize: 18,
    color: '#000000',
    marginTop: 20,
    marginBottom: 5,
  },
  item: {
    margin: 10,
  },
  itemPhoto: {
    width: 200,
    height: 200,
  },
  itemText: {
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 5,
  },
});
const Wrapper = styled.TextInput`
  /* Rectangle */
  width: 329px;
  height: 50px;
  left: 40px;
  top: -20px;

  background: #ffffff;
  box-shadow: 3px 5px 20px rgba(182, 182, 182, 0.15);
  border-radius: 3100px;
`;
