export class Player {
  public image: string;
  public name: string;
  public age: string;
  public position: string;
  public numberOfGames: string;
  public description: string;

  constructor(image: string, name: string, age: string, position: string,numberOfGames: string, description: string){
    this.image = image;
    this.name = name;
    this.age = age;
    this.position = position;
    this.numberOfGames = numberOfGames;
    this.description = description;
  }
}