"use client";

/////// gain testing deep seek //////////////
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  // Hardcoded Admin Credentials
  const adminEmail = "kainaturooj1804a@gmail.com";
  const adminPassword = "kaneezfatima";

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === adminEmail && password === adminPassword) {
      // Redirect to Admin Dashboard
      router.push("/admin/dashboard");
    } else {
      alert("Invalid email or password  \n use and proceed.... \n email:  kainaturooj1804a@gmail.com \n password:  kaneezfatima");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md text-center w-96">
        <h2 className="text-xl font-bold mb-4">Admin Login</h2>

        {/* Hardcoded Manual Login Form */}
        <form onSubmit={handleLogin} className="mb-4">
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            value={email}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 mb-4 border border-gray-300 rounded"
            value={password}
          />
          <button
            type="submit"
            className="bg-black text-white px-4 py-2 rounded w-full"
          >
            Sign In
          </button>
        </form>

        {/* <div className="flex items-center mb-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500 text-sm">OR</span>
          <hr className="flex-grow border-gray-300" />
        </div> */}
      </div>
    </div>
  );
}
