# Expo Linking.getInitialURL() Returns Null After Navigation

This repository demonstrates a bug in Expo's `Linking` API where `Linking.getInitialURL()` returns `null` after navigating within the app, even when a new deep link is opened.  The issue is that the initial URL is only retrieved once on app launch and is not updated afterwards, even with new deep links. This example showcases the issue and provides a workaround.

## Reproducing the Bug

1. Clone this repository.
2. Run `npm install` or `yarn install`.
3. Run the app using `expo start`.
4. Open a deep link (e.g., `exp://your-app-id.expo.io/deeplink`).
5. Navigate to another screen within the app.
6. Open another deep link.
7. Observe that `Linking.getInitialURL()` returns `null`.

## Workaround

The provided `bugSolution.js` file demonstrates a workaround using an event listener that captures deep link events after the initial app launch.