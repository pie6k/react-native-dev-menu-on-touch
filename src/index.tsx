import React, { Component } from 'react';
import { NativeModules, PanResponder, View } from 'react-native';

export default class DevMenuOnTouch extends Component {
  private panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => {
      if (gestureState.numberActiveTouches === 3) {
        NativeModules.DevMenu.show();
      }
      return false;
    },
  });

  private getPanHandlers = () => {
    if (__DEV__) {
      return {};
    }
    return this.panResponder.panHandlers;
  };

  public render() {
    const { children } = this.props;

    const panHandlers = this.getPanHandlers();

    return (
      <View style={{ flex: 1 }} {...panHandlers}>
        {children}
      </View>
    );
  }
}
