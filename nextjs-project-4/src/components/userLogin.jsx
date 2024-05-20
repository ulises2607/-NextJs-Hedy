import firebaseAuth from "../firebase/firebase_auth";
import firebaseManage from "../firebase/firebase_manage";

import Button from "@/components/ui/button";

import { useState } from "react";
import { useHistory } from "react-router-dom";

const UserLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const response = await firebaseAuth.signInWithEmail(email, password);
    if (!response.error) {
      const user = await firebaseManage.getUser(response.user.uid);
      if (user) {
        history.push("/posts");
      } else {
        history.push("/create-profile");
      }
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-3xl font-bold">Login</h1>
      <div className="flex flex-col w-1/4">
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="p-2 border border-gray-300 rounded"
        />
        <Button onClick={handleLogin}>Login</Button>
      </div>
    </div>
  );
};
