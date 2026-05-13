import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useMemo, useState } from 'react';
import { auth, isFirebaseConfigured } from '../lib/firebase';
import { AuthContext } from './auth';
function getReadableAuthError(error) {
    const code = typeof error === 'object' && error && 'code' in error ? String(error.code) : '';
    switch (code) {
        case 'auth/configuration-not-found':
        case 'auth/operation-not-allowed':
            return 'Firebase Email/Password sign-in is not enabled yet. Enable it in Firebase Console > Authentication > Sign-in method.';
        case 'auth/api-key-not-valid.-please-pass-a-valid-api-key.':
        case 'auth/invalid-api-key':
            return 'Firebase API key is not valid. Copy the exact firebaseConfig from Firebase Console > Project settings > General > SDK setup and configuration.';
        case 'auth/unauthorized-domain':
            return 'This domain is not allowed in Firebase Authentication. Add localhost in Authentication > Settings > Authorized domains.';
        case 'auth/network-request-failed':
            return 'Network request failed. Please check your internet connection and try again.';
        case 'auth/email-already-in-use':
            return 'This email is already registered. Try logging in instead.';
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/invalid-credential':
        case 'auth/wrong-password':
        case 'auth/user-not-found':
            return 'The email or password is incorrect.';
        case 'auth/weak-password':
            return 'Password should be at least 6 characters.';
        default:
            return code ? `Firebase error: ${code}` : 'Something went wrong. Please try again.';
    }
}
function requireAuth() {
    if (!auth || !isFirebaseConfigured) {
        throw new Error('Firebase is not configured yet. Add your Firebase values to .env.');
    }
    return auth;
}
export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(Boolean(auth));
    useEffect(() => {
        if (!auth) {
            setLoading(false);
            return undefined;
        }
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });
        return unsubscribe;
    }, []);
    const value = useMemo(() => ({
        user,
        loading,
        async signup(name, email, password) {
            try {
                const credential = await createUserWithEmailAndPassword(requireAuth(), email, password);
                if (name.trim()) {
                    await updateProfile(credential.user, { displayName: name.trim() });
                }
            }
            catch (error) {
                throw new Error(getReadableAuthError(error));
            }
        },
        async login(email, password) {
            try {
                await signInWithEmailAndPassword(requireAuth(), email, password);
            }
            catch (error) {
                throw new Error(getReadableAuthError(error));
            }
        },
        async logout() {
            await signOut(requireAuth());
        }
    }), [loading, user]);
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
