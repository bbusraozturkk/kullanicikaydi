// AdminLayout.js

import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase';

const AdminLayout = () => {
    const [user, isLoading] = useAuthState(auth);
    const [isAdmin, setIsAdmin] = useState(null);

    useEffect(() => {
        const checkAdminStatus = async () => {
            if (user) {
                const userDocRef = firestore.collection('users').doc(user.uid);
                const userDocSnapshot = await userDocRef.get();

                if (userDocSnapshot.exists() && userDocSnapshot.data().isAdmin) {
                    setIsAdmin(true);
                } else {
                    setIsAdmin(false);
                }
            } else {
                setIsAdmin(false);
            }
        };

        checkAdminStatus();
    }, [user]);

    if (isLoading) {
        return <h1>Loading</h1>;
    }

    if (isAdmin) {
        return <Navigate to="/admin" replace />;
    } else {
        return <Navigate to="/sign-in" replace />;
    }
};

export default AdminLayout;
