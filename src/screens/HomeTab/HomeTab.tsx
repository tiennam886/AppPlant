import * as React from 'react';
import {BottomNavigation} from 'react-native-paper';
import colors from '../../components/color';
import AlbumRoute from './AlbumScreen';
import HomeRoute from './HomeScreen';
import ProfileRoute from './ProfileScreen';

const MyComponent = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'home', title: 'Home', icon: 'home'},
    {key: 'albums', title: 'Albums', icon: 'image-album'},
    {key: 'profile', title: 'Profile', icon: 'human-male-female'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumRoute,
    profile: ProfileRoute,
  });

  return (
    <BottomNavigation
      activeColor={colors.primary}
      inactiveColor={colors.inactiveColor}
      barStyle={{backgroundColor: colors.white}}
      navigationState={{index, routes}}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
};

export default MyComponent;
