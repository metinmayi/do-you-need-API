declare global {
  namespace Express {
    interface User {
      username: string;
      id: number;
      access_token: string;
    }
  }
}

export function isExpressUser(
  potentialUser: Express.User | undefined
): potentialUser is Express.User {
  return (
    typeof potentialUser?.username === "string" &&
    typeof potentialUser?.id === "number" &&
    "access_token" in potentialUser
  );
}
