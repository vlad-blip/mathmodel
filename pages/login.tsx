import signIn from "@/firebase/auth/signin";
import { useRouter } from "next/navigation";
import { useState } from "react";

import styles from "@/styles/Login.module.scss";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleForm = async (event: any) => {
    event.preventDefault();

    const { error } = await signIn(email, password);

    if (error) {
      return console.log(error);
    }

    // else successful
    return router.push("/");
  };
  return (
    <div className={`${styles.wrapper} container`}>
      <div className="form-wrapper">
        <h1 className="h-1">Sign in</h1>
        <form onSubmit={handleForm} className={styles.form}>
          <label className={styles.field} htmlFor="email">
            <p className={styles.field_name}>Email</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@mail.com"
            />
          </label>
          <label className={styles.field} htmlFor="password">
            <p className={styles.field_name}>Password</p>
            <input
              onChange={(e) => setPassword(e.target.value)}
              required
              type="password"
              name="password"
              id="password"
              placeholder="password"
            />
          </label>
          <button className={styles.submit} type="submit">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}
