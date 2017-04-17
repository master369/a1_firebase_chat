window.app = angular.module('firebaseChat', ['firebase']);

  var config = {
    apiKey: "AIzaSyB5iNWqGaY3r9hkdvjmbbNvez5lnQKg2IY",
    authDomain: "fibasechat.firebaseapp.com",
    databaseURL: "https://fibasechat.firebaseio.com",
    storageBucket: "fibasechat.appspot.com",
    messagingSenderId: "829036329929"
  };
  firebase.initializeApp(config);