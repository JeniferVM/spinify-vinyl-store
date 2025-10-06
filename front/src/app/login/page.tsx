"use client";
import Image from "next/image";
import LoginForm from "../components/forms/LoginForm";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="relative z-10 flex justify-start min-h-screen pl-10">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 max-w-md w-full">
          <LoginForm />
          <div className="mt-10 ml-20">
            <p className="text-white font-signika">
              Don´t you have an account?
            </p>
            <Link
              href="/register"
              className="font-medium text-current-orange dark:text-custume-orange hover:underline"
            >
              REGISTER
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-3 absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/VinilIzq.png"
          alt="Vinil"
          width={850}
          height={850}
          priority
          className="absolute right-0 top-0 opacity-15 lg:opacity-50 object-contain select-none"
        />
      </div>
    </div>
  );
}
