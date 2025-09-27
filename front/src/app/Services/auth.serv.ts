import {
  LoginFormData,
  RegisterFormData,
} from "../helpers/validators/formsSchema";

export const postRegister = async (userData: RegisterFormData) => {
  try {
    const registerRes = await fetch("http://localhost:3000/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (registerRes.ok) {
      return await registerRes.json();
    } else {
      const errorData = await registerRes.json();
      throw new Error(errorData.message || "Error Register");
    }
  } catch (error) {
    console.error("Error Register", error);
    throw error;
  }
};

export const postLogin = async (userData: LoginFormData) => {
  try {
    const loginRes = await fetch("http://localhost:3000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (loginRes.ok) {
      return await loginRes.json();
    } else {
      const errorData = await loginRes.json();
      throw new Error(errorData.message || "Error Login");
    }
  } catch (error) {
    console.error("Error login", error);
    throw error;
  }
};
