"use client";
import Image from "next/image";
import RegisterForm from "../components/forms/RegisterForm";

export default function Register() {
  return (
    <div className="min-h-screen relative overflow-hidden flex justify-end items-center pr-10">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <Image
          src="/assets/VinilDer.png"
          alt="Vinil Background"
          width={900}
          height={900}
          priority
          className="absolute left-0 top-0 opacity-20 lg:opacity-40 object-contain select-none"
        />
      </div>
      <RegisterForm />
    </div>
  );
}
