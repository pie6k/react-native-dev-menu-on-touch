# react-native-dev-menu-on-touch


[![npm](https://img.shields.io/npm/v/react-native-dev-menu-on-touch.svg)](https://npmjs.com/package/react-native-dev-menu-on-touch)

Open dev menu with 3 fingers touch instead of shake.

![shake](https://media0.giphy.com/media/l41Ywr1TS6nV7GsIE/giphy.gif?cid=3640f6095c46cf8b544775586795984a)

 > *when you want to reload the app*

## Why?

It's annoying to shake real device every time you need dev menu. Also - it looks quite awkward if you have co-workers sitting next to you and you shake your phone every 2 minutes.

## How to use

Wrap entire app inside this component

```jsx
import DevMenuOnTouch from 'react-native-dev-menu-on-touch';
// or:  import { DevMenuOnTouch } from 'react-native-dev-menu-on-touch'

class YourRootApp extends Component {
  render() {
    return (
      <DevMenuOnTouch>
        <YourApp />
      </DevMenuOnTouch>
    );
  }
}
```

or use with higher order component

```jsx
import { withDevMenuOnTouch } from 'react-native-dev-menu-on-touch';
const YourAppRoot = withDevMenuOnTouch(YourApp);
```

## Notes

- It's enabled only in dev mode - in production it'll return normal view without changing anything (so it's safe to use in production)
- It's inspider by comment of @slicejunk https://github.com/facebook/react-native/issues/10191#issuecomment-277208461
