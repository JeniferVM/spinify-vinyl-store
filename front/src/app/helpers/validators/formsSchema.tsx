import * as Yup from "yup";

export default interface InputsPropsType {
  label: string;
  type: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}

export interface LoginFormData {
  email: "";
  password: "";
}

export interface RegisterFormData {
  email: "";
  password: "";
  confirmPassword: "";
  name: "";
  address: "";
  phone: "";
}

export const LoginValSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .lowercase("Just lowercase letters")
    .trim("Remove leading and trailing whitespace characters from a string"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});

export const LoginInitialValues: LoginFormData = {
  email: "",
  password: "",
};

export const RegisterValSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required")
    .lowercase("Just lowercase letters")
    .trim("Remove leading and trailing whitespace characters from a string"),

  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .max(50, "Password is too long")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("Password is required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords do not match")
    .required("Password confirmation is required"),

  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long")
    .matches(
      /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/,
      "Name can only contain letters and spaces"
    )
    .required("Name is required")
    .trim(),

  address: Yup.string()
    .min(10, "Address must be at least 10 characters")
    .max(200, "Address is too long")
    .required("Address is required")
    .trim(),

  phone: Yup.string()
    .matches(
      /^[\d+\-\s()]{10,15}$/,
      "Phone number must be between 10 and 15 digits"
    )
    .test("is-valid-phone", "Invalid phone number format", (value) => {
      if (!value) return false;
      const digitsOnly = value.replace(/\D/g, "");
      return digitsOnly.length >= 10 && digitsOnly.length <= 15;
    })
    .required("Phone number is required")
    .trim(),
});

export const RegisterInitialValues: RegisterFormData = {
  email: "",
  password: "",
  confirmPassword: "",
  name: "",
  address: "",
  phone: "",
};
