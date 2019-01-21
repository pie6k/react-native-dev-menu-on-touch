import React, { Component, ComponentType } from 'react';
import { NativeModules, PanResponder, View } from 'react-native';

export class DevMenuOnTouch extends Component {
  private panResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => {
      if (gestureState.numberActiveTouches === 3) {
        NativeModules.DevMenu.show();
      }
      return false;
    },
  });

  public render() {
    const { children } = this.props;

    // return children;
    const panHandlers = __DEV__ ? this.panResponder.panHandlers : {};
    return (
      <View pointerEvents="box-none" style={{ flex: 1 }} {...panHandlers}>
        {children}
      </View>
    );
  }
}

export function withDevMenuOnTouch<P>(TargetComponent: ComponentType<P>) {
  return class WithDevMenuOnTouch extends Component<P> {
    public render() {
      return (
        <DevMenuOnTouch>
          <TargetComponent {...this.props} />
        </DevMenuOnTouch>
      );
    }
  };
}

export default DevMenuOnTouch;
