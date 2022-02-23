//----------------------------------------
//  Your web app's Firebase configuration
//----------------------------------------
var firebaseConfig = {
    apiKey: "AIzaSyA9_cgP_dchdd5Vg-WxDlxV0qY8-oWtUyY",
    authDomain: "fir-comp1800-668da.firebaseapp.com",
    projectId: "fir-comp1800-668da",
    storageBucket: "fir-comp1800-668da.appspot.com",
    messagingSenderId: "886206133581",
    appId: "1:886206133581:web:17a5b0a222b23ca4e0f304",
};

//--------------------------------------------
// initialize the Firebase app
// initialize Firestore database if using it
//--------------------------------------------
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();