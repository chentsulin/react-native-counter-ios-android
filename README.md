# react-native-counter-ios-android

> Minimal implement of redux counter example on ReactNative iOS and Android

I don't use any syntax out of React Native's enabled transformations, so no any patch on ReactNative is needed.

- react-native v0.16
- redux v3
- react-redux v3 (stay on v3 until https://github.com/facebook/react-native/issues/2985 be closed)
- redux-thunk v1

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

## Upgrade Guide

[React Native Upgrading](http://facebook.github.io/react-native/docs/upgrading.html)

## License
MIT © [C. T. Lin](https://github.com/chentsulin)
