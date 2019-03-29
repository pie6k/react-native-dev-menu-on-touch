declare module "react-native-devmenu" {
  import * as React from 'react';

  const defaultProps = {
    numberOfTouches: 3,
  }

  interface DevMenuProps {
    numberOfTouches?: number
  }

  type Props = DevMenuProps & typeof defaultProps;
  
  export default class DevMenu extends React.Component<Props, any>{}
}
