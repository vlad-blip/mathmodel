import Navigation from "@/components/Navigation/Navigation";
import { useAuthContext } from "@/context/AuthContext";

import styles from "./Header.module.scss";

export default function Header() {
  const { user, resetUser } = useAuthContext();

  return (
    <header className={styles.header}>
      {user ? (
        <div
          style={{
            fontSize: "2rem",
            backgroundColor: "#5f5f5f",
            color: "white",
            padding: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            columnGap: "2rem",
            textAlign: "center",
          }}
        >
          Admin access: {user.email}
          <button
            style={{ padding: ".5em 1em", borderRadius: "1em" }}
            onClick={resetUser}
          >
            Logout
          </button>
        </div>
      ) : null}
      <Navigation />
    </header>
  );
}
