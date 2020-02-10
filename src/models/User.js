export default class User {
  fullName: String;
  email: string;
  password: String;

  constructor(data: any) {
    this.fullName = data['fullName'];
    this.email = data['email'];
    this.password = data['password'];
  }

  clone() {
    return new User({
      fullName: this.fullName,
      email: this.email,
      password: this.password,
    });
  }
}
