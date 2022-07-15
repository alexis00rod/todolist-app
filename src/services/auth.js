import { app } from './key'
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, setPersistence, browserLocalPersistence } from "firebase/auth";

const auth = getAuth(app)

// Signup auth
export const signupAuth = (email,password) => createUserWithEmailAndPassword(auth,email,password)
// Create profile auth
// export const createProfileAuth = (name,photo) => {
//     const user = auth.currentUser
//     user.displayName = name
//     user.photoURL = photo
//     console.log('user', user)
// }
// Login auth
export const loginAuth = (email,password) => {
    const persistence = () => setPersistence(auth, browserLocalPersistence)
    return signInWithEmailAndPassword(auth,email,password)
}
// Auth state changed
export const authState = (setUser,setLoading,setUserDb) => {
    const unsubuscribe = onAuthStateChanged(auth , user => {
        setUser({
            email: user.email,
            name: user.displayName,
            photo: user.photoURL
        })
        setUserDb(user.email)
        setLoading(true)
    })
    return unsubuscribe
}
// Logout
export const logout = () => signOut(auth)