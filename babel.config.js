{
  "expo": {
    "name": "Galaxy Cycle Rush",
    "slug": "galaxy-cycle-rush",
    "version": "1.0.0",
    "orientation": "landscape",
    "icon": "./assets/icon.png",
    "userInterfaceStyle": "dark",
    "splash": {
      "image": "./assets/splash.png",
      "resizeMode": "contain",
      "backgroundColor": "#000000"
    },
    "ios": {
      "supportsTablet": true,
      "bundleIdentifier": "com.galaxycyclerush.app",
      "buildNumber": "1"
    },
    "android": {
      "adaptiveIcon": {
        "foregroundImage": "./assets/adaptive-icon.png",
        "backgroundColor": "#000000"
      },
      "package": "com.galaxycyclerush.app",
      "versionCode": 1,
      "permissions": []
    },
    "web": {
      "favicon": "./assets/favicon.png",
      "bundler": "metro"
    },
    "plugins": [
      "expo-av",
      "expo-font"
    ],
    "extra": {
      "eas": {
        "projectId": "your-eas-project-id-here"
      }
    }
  }
}

