
"use client";
import { useRouter } from 'next/navigation';
import { getCookie } from 'cookies-next';

export default function Home() {
  
  return (
    <h1>Welcome, {getCookie('userdata')}</h1>
  );
}
