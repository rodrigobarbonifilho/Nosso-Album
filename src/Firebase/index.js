import { initializeApp } from "firebase/app";
import { getStorage, listAll, ref } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCkmJKFgX3u8e6U3sQ_l_fk19nm1ci4_qw",
    authDomain: "nossas-fotos-daa25.firebaseapp.com",
    projectId: "nossas-fotos-daa25",
    storageBucket: "nossas-fotos-daa25.appspot.com",
    messagingSenderId: "429557125984",
    appId: "1:429557125984:web:3fcc3bccbb6fc667f98405",
    measurementId: "G-34RJ70W6ZX"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage)
const imagesRef = ref(storage, "images")

export async function getImages() {
    console.clear()
    let objectReturn = await listAll(imagesRef)
        .then((object) => {
            let imagesPath = []
            object.items.forEach((image) => {
                imagesPath.push(image.fullPath);
            })
            return { status: "successs", data: imagesPath }
        })
        .catch((error) => {
            return { status: "failed", data: null }
        })

    return objectReturn;
}
