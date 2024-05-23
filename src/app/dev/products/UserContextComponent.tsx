"use client";

import { useUser } from "@/context/UserContext";

export default function UserContextComponent() {
  const { name, setName } = useUser();

  const handleClick = () => {
    if (!name) {
      setName("Steve");
    } else {
      setName("");
    }
  };
  return <button onClick={handleClick}>Name: {name}</button>;
}
