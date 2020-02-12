export default class Hero {
  id: String;
  name: string;
  difficulty: int;
  description: String;
  role: String;
  image: String;
  secondary: String;
  appliedJobstate: Boolean;

  constructor(data: any) {
    this.id = data['id'];
    this.name = data['name'];
    this.difficulty = data['difficulty'];
    this.description = data['description'];
    this.role = data['role'];
    this.image = data['image'];
    this.secondary = data['secondary'];
    this.appliedJobstate = true;
  }

  clone() {
    return new Hero({
      id: this.heroId,
      name: this.name,
      difficulty: this.difficulty,
      description: this.description,
      role: this.role,
      image: this.image,
      secondary: this.secondary,
      appliedJobstate: this.appliedJobstate,
    });
  }
}
