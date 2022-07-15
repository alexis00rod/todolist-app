import { app } from './key'
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage'

export const storage = getStorage(app)

// Upload photo profile
export const uploadPhotoProfile = (file, setProfile) => {
    const fileRef = ref(storage, `images/photoProfile/${file.name}`)
    uploadBytes(fileRef,file)
    .then(() => {
        getDownloadURL(fileRef)
        .then(resp => setProfile({
            photo: resp
        }))
    })
}

