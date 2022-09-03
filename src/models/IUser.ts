export class IUser {
  username: string;
  password: string;
  email: String;
  createdAt: Number;
  guilds: Number[] = [];
  accessToken: string = "";
  constructor(username: string, password: string, email: string) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.createdAt = Date.now();
  }
}
