export enum PATHROUTES {
  HOME = "/home",
  PRODUCTS = "/products",
  CART = "/cartPage",
  LOGIN = "/login",
  REGISTER = "/register",
  DASHBOARD = "/dashboard",
}

export const navItems = [
  {
    name: "Login",
    route: PATHROUTES.LOGIN,
  },
  {
    name: "Register",
    route: PATHROUTES.REGISTER,
  },
  {
    name: "Products",
    route: PATHROUTES.PRODUCTS,
  },
  {
    name: "Cart",
    route: PATHROUTES.CART,
  },
];
