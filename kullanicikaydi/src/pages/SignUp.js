import { useState, useCallback } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth"
import { auth } from "../firebase";
import { Link } from 'react-router-dom';
const SignUp = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        if (!email || !password) {
            return;
        }
        createUserWithEmailAndPassword(auth, email, password).then((auth) => {
            updateProfile(auth.user, { displayName: name });
        }).catch(e => { console.log(e) });

    }, [name, email, password]);
    return (
        <div className="max-w-md mx-auto py-12">
            <h1 className="text-2xl">Create new account</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8">
                <input type="text" placeholder="Enter your name" className="p-4 bg-gray-100 rounded-md" value={name} onChange={(e) => setName(e.currentTarget.value)} />
                <input type="email" placeholder="Enter your e-mail" className="p-4 bg-gray-100 rounded-md" value={email} onChange={(e) => setEmail(e.currentTarget.value)} />
                <input type="password" placeholder="Enter your password" className="p-4 bg-gray-100 rounded-md" value={password} onChange={(e) => setPassword(e.currentTarget.value)} />
                <input type="submit" className="p-4 bg-blue-300 rounded-md" value="Sign up" />
                <Link to="/sign-in">Already have an account? Sign in</Link>
            </form>
        </div>
    );
};
export default SignUp;