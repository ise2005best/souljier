"use client";
import { useState, useEffect } from "react";

const LAUNCH_DATE = new Date("2026-03-09T18:00:00Z");

const calcTimeLeft = (target: Date) => {
  const diff = target.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
};

const useCountdown = (target: Date) => {
  const [timeLeft, setTimeLeft] = useState(() => calcTimeLeft(target));

  useEffect(() => {
    const interval = setInterval(() => setTimeLeft(calcTimeLeft(target)), 1000);
    return () => clearInterval(interval);
  }, [target]);

  return timeLeft;
};
const pad = (n: number) => String(n).padStart(2, "0");

const Page = () => {
  const [email, setEmail] = useState("");
  const [emailStatus, setEmailStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const { days, hours, minutes, seconds } = useCountdown(LAUNCH_DATE);
  const isLaunched = days === 0 && hours === 0 && minutes === 0 && seconds === 0;

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setEmailStatus("loading");

    try {
      const response = await fetch("/api/email-signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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
    <div className="relative md:min-h-[80vh] min-h-screen flex flex-col items-center justify-center gap-6">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url('assets/home.jpg')` }}
      />

      <p className="md:text-3xl text-xl text-white relative z-10 font-primary text-center px-4">
        FIRST ACCESS. LIMITED PIECES. SIGNUP NOW.
      </p>

      {/* Countdown Timer */}
      <div className="relative z-10 flex gap-4 md:gap-8">
        {isLaunched ? (
          <p className="text-white font-primary text-2xl tracking-widest">
            WE ARE LIVE
          </p>
        ) : (
          [
            { label: "DAYS", value: days },
            { label: "HRS", value: hours },
            { label: "MIN", value: minutes },
            { label: "SEC", value: seconds },
          ].map(({ label, value }) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-white font-primary md:text-5xl text-3xl font-bold tabular-nums">
                {pad(value)}
              </span>
              <span className="text-white/60 font-primary text-[10px] md:text-xs tracking-widest mt-1">
                {label}
              </span>
            </div>
          ))
        )}
      </div>

      {/* Email Signup Form */}
      <div className="relative z-10 w-full max-w-md px-6 font-primary">
        <div className="rounded-lg shadow-2xl p-8 md:p-10">
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