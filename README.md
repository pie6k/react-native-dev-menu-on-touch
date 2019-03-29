# react-native-devmenu

[![npm](https://img.shields.io/npm/v/@terrysahaidak/react-native-devmenu.svg?style=plastic)](https://npmjs.com/package/@terrysahaidak/react-native-devmenu)

> It's iOS only so far :(

Open developer menu using touches instead of shaking your device.

## Installation

Install the library from npm:

```bash
npm i --save @terrysahaidak/react-native-devmenu
```
or
```bash
yarn add @terrysahaidak/react-native-devmenu
```

## Usage

Wrap your root any any other component you want to recognize you touches to open the dev menu.
Pass `numberOfTouches` prop to change number of taps (by default it's 3).

It renders children without any wrapper on android and/or production.

```jsx
import DevMenu from '@terrysahaidak/react-native-devmenu';

const Root = () => (
  <DevMenuOnTouch numberOfTouches={4}>
    {/* your app stuff such as providers, navigators etc */}
  </DevMenuOnTouch>
);
```

## License
[MIT](LICENSE) © Terry Sahaidak 2019
