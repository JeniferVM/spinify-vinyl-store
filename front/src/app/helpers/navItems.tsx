export enum PATHROUTES {
  HOME = "/home",
  PRODUCTS = "/products",
  CART = "/cart",
  LOGIN = "/login",
  REGISTER = "/register",
}

export const navItems = [
  {
    name: "Products",
    route: PATHROUTES.PRODUCTS,
  },
  {
    name: "Cart",
    route: PATHROUTES.CART,
  },
  {
    name: "Login",
    route: PATHROUTES.LOGIN,
  },
  {
    name: "Register",
    route: PATHROUTES.REGISTER,
  },
];
