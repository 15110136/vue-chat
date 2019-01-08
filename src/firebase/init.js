import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Initialize Firebase
var config = {
  apiKey: "AIzaSyBF1i-5XjdiXjYdawSiujzzxIvermULA8g",
  authDomain: "vue-chat-6fae8.firebaseapp.com",
  databaseURL: "https://vue-chat-6fae8.firebaseio.com",
  projectId: "vue-chat-6fae8",
  storageBucket: "vue-chat-6fae8.appspot.com",
  messagingSenderId: "470963539812"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({
  timestampsInSnapshots: true
});
export default firebaseApp.firestore();