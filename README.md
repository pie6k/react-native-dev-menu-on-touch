# react-native-dev-menu-on-touch

Open dev menu with 3 fingers touch instead of shake.

## Why?

It's annoying to shake real device every time you need dev menu. Also - it looks quite awkward if you have co-workers sitting next to you and you shake your phone every 2 minutes.

## How to use

Wrap entire app inside this component

```jsx
import DevMenuOnTouch from 'react-native-dev-menu-on-touch';

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

## Notes

- It's enabled only in dev mode - in production it'll return normal view without changing anything (so it's safe to use in production)
- It's inspider by comment of @slicejunk https://github.com/facebook/react-native/issues/10191#issuecomment-277208461
