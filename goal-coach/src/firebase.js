import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAdv8EJxoA_ASnreNcVm3pQNckhBvGi52A",
    authDomain: "goalcoach-b5806.firebaseapp.com",
    databaseURL: "https://goalcoach-b5806.firebaseio.com",
    projectId: "goalcoach-b5806",
    storageBucket: "",
    messagingSenderId: "364561687740"
};

export const firebaseApp = firebase.initializeApp(config);
