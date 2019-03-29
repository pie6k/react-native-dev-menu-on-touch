declare module "@terrysahaidak/react-native-devmenu" {
  import * as React from 'react';

  interface DevMenuProps {
    numberOfTouches?: number
  }
  
  export default class DevMenu extends React.Component<DevMenuProps, any>{}
}
