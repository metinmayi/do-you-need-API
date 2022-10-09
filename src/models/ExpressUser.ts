declare global {
  namespace Express {
    interface User {
      username: string;
      id: number;
      access_token: string;
    }
  }
}

export {};
