# react-native-counter-ios-android

> Minimal implement of redux counter example on ReactNative iOS and Android

I don't use any syntax out of React Native's enabled transformations, so no any patch on ReactNative is needed.

- react - v0.14
- react-native v0.25 (Hot Module Replacement!!!)
- redux v3
- react-redux v4
- redux-thunk v2
- remote-redux-devtools v0.3

![](demo.png)

## How to run this Porject

#### Setup iOS and Android env

see

- [iOS setup](https://facebook.github.io/react-native/docs/getting-started.html#ios-setup)
- [Android setup](https://facebook.github.io/react-native/docs/android-setup.html#content)

#### Install npm dependecies

```sh
npm i
```

#### run iOS

Open `ios/ReduxCounterUniversal.xcodeproj` and hit run in Xcode.

#### run Android

```sh
emulator -avd [your_emulator_name] -gpu on &
react-native run-android
```

> On Mac using `fn + F2` to open debug panel

Also you can use `adb logcat` to log some android debug messages.

```sh
adb logcat -s 'ReactNative'
```

## Remote devtools

[chrome app](https://chrome.google.com/webstore/detail/remotedev/faicmgpfiaijcedapokpbdejaodbelph) (recommended)

See [remote-redux-devtools](https://github.com/zalmoxisus/remote-redux-devtools) for more information

## Upgrade Guide

[React Native Upgrading](http://facebook.github.io/react-native/docs/upgrading.html)

## Troubleshooting

#### Naming collision detected

```
Failed to build DependencyGraph:
Naming collision detected:
/Users/dbrowne/Sites/react-native-counter-ios-android/node_modules/remote-redux-devtools/node_modules/react/node_modules/fbjs/lib/warning.js collides with /Users/dbrowne/Sites/react-native-counter-ios-android/node_modules/react-native/node_modules/fbjs/lib/warning.js

Error:
Naming collision detected:
/Users/dbrowne/Sites/react-native-counter-ios-android/node_modules/remote-redux-devtools/node_modules/react/node_modules/fbjs/lib/warning.js collides with /Users/dbrowne/Sites/react-native-counter-ios-android/node_modules/react-native/node_modules/fbjs/lib/warning.js
```

see https://github.com/chentsulin/react-native-counter-ios-android/issues/12#issuecomment-186542678.

## License
MIT © [C. T. Lin](https://github.com/chentsulin)
