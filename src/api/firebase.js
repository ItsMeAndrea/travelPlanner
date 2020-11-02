import firebase from "firebase";

const fb = () => {
  const fbconfig = {
    apiKey: "AIzaSyDJ7VI8n6W7IzaA_rDHunYGPrMsexUPUz4",
    authDomain: "travelplaner-c9296.firebaseapp.com",
    databaseURL: "https://travelplaner-c9296.firebaseio.com",
    projectId: "travelplaner-c9296",
    storageBucket: "travelplaner-c9296.appspot.com",
    messagingSenderId: "610333033496",
    appId: "1:610333033496:web:c3cba3ecde1bc71ce46f6d",
    measurementId: "G-4KHJBWLLPH",
  };

  firebase.initializeApp(fbconfig);
};

export default fb;
