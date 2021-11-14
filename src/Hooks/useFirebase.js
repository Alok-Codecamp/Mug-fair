import { onAuthStateChanged,signOut,getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import firebaseInitialized from "../pages/LoginPage/firebase/firebase.init";


firebaseInitialized();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [admin,setAdmin]=useState(false);
    const auth = getAuth();

    // create user with email and password 
    const registerUser = (email, password,userName,history,location) => {
        // console.log(history)
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
            const newUser={email,displayName:userName}
                setUser(newUser);
                const destination=location.state?.from||'/home';
                history.replace(destination)
                setIsLoading(false);
                // alert('signin successfull')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });
    }
        // user sign in 
        const SignIn = (email,password,location,history) => {
            setIsLoading(true)
           return signInWithEmailAndPassword(auth, email, password)
               
    }
    // observe user state 

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user)
              setIsLoading(false)
            } else {
              setUser({})
              setIsLoading(false)
            }
          });
          
          return ()=>unsubscribe;
    },[])
    
    // check admin or not 
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${user.email}`)
        .then(res=>res.json())
        .then(data=>setAdmin(data.admin))
    },[user.email])


    //sign out user

    const LogOut = () => {
        const auth = getAuth();
        signOut(auth)
        .then(() => {
            setUser({})
        }).catch((error) => {
           console.log(error.massage)
        });
    }

    return {
            isLoading,
            user,
            admin,
            setUser,
            setIsLoading,
            registerUser,
            SignIn,
            LogOut,
            signInWithEmailAndPassword,
    }

}

export default useFirebase;