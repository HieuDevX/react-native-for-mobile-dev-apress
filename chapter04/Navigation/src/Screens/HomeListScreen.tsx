import React, { FunctionComponent } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  ScrollView,
  Image,
} from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';
import HouseItem from './components/HouseItem';

const MOCK_DATA = [
  {
    key: 1,
    name: 'Mr. Johns Conch house',
    address: '12th Street, Neverland',
    images: 'http://hmp.me/ol5',
  },
  {
    key: 2,
    name: 'Mr. Pauls Mansion',
    address: '625, Sec-5,  Ingsoc',
    images: 'http://hmp.me/ol6',
  },
  {
    key: 3,
    name: 'Mr. Nalwayas Villa',
    address: '11, Heights, Oceania',
    images: 'http://hmp.me/ol7',
  },
  {
    key: 4,
    name: 'Mr. Johns Conch house',
    address: '12th Street, Neverland',
    images: 'http://hmp.me/ol5',
  },
  {
    key: 5,
    name: 'Mr. Pauls Mansion',
    address: '625, Sec-5,  Ingsoc',
    images: 'http://hmp.me/ol6',
  },
  {
    key: 6,
    name: 'Mr. Nalwayas Villa',
    address: '11, Heights, Oceania',
    images: 'http://hmp.me/ol7',
  },
  {
    key: 7,
    name: 'Mr. Johns Conch house',
    address: '12th Street, Neverland',
    images: 'http://hmp.me/ol5',
  },
  {
    key: 8,
    name: 'Mr. Pauls Mansion',
    address: '625, Sec-5,  Ingsoc',
    images: 'http://hmp.me/ol6',
  },
  {
    key: 9,
    name: 'Mr. Nalwayas Villa',
    address: '11, Heights, Oceania',
    images: 'http://hmp.me/ol7',
  },
];

const HomeListScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.home}>
      {/* <Text>{`Home List Screen`}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} /> */}
      {/* <HouseItem
        name=" Mr. Johns Conch house"
        address=" 12th Street, Neverland"
        image="http://hmp.me/ol5"
      /> */}
      <FlatList
        data={MOCK_DATA}
        renderItem={({ item }) => (
          <HouseItem
            name={item.name}
            image={item.images}
            address={item.address}
          />
        )}
        keyExtractor={(item, index) => index.toString()}
      />

      {/* <ScrollView horizontal={true} directionalLockEnabled={true}>
        <Text>Scroll me plz</Text>
        <Image source={{ uri: 'http://hmp.me/ol5', width: 64, height: 64 }} />
        <Image source={{ uri: 'http://hmp.me/ol5', width: 64, height: 64 }} />

        <Image source={{ uri: 'http://hmp.me/ol5', width: 64, height: 64 }} />
        <Image source={{ uri: 'http://hmp.me/ol5', width: 64, height: 64 }} />
        <Image source={{ uri: 'http://hmp.me/ol5', width: 64, height: 64 }} />
        <Image source={{ uri: 'http://hmp.me/ol5', width: 64, height: 64 }} />
        <Image source={{ uri: 'http://hmp.me/ol5', width: 64, height: 64 }} />
      </ScrollView> */}
    </View>
  );
};

HomeListScreen.navigationOptions = {
  title: 'Home List',
  headerStyle: {
    backgroundColor: '#48BBEC',
  },
  headerTintColor: '#fff',
  headerTitleStyle: {
    fontWeight: 'bold',
  },
};

const styles = StyleSheet.create({
  home: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});

export default HomeListScreen;
