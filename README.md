# Ionic app angular react vue

create project
```
npx @ionic/cli@latest start
```

add mobile
```
npm i
npm i @capacitor/cli @capacitor/core @capacitor/ios @capacitor/android
cap init
```
```
cap add ios;cap add android;cap sync
cap open ios;cap open android
```

Your Ionic app is ready! Follow these next steps:

- Go to your new project: cd ./angular-app
- Run ionic serve within the app directory to see your app in the browser
- Run ionic capacitor add to add a native iOS or Android project using Capacitor
- Generate your app icon and splash screens using cordova-res --skip-config --copy
- Explore the Ionic docs for components, tutorials, and more: https://ion.link/docs
- Building an enterprise app? Ionic has Enterprise Support and Features: https://ion.link/enterprise-edition