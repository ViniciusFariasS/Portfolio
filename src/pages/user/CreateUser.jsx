import React, { useState } from "react";
import Input from "../../components/Input";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../services/firebaseConfig";


export default function CreateUser() {

    const [user, setUser] = useState({
        name: '',
        age: 0,
        email: "",
        password: null,
        uid: null
    });

    const createUser = () => {
        const auth = getAuth();
        console.log(user);
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then(async (userCredential) => {
                const userCreated = userCredential.user;
                setUser({ ...user, uid: userCreated.uid })
                try {
                    const docRef = await addDoc(collection(db, "Users"), {
                        Name: user.name,
                        Age: user.age,
                        Email: user.email,
                        Uid: user.uid
                    });                    
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
                console.log(user);
            }
            )
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    return (
        <div>
            <span>Name:</span>
            <Input type="text" name="Name" handleOnChange={(e) => setUser({ ...user, name: e.target.value })} />
            <span>Idade:</span>
            <Input type="number" name="Age" handleOnChange={(e) => setUser({ ...user, age: e.target.value })} />
            <span>Email:</span>
            <Input type="text" name="Email" handleOnChange={(e) => setUser({ ...user, email: e.target.value })} />
            <span>Senha:</span>
            <Input type="password" name="Password" handleOnChange={(e) => setUser({ ...user, password: e.target.value })} />

            <button onClick={createUser}>Criar usuário</button>
        </div>
    )
}