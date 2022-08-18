declare global {
    namespace Express {
      interface User {
        name: string;
        id: number;
        accessToken: string;
      }
    }
  }

  export {}