import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";
import "firebase/functions"
//各々インストールしておかないと使えない
import {firebaseConfig} from "./config";

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();
export const functions = firebase.functions();
export const firebaseTimestamp = firebase.firestore.Timestamp;