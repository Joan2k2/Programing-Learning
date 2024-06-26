export interface User {
  id: number;
  email: string;
  password: string;
}

export interface EmailPassw {
  email: string;
  password: string;
}

export interface Register {
  email: string|null;
  password: string|null;
}
