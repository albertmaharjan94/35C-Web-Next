"use client"; // IMPORTANT TO USE CONTEXT
import Image from "next/image";
import { useAuth } from "@/context/AuthContext";
export default function Home() {
  const { user, logout } = useAuth();
  return (
    <div>
      Home
      { user && <div> Welcome {user.email}</div> }
      { user && <button onClick={logout}>Logout</button> }
    </div>
  );
}

// practice
// make new url
// /practice/user
// /practice/user/profile
// /practice/user/settings

// add layout to practice/user
// On top of the page, display "User Layout Header"
// On bottom of the page, display "User Layout Footer"

// practice/user/page.tsx
// Display "User Page"

// practice/user/profile/page.tsx
// Display "User Profile Page"

// practice/user/settings/page.tsx
// Display "User Settings Page"
