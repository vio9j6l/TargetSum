import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import Game from './Game';

class App extends React.Component {
  render() {
    return (
        <Game randomNumberCount={6} initialSeconds={10}/>
    );
  }
};


export default App;
