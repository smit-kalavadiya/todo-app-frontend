
"use client";
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

export default function Home() {
  const router = useRouter();
  if(!getCookie("userdata")) {
    router.push("login");
  }
  return (
    <h1>Welcome, {getCookie('userdata')}</h1>
  );
}
