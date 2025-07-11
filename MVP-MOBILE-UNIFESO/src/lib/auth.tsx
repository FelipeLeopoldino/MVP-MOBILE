import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { auth, db } from "./firebase"
import { doc, getDoc, setDoc } from "firebase/firestore";

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

export async function getUserData(uid: string) {
    const userRef = doc(db, "users", uid)
    const userSnap = await getDoc(userRef)

    if (userSnap.exists()) {
        return userSnap.data()
    } else {
        throw new Error('Usuário não encontrado')
    }
}

async function checkIfUserIsAdmin(): Promise<boolean> {
    const user = auth.currentUser;
    if (!user) return false;

    const userRef = doc(db, 'users', user.uid);
    const userSnap = await getDoc(userRef);
    return userSnap.exists() && userSnap.data().admin === true;
}