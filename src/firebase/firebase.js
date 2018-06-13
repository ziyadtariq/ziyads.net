import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDpMMG9wWm3ZBVpkt1rnEVlXbSvza8CqCs",
    authDomain: "ziyads-website.firebaseapp.com",
    databaseURL: "https://ziyads-website.firebaseio.com",
    projectId: "ziyads-website",
    storageBucket: "",
    messagingSenderId: "342381024219"
  };

  firebase.initializeApp(config);

  // const database = firebase.database();

  //   database.ref().set({
  //       contactForm : {
  //         name: 'Ahmad Alazawy',
  //         email: 'ahmad@alazawy.com',
  //         message: 'test message from ahmad'
  //       }

  // }).then(() => {
  //     console.log('Data is saved');
  // }).catch((e)=> {
  //   console.log('This failed.', e);
  // });