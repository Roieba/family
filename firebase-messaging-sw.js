
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.6.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyA2ik_QDKOvcE1vk-XumA9502ffRmiBm68",
  authDomain: "vacationfamilychecklist.firebaseapp.com",
  projectId: "vacationfamilychecklist",
  storageBucket: "vacationfamilychecklist.appspot.com",
  messagingSenderId: "652023210604",
  appId: "1:652023210604:web:767527fac16f81686cee49"
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: payload.notification.icon
  });
});
