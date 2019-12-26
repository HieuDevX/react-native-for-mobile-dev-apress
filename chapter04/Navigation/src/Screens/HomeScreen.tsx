import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const HomeScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* <Button
        title="Go to About Page"
        onPress={() => navigation.navigate('About')}
      /> */}
      {/* <View style={styles.topBox}>
        <Image
          style={styles.homeBanner}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        />
      </View> */}

      <TouchableHighlight
        style={styles.topBox}
        onPress={() => navigation.navigate('HomeList')}>
        <Image
          style={styles.homeBanner}
          source={{ uri: 'https://facebook.github.io/react/logo-og.png' }}
        />
      </TouchableHighlight>
      <View style={styles.bottomBox} />
      {/* <View style={styles.topBox} /> */}
    </View>
  );
};

HomeScreen.navigationOptions = {
  title: 'HouseShare',
  headerStyle: {
    backgroundColor: '#48BBEC',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  topBox: {
    flex: 2,
    backgroundColor: '#CCE5FF',
  },
  bottomBox: {
    flex: 1,
    backgroundColor: '#FFFFCC',
  },
  homeBanner: {
    bottom: 0,
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
});

export default HomeScreen;
