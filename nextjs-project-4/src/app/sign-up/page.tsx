"use client";
import { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { auth } from "@/firebase/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { createUserWithEmailAndPassword } =
    useCreateUserWithEmailAndPassword(auth);

  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log(res);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error);
    }
  };

  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  if (user) {
    return (
      <div>
        <p>Signed In User: </p>
      </div>
    );
  }

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Regístrate</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Correo electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium mb-2">
            Contraseña
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-3 py-2 rounded-lg bg-gray-800 focus:outline-none focus:ring focus:ring-blue-400"
          />
        </div>
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        >
          Registrarse
        </button>
        <button
          onClick={() => signInWithGoogle}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
        >
          With email
        </button>
      </form>
    </div>
  );
};

export default Signup;
