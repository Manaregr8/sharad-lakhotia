"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginInput } from "@/lib/validators";
import styles from "./LoginForm.module.scss";

export default function LoginForm() {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<LoginInput>({ resolver: zodResolver(loginSchema) });

  const onSubmit: SubmitHandler<LoginInput> = async (values) => {
    setErrorMessage(null);

    const result = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false
    });

    if (result?.error) {
      setErrorMessage("Invalid email or password. Please try again.");
    } else {
      router.push("/admin/blogs");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <h1>Admin Sign In</h1>
      <div className={styles.fieldGroup}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" autoComplete="email" {...register("email")} />
        {errors.email && <span className={styles.error}>{errors.email.message}</span>}
      </div>
      <div className={styles.fieldGroup}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" autoComplete="current-password" {...register("password")} />
        {errors.password && <span className={styles.error}>{errors.password.message}</span>}
      </div>
      {errorMessage && <div className={styles.error}>{errorMessage}</div>}
      <button className={styles.submit} type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
