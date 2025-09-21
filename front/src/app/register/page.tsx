"use client";
import Image from "next/image";
import RegisterForm from "../components/forms/RegisterForm";
import Link from "next/link";

export default function Register() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src="/assets/VinilDer.png"
          alt="Vinil Background"
          width={850}
          height={850}
          className="absolute left-0 top-0 object-cover"
          priority
        />
      </div>

      <div className="relative z-10 flex justify-end items-center min-h-screen pr-20">
        <div className="bg-black/40 backdrop-blur-sm rounded-lg p-8 max-w-md w-full">
          <RegisterForm />
          <div className="mt-10">
            <p className="text-white font-signika">
              Do you already have an account?
            </p>
            <Link
              href="/login"
              className="font-medium text-custume-orange hover:underline"
            >
              LOG IN
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
