import { useContext, createContext, useState, useMemo, useEffect } from "react";
import { onAuthStateChanged, getAuth, signOut } from "firebase/auth";
import firebase_app from "@/firebase/config";

const auth = getAuth(firebase_app);

// type User = {
//   email: string;
// };

const contextState = {
  user: {
    email: "",
  },
  resetUser: async () => {
    try {
      await signOut(auth);
      console.log(`Signing out successful`);
    } catch (error) {
      console.error(error);
    }
  },
};

export const AuthContext = createContext(contextState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const value = useMemo(() => ({ ...contextState, user }), [user]);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={value}>
      {loading ? <div>Loading...</div> : children}
    </AuthContext.Provider>
  );
};
