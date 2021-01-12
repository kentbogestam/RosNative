/**
 * ROS webview
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';
// import { SplashScreen } from 'react-native-splash-screen';

export default class App extends Component {
  // 
  constructor(props) {
    super(props);
    this.state = { visible: true };
  };

  // 
  hideSpinner() {
    this.setState({ visible: false });
  };

  // 
  render() {
    return (
      <View style={[styles.container, styles.horizontal]}>
        <WebView source={{ uri: 'https://ros-dev.dastjar.com/login' }} onLoadEnd={() => this.hideSpinner()} />

        {this.state.visible && (<ActivityIndicator size="large" style={{ position: 'absolute', left: 0, right: 0, bottom: 0, top: 0 }} color="#0000ff" />)}
      </View>
    )
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  }
});
