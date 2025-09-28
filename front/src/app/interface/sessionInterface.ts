export interface sessionInterface {
  login: boolean;
  token: string;
  user: {
    name: string;
    email: string;
    address: string;
    phone: string;
    orders: [];
    wishList: [];
    id: number;
  };
}
