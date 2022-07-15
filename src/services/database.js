import { app } from './key'
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, setDoc, where } from 'firebase/firestore'

// Get Firestore Database
const db = getFirestore(app)
// Get collections
// export const getUsers = () => getDocs(collection(db,"users"))
// export const getTasks = (user) => getDocs(collection(db,"users",user,"tasks"))
// // Get documents
// export const getUser = (user) => getDoc(doc(db,"users",user))
// // export const getTaskCategory = (user,category) => getDocs(doc(db,"users","tasks",category))
// // Add documents
export const addTask = (user,task) => addDoc(collection(db,"users",user,"tasks"),task)
// Get documents in real time
export const snapshotTasks = (user, setTasks) => onSnapshot(collection(db,"users",user,"tasks"),snapshot => {
    setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })))
})

export const snapshotTasksCategories = (user,category,setTasks) => onSnapshot(query(collection(db,"users",user,"tasks"),where("taskCategory","==",category)), snapshot => {
    setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
    })))
})
// export const snapshotTaskDate = () => 
