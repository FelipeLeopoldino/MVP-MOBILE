import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC-e031o-N228p5dBV9pBDpKeQQfxip5JM",
  authDomain: "tere-verde.firebaseapp.com",
  projectId: "tere-verde",
  storageBucket: "tere-verde.firebasestorage.app",
  messagingSenderId: "775538365843",
  appId: "1:775538365843:web:53edf76d2a1fcbca634466"
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)

export { auth, db }