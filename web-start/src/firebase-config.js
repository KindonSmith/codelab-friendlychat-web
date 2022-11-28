/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  apiKey: "AIzaSyB0SWafR2aY4pvFCpe3K5jFhh_Nem6r6tQ",
  authDomain: "limechat-6abce.firebaseapp.com",
  projectId: "limechat-6abce",
  storageBucket: "limechat-6abce.appspot.com",
  messagingSenderId: "212940425779",
  appId: "1:212940425779:web:40e1d6e51734c5d70eb146"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
    'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}