import firebaseAuth from "../firebase/firebase_auth";

import Button from "@/components/ui/button";

const ButtonSignOut = () => {
  const handleSignOut = async () => {
    const response = await firebaseAuth.signOut();
    console.log(response);
  };

  return (
    <Button onClick={handleSignOut} variant="outline">
      Sign Out
    </Button>
  );
};
