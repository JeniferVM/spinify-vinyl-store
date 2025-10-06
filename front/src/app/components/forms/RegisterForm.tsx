"use client";

import InputField from "./Inputs";
import { useFormik } from "formik";
import {
  RegisterInitialValues,
  RegisterValSchema,
} from "@/app/helpers/validators/formsSchema";
import { postRegister } from "@/app/Services/auth.serv";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/context/toastContext";
import { useState } from "react";

function RegisterForm() {
  const router = useRouter();
  const { showToast } = useToast();
  const [isRegistered, setIsRegistered] = useState(false);

  const formik = useFormik<typeof RegisterInitialValues>({
    initialValues: RegisterInitialValues,
    validationSchema: RegisterValSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const res = await postRegister(values);
        if (res) {
          setIsRegistered(true);
          showToast(
            "Registration successful! Redirecting to login...",
            "success"
          );
          setTimeout(() => router.push("/login"), 1500);
        }
        resetForm();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Registration failed. Please try again.";
        showToast(errorMessage, "error");
        setSubmitting(false);
      }
    },
  });

  return (
    <div className=" ml-20 w-125 bg-black/40 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-lg">
      <form onSubmit={formik.handleSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={isRegistered}
        />
        {formik.errors.email && (
          <p className="text-custume-orange text-sm mt-1">
            {formik.errors.email}
          </p>
        )}

        <InputField
          label="Password"
          type="password"
          name="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={isRegistered}
        />
        {formik.errors.password && (
          <p className="text-custume-orange text-sm mt-1">
            {formik.errors.password}
          </p>
        )}

        <InputField
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={isRegistered}
        />
        {formik.errors.confirmPassword && (
          <p className="text-custume-orange text-sm mt-1">
            {formik.errors.confirmPassword}
          </p>
        )}

        <InputField
          label="Name"
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={isRegistered}
        />
        {formik.errors.name && (
          <p className="text-custume-orange text-sm mt-1">
            {formik.errors.name}
          </p>
        )}

        <InputField
          label="Address"
          type="text"
          name="address"
          value={formik.values.address}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={isRegistered}
        />
        {formik.errors.address && (
          <p className="text-custume-orange text-sm mt-1">
            {formik.errors.address}
          </p>
        )}

        <InputField
          label="Phone"
          type="text"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          disabled={isRegistered}
        />
        {formik.errors.phone && (
          <p className="text-custume-orange text-sm mt-1">
            {formik.errors.phone}
          </p>
        )}

        <div className="flex items-start mt-5">
          <input
            id="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded-sm bg-gray-50 focus:ring-3 focus:ring-orange-400"
            required
            disabled={isRegistered}
          />
          <label
            htmlFor="terms"
            className="ms-2 text-sm font-medium text-custume-light"
          >
            I agree with the{" "}
            <a
              href="https://www.gob.mx/terminos"
              className="text-custume-orange hover:underline"
              target="_blank"
            >
              terms and conditions
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={formik.isSubmitting || isRegistered}
          className="mt-6 w-full bg-custume-orange text-white font-semibold py-3 rounded-lg hover:bg-orange-600 transition-all duration-300 disabled:opacity-60"
        >
          {formik.isSubmitting ? (
            <div className="flex justify-center items-center">
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-5 h-5 mr-2 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
              >
                <path
                  d="M100 50.59C100 78.20 77.61 100.59 50 100.59C22.39 100.59 0 78.20 0 50.59C0 22.98 22.39 0.59 50 0.59C77.61 0.59 100 22.98 100 50.59ZM9.08 50.59C9.08 73.19 27.40 91.51 50 91.51C72.60 91.51 90.92 73.19 90.92 50.59C90.92 27.99 72.60 9.67 50 9.67C27.40 9.67 9.08 27.99 9.08 50.59Z"
                  fill="currentColor"
                />
                <path
                  d="M93.96 39.04C96.39 38.40 97.86 35.91 97.00 33.55C95.29 28.82 92.87 24.36 89.81 20.35C85.84 15.12 80.88 10.72 75.21 7.41C69.54 4.10 63.27 1.94 56.76 1.05C51.76 0.36 46.69 0.44 41.73 1.27C39.26 1.69 37.81 4.19 38.45 6.62C39.08 9.04 41.57 10.47 44.05 10.10C47.85 9.55 51.72 9.53 55.54 10.04C60.86 10.77 65.99 12.54 70.63 15.25C75.27 17.96 79.33 21.56 82.58 25.84C84.91 28.91 86.79 32.29 88.18 35.87C89.08 38.21 91.54 39.67 93.96 39.04Z"
                  fill="black"
                />
              </svg>
            </div>
          ) : isRegistered ? (
            "REGISTERED"
          ) : (
            "CREATE ACCOUNT"
          )}
        </button>

        <div className="mt-6 text-center text-gray-400">
          <p>
            Already have an account?{" "}
            <span
              onClick={() => router.push("/login")}
              className="text-custume-orange hover:underline cursor-pointer"
            >
              Log in
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default RegisterForm;
