import {
  LoginFormData,
  RegisterFormData,
} from "../helpers/validators/formsSchema";

export const postRegister = async (userData: RegisterFormData) => {
  try {
    const res = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error Register");
    }
  } catch (error) {
    console.error("Error Register", error);
    throw error;
  }
};

export const postLogin = async (userData: LoginFormData) => {
  try {
    const res = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (res.ok) {
      return await res.json();
    } else {
      const errorData = await res.json();
      throw new Error(errorData.message || "Error Login");
    }
  } catch (error) {
    console.error("Error login", error);
    throw error;
  }
};
