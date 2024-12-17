"use client";
import React, { useState } from "react";
import Image from "next/image";
import Typography from "@/components/UI/Typography";
import Spacing from "@/components/UI/Spacing";
import Button from "@/components/UI/Button";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode"; // No changes to this import

interface DecodedToken {
  username: string;
  role: string;
  fullname: string; // Added fullname to the interface
}

const LoginPage = () => {
  const router = useRouter();

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setError(null);
    setLoading(true);

    if (!username || !password) {
      setError("Username și parola sunt necesare.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${backendUrl}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || "A apărut o eroare. Vă rugăm să încercați din nou."
        );
        setLoading(false);
        return;
      }

      // Store the token
      localStorage.setItem("token", data.token);

      try {
        const decoded = jwtDecode<DecodedToken>(data.token); // Decode the token
        // Store user details in localStorage, including fullname
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: decoded.username,
            role: decoded.role,
            fullname: data.fullname, // Add fullname from the response
          })
        );
      } catch (error) {
        console.error("Eroare la decodarea tokenului JWT:", error);
        setError("Eroare la decodarea tokenului JWT.");
        setLoading(false);
        return;
      }

      router.push("/programatorAdmin");
    } catch (error) {
      console.error("Eroare de conexiune:", error);
      setError("Eroare de conexiune. Vă rugăm să încercați din nou.");
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen pb-24 bg-white">
      <Image
        src="/images/vessa-logo.png"
        alt="Vessa Hospital Logo"
        width={256}
        height={150}
        className="mb-6"
      />

      <Typography variant="h2" className="text-black">
        Loghează-te în cont
      </Typography>

      <Spacing size="6" />

      {error && (
        <div className="mb-4 text-red-600">
          <Typography variant="paragraph">{error}</Typography>
        </div>
      )}

      <form
        className="flex flex-col items-center w-[30rem]"
        onSubmit={handleSubmit}
      >
        <div className="w-full">
          <label htmlFor="username" className="block mb-2 text-dark-opacity-80">
            <Typography variant="paragraph" className="text-dark-opacity-80">
              Username
            </Typography>
          </label>
          <input
            type="text"
            id="username"
            className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-medium-blue"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <Spacing size="2.5" />

        <div className="w-full">
          <label htmlFor="password" className="block mb-2 text-dark-opacity-80">
            <Typography variant="paragraph" className="text-dark-opacity-80">
              Parola
            </Typography>
          </label>
          <input
            type="password"
            id="password"
            className="w-full p-3 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-medium-blue"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Spacing size="4" />

        <div>
          <Button
            label={loading ? "Se încarcă..." : "Loghează-te"}
            className="w-full"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
