# react-native-counter-ios-android

> Minimal implement of redux counter example on ReactNative iOS and Android

I don't use any syntax out of React Native's enabled transformations, so no any patch on ReactNative is needed.

- react - v15.4
- react-native v0.39
- redux v3
- react-redux v4
- redux-thunk v2
- remote-redux-devtools v0.5

![](https://cloud.githubusercontent.com/assets/8992046/15353674/c28f295e-1d1c-11e6-8168-5b17841e2b18.png)

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

or

```sh
react-native run-ios
```


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

## Maintainers

- [C. T. Lin](https://github.com/chentsulin)
- [Chiara-yen](https://github.com/Chiara-yen)


## License
MIT © [C. T. Lin](https://github.com/chentsulin)
