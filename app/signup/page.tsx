"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";

const SignupPage = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signinHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert("Sign in");
  };

  return (
    <section className="fixed z-20 min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-white via-[#FFF2B8] to-white">
      <header className="fixed top-0 w-full flex items-center justify-center bg-white py-2">
        <Link
          href={"/"}
          className="h-12 w-28 sm:h-[62px] sm:w-[152px] cursor-pointer"
        >
          <Image src="/Logo.png" alt="Logo png" height={62} width={152} />
        </Link>
      </header>

      <div className="h-screen w-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-semibold">Xcess Luggage</h1>
        <p className="text-sm">we handle, you travel</p>

        <form
          onSubmit={(e) => signinHandler(e)}
          className="h-[552px] w-[485px] rounded-2xl shadow-lg bg-white p-8 py-12 flex flex-col gap-6 mt-4"
        >
          <div>
            <label className="text-xl font-medium ml-4">Email</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              className="h-[52px] w-full outline-none border-[1.5px] border-[#C0C0C0] mt-1 rounded-3xl px-5 focus-within:border-primary"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <label className="text-xl font-medium ml-4">Password</label>
            <input
              type={eyeOpen ? "text" : "password"}
              className="h-[52px] w-full outline-none border-[1.5px] border-[#C0C0C0] mt-1 rounded-3xl px-5 focus-within:border-primary"
              placeholder="Enter password"
            />
            <button onClick={() => setEyeOpen(!eyeOpen)} type="button">
              {eyeOpen ? (
                <Image
                  className="absolute right-4 top-12 cursor-pointer"
                  src={"/icons/eye.svg"}
                  alt="eye icon"
                  height={24}
                  width={24}
                />
              ) : (
                <Image
                  className="absolute right-4 top-12 cursor-pointer"
                  src={"/icons/crossed-eye.svg"}
                  alt="crossed eye icon"
                  height={24}
                  width={24}
                />
              )}
            </button>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <button
              type="submit"
              className="w-full py-3 rounded-3xl cursor-pointer active:scale-95 transition-transform bg-primary text-xl font-medium"
            >
              Sign up
            </button>
            <button
              type="button"
              className="w-full cursor-pointer flex gap-1 justify-center py-4 text-[#626262] rounded-3xl border-[1px] border-[#ABABAB] text-sm font-medium"
            >
              <Image
                src={"/icons/Google-icon.png"}
                alt="Google icon"
                height={22}
                width={22}
              />{" "}
              Sign in with Google
            </button>
          </div>
          <p className="text-sm text-[#626262] text-center font-medium">
            Already have a account?{" "}
            <Link href={"/signin"} className="text-[#2D81FF] cursor-pointer">
              Sign in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export default SignupPage;
