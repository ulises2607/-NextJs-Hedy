"use client";

const generatePostButton = () => {
  const handleCLick = () => {
    fetch("http://localhost:3000/api/posts", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return <button onClick={handleCLick}>add Post</button>;
};

export default generatePostButton;
