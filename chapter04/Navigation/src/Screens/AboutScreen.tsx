import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationStackScreenComponent } from 'react-navigation-stack';

const AboutScreen: NavigationStackScreenComponent = ({ navigation }) => {
  return (
    <View style={styles.home}>
      <Text>{`About Screen`}</Text>
      <Button
        title="Go to Home Page"
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

AboutScreen.navigationOptions = {
  title: 'About',
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
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AboutScreen;
