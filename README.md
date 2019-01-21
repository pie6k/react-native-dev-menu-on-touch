# react-native-dev-menu-on-touch

Open dev menu with 3 fingers touch instead of shake.

## Why?

It's annoying to shake real device every time you need dev menu. Especially when you have hot-reloading disabled.

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

### Use with higher order component

```jsx
import { withDevMenuOnTouch } from 'react-native-dev-menu-on-touch';
const YourAppRoot = withDevMenuOnTouch(YourApp);
```

## Notes

- It's enabled only in dev mode - in production it'll return normal view without changing anything (so it's safe to use in production)
- It's inspider by comment of @slicejunk https://github.com/facebook/react-native/issues/10191#issuecomment-277208461
