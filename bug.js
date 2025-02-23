This bug occurs when using the Expo `Linking` API to handle deep links.  If the app is opened from a deep link, and then the user navigates to another screen within the app, subsequent attempts to use `Linking.getInitialURL()` will return `null`, even if another deep link is opened. This prevents the app from correctly handling subsequent deep links.