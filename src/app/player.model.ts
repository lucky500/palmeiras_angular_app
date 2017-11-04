export class Player {
  public img: string;
  public name: string;
  public age: string;
  public position: string;
  public numberOfGames: string;
  public description: string;
  public id: number

  constructor(img: string, name: string, age: string, position: string,numberOfGames: string, description: string, id: number){
    this.img = img;
    this.name = name;
    this.age = age;
    this.position = position;
    this.numberOfGames = numberOfGames;
    this.description = description;
    this.id = id;
  }
}