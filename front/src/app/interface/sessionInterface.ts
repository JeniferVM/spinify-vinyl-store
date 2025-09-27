export interface sessionInterface {
  login: boolean;
  token: string;
  user: {
    name: string;
    email: string;
    adress: string;
    phone: string;
    orders: [];
    id: number;
  };
}
