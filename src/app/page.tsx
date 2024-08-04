
"use client";
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';
import { useState } from 'react';

export default function Home() {

  const [username,setUsername] = useState("");

  const getUserData = async () => {
    const response = await fetch("https://todo-app-mern-tbyk.onrender.com/api/user/profile", {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${getCookie("userToken")}`
      },
    });

    const result = await response.json();
    setUsername(result.fname)
  }

  const router = useRouter();
  if(!getCookie("userToken")) {
    router.push("login");
  }
  
  getUserData();

  return (
    <>
    <h1>Welcome, {username}</h1>
    <button>Logout</button>
    </>
    
    
  );
}
