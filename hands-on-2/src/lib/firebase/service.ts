import { 
    collection, 
    doc, getDoc, 
    getDocs, 
    getFirestore,
    where,
    query,
    addDoc
 } from 'firebase/firestore'
import app from './init';
import bcrypt from 'bcrypt'

const firestore = getFirestore(app)

export async function retrieveData(collectionName: string) {
    try {
        const snapshot = await getDocs(collection(firestore, collectionName)) //menangkap data
        const data = snapshot.docs.map((doc) => ({ 
            id: doc.id,
            ...doc.data(), //semua data
        }))
        return data;
    } catch (error) {
        console.error("Error retrieving data: ", error);
        throw error;
    }
}

export async function retrieveDataById(collectionName: string, id: string) {
    try {
        const snapshot = await getDoc(doc(firestore, collectionName, id)); 
        const data = snapshot.data();
        return data;
    } catch (error) {
        console.error("Error retrieving data by ID: ", error);
        throw error;
    }
}

export async function register(userData: {
    email: string,
    username: string, 
    password: string, 
}, callback: Function) {
    try {
        const q = query(
            collection(firestore, 'users'), //utk mencari dalam tabel user
            where('email', '==', userData.email), //klo udh terdaftar gaperlu regis lg
        )

        const snapshot = await getDocs(q);
        const data = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));

        // melihat apakah data sudah ada dalam db
        if (data.length > 0) {
            console.log("User already exists");
            callback(false)
        } else {
            userData.password = await bcrypt.hash(userData.password, 10)
            console.log("Hashed password: ", userData.password);

            await addDoc(collection(firestore, 'users'), userData)
                .then(() => {
                    console.log("User added successfully");
                    callback(true);
                })
                .catch((error) => {
                    console.error("Error adding document: ", error);
                    callback(false);
                });
        }
    } catch (error) {
        console.error("Error in register function: ", error);
        callback(false);
    }
}