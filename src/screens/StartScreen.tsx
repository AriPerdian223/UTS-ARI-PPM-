import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
};

export default function StartScreen() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const handleGetStarted = () => {
    navigation.navigate('Home');
  };

  return (
    <ImageBackground
      source={require('../assets/backgroundarie.jpg')}
      style={styles.background}>
      <View>
        <TouchableOpacity style={styles.button} onPress={handleGetStarted}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 48,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'serif',
  },
  button: {
    backgroundColor: '#ff0000',
    marginTop: 500,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
