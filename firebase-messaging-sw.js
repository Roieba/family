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
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/icon-192x192.png'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
