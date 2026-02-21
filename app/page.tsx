"use client";
import { useState } from "react";

const Page = () => {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus("loading");

    try {
      // Replace with your actual API endpoint
      const response = await fetch("/api/email-signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setEmailStatus("success");
        setEmail("");
      } else {
        setEmailStatus("error");
      }
    } catch (error) {
      console.error("Error subscribing:", error);
      setEmailStatus("error");
    }
  };

  return (
    <div className="relative md:min-h-[80vh] min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('assets/home.jpg')` }}
      />

      <p className="md:text-3xl text-xl text-white relative z-10 font-primary text-center">
        FIRST ACCESS. LIMITED PIECES. SIGNUP NOW.
      </p>

      {/* Email Signup Form */}
      <div className="relative z-10 w-full max-w-md px-6 font-primary">
        <div className=" rounded-lg shadow-2xl p-8 md:p-10">
          <form onSubmit={handleEmailSignup} className="space-y-4">
            <div>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full px-4 py-3 border border-white text-white rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            <button
              type="submit"
              disabled={emailStatus === "loading"}
              className="w-full bg-white text-secondary py-3 rounded-md font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {emailStatus === "loading" ? "Subscribing..." : "Subscribe"}
            </button>

            {emailStatus === "success" && (
              <p className="text-green-600 text-sm text-center">
                Thanks for subscribing! Check your inbox.
              </p>
            )}

            {emailStatus === "error" && (
              <p className="text-red-600 text-sm text-center">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
