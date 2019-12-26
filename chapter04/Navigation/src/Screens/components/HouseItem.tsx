import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import FadeInView from './FadeInView';

interface Props {
  name: string;
  image: string;
  address: string;
}

const HouseItem: FunctionComponent<Props> = ({ name, image, address }) => {
  return (
    // <View style={styles.row}>
    <FadeInView style={styles.row}>
      <Image source={{ uri: image }} style={styles.thumbnail} />
      <View style={styles.rightBox}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </FadeInView>
    // </View>
  );
};

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    borderWidth: 1,
    borderColor: '#d6d7da',
  },
  thumbnail: {
    width: 53,
    height: 81,
  },
  rightBox: {
    flex: 1,
  },
  name: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'center',
  },
  address: {
    textAlign: 'center',
  },
});

export default HouseItem;
