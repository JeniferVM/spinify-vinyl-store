"use client";

import InputField from "./Inputs";
import { useFormik } from "formik";
import {
  LoginInitialValues,
  LoginValSchema,
} from "@/app/helpers/validators/formsSchema";
import { postLogin } from "@/app/Services/auth.serv";
import { useAuth } from "@/app/context/authContext";
import { useRouter } from "next/navigation";
import { useToast } from "@/app/context/toastContext";

function LoginForm() {
  const { setDataUser } = useAuth();
  const router = useRouter();
  const { showToast } = useToast();

  const formik = useFormik<typeof LoginInitialValues>({
    initialValues: LoginInitialValues,
    validationSchema: LoginValSchema,
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const res = await postLogin(values);
        if (res && res.login) {
          setDataUser(res);
          showToast("Login successful!", "success");
          setTimeout(() => router.push("/home"), 1500);
        }
        resetForm();
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } catch (error: any) {
        const errorMessage =
          error?.response?.data?.message ||
          error?.message ||
          "Login failed. Please try again.";
        showToast(errorMessage, "error");
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="mt-20 ml-20 w-125 bg-black/40 backdrop-blur-md border border-white/10 p-10 rounded-2xl shadow-lg">
      <form onSubmit={formik.handleSubmit}>
        <InputField
          label="Email"
          type="email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
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
        />
        {formik.errors.password && (
          <p className="text-custume-orange text-sm mt-1">
            {formik.errors.password}
          </p>
        )}

        <button
          type="submit"
          disabled={formik.isSubmitting}
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
          ) : (
            "LOG IN"
          )}
        </button>

        <div className="mt-6 text-center text-gray-400">
          <p>
            Don’t have an account?{" "}
            <span className="text-custume-orange hover:underline cursor-pointer">
              Register
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
