import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Component imports
import ButtonTile from '../components/ButtonTile';

const HomeScreen = props => {
  return (
    <View style={styles.container}>
      <Text>My name is Matt, let's build Profinity!</Text>
      <ButtonTile 
        title='Rewards' 
        onPress={() => alert('Button Pressed!')} 
        style={{ backgroundColor: '#ffff00' }} 
        textStyle={{ color: '#000000' }}
        icon='gift'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomeScreen; 