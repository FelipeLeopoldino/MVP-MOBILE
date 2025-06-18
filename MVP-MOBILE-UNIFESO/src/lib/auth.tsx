import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "./firebase"
import { doc, setDoc } from "firebase/firestore";

export async function loginUser(email: string, password: string) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    return userCredential.user
}

export async function registerUser({
    nome,
    email,
    senha,
}: {
    nome: string;
    email: string;
    senha: string;
}) {
    const userCredential = await createUserWithEmailAndPassword(auth, email, senha)
    const uid = userCredential.user.uid

    await setDoc(doc(db, 'users', uid), {
        nome,
        email,
        uid,
        createdAt: new Date()
    })
}