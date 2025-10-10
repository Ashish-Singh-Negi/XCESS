"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const page = () => {
  const [eyeOpen, setEyeOpen] = useState(false);

  return (
    <section className="fixed z-20 min-h-screen w-full flex justify-center items-center bg-gradient-to-br from-white via-[#FFF2B8] to-white">
      <header className="fixed top-0 h-32 w-full border-[1px] border-[#9E9E9E] flex items-center justify-center bg-white">
        <Image src={"/Logo.png"} alt="Logo image" height={64} width={154} />
      </header>

      <div className="h-screen w-full flex flex-col items-center justify-center gap-2">
        <h1 className="text-4xl font-semibold">Xcess Luggage</h1>
        <p className="text-sm">we handle, you travel</p>

        <form className="h-[552px] w-[485px] rounded-2xl shadow-lg bg-white p-8 py-12 flex flex-col gap-6 mt-4">
          <div>
            <label className="text-xl font-medium ml-4">Email</label>
            <input
              type="email"
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
            <div className="text-sm text-[#5A5A5A] flex items-center justify-between gap-2 mt-2 px-3">
              <div className="flex gap-2">
                <div className="size-[18px] rounded-md border-[1px] border-[#C0C0C0]"></div>
                <p>Remember me</p>
              </div>

              <Link
                className="text-[#2D81FF] font-medium"
                href={"/forget-pass"}
              >
                Forget Password ?
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-4 mt-6">
            <button className="w-full py-3 rounded-3xl bg-primary text-xl font-medium">
              Sign In
            </button>
            <button className="w-full flex gap-1 justify-center py-4 text-[#626262] rounded-3xl border-[1px] border-[#ABABAB] text-sm font-medium">
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
            Don't have a account?{" "}
            <Link href={"/signup"} className="text-[#2D81FF] cursor-pointer">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
export default page;
