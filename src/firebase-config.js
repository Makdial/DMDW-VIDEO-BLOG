import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyB_pFxnzvXdNMd4J4pxv8MtsA3MRjgrBN4",
  authDomain: "dmwmvideoapp-blog.firebaseapp.com",
  databaseURL: "https://dmwmvideoapp-blog-default-rtdb.firebaseio.com",
  projectId: "dmwmvideoapp-blog",
  storageBucket: "dmwmvideoapp-blog.appspot.com",
  messagingSenderId: "634126656086",
  appId: "1:634126656086:web:f4771ef9bdf1e0e3d551f7"
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);