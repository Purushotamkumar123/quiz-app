import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_BNSlbRVdHmGq9TMVJUB7G7QXZftfmQ8",
  authDomain: "authentication-85413.firebaseapp.com",
  databaseURL: "https://authentication-85413-default-rtdb.firebaseio.com",
  projectId: "authentication-85413",
  storageBucket: "authentication-85413.appspot.com",
  messagingSenderId: "975204788312",
  appId: "1:975204788312:web:cafc2098b3082ecfed022d",
  measurementId: "G-VXV968K0MN"
};

const loginButton = initializeApp(firebaseConfig);
const auth = getAuth();
export {loginButton, auth}

