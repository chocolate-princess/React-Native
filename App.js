

import React from 'react';

import {

  View,
  StyleSheet,
  Dimensions

} from 'react-native';
import { InterstitialAdManager } from 'react-native-fbads';

const {width,height} = Dimensions.get('window');
// const bannerAdPlacementId = '765155471259655_765156727926196'
InterstitialAdManager.showAd(765155471259655_765156727926196)
  .then((didClick) => {})
  .catch((error) => {})
const App = () => {
  
  return (
    <View style={styles.container}>
    <InterstitialAdManager/>
    </View>

  );
};


  

const styles = StyleSheet.create({
  container: {
    height,
    width,
    backgroundColor:'pink'
  },
  
});

export default App;
